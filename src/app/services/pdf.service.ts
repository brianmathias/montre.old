import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Organ } from '../models/organ';
import { Organs } from '../models/organs';
import { Piston } from '../models/piston';
import { OrganLayout } from '../models/organ-layout';
import { PrintSequence } from '../models/sequence';
import { PrintStep } from '../models/sequence-step';
import { Crescendo } from '../models/crescendo';
import { Tutti } from '../models/tutti';
import { DrawknobState } from '../models/drawknob-state';
import { OrganService } from './organ.service';
import { LogService } from './log.service';
 
@Injectable({
  providedIn: 'root'
})
export class PDFService {

  /** Local copy of organService.organ (purely for brevity and convenience). */
  private o: Organ;
  
  /** Local copy of organService.organLayout. */
  private ol: OrganLayout;
  //private organLayout: OrganLayout;
  
  /** Local copy of organService.pistons. */
  private p: Piston[];
  
  /** Abbreviated venue ("organString"; "TAB" or "CC") used for the upper-left corner venue indicator and filename generation. */
  private os: string;
  
  /** The sequence used as the main data source by various class methods.   */
  private s: PrintSequence;
  
  /** The jsPDF document used for PDF() and blankRecord() methods. */
  private pdf: jsPDF;

  /** Indicates whether testing mode is active. Gridlines and margins are drawn on the page
   * when true.
   */
  private testing: boolean = false;


  constructor(private organService: OrganService, private log: LogService) { }

  /** This is the main public method for PDFService. It generates a PDF document based on the 
   * PrintSequence passed into the function.
   * 
   * @param sequence {PrintSequence} The PrintSequence object that provides all the data for the 
   * PDF document.
   */
  public PDF(sequence: PrintSequence, filename: string, title: string): void {

    this.s = sequence;
    this._setOrgan(sequence.organ);

    let page: number = 1;

    this.pdf = new jsPDF({
      format: "letter",
      orientation: "landscape",
      unit: "pt"
    });

    for(let step of this.s.steps){

      this.log.add("Drawing page " + page + ".");
      if(this.testing) { this._drawGrid(); }
      this._drawTitles(title, this.s.composition.composer, this.s.version);
      this._drawCornerBoxes(page);
      this._drawTextFields(step);
      this._drawDrawknobs(step);
      this._drawDivisionLabels();
      this._drawDivisionDividers();
      
      page++;
      this.pdf.addPage();
    }

    this.pdf.deletePage(page); // Delete extra page from end of loop

    this.pdf.save(filename);
    this.log.add("PDF finished.");
  }

  public printCrescendo(crescendo: Crescendo): void {

    let page: number = 1;
    this._setOrgan(crescendo.organ);

    this.pdf = new jsPDF({
      format: "letter",
      orientation: "landscape",
      unit: "pt"
    });

    for (let stage of crescendo.stages) {

      this._drawTitles("Crescendo " + crescendo.num, "", "");
      this._drawCornerBoxesNew(this.os, stage.stage, 60);
      this._drawTextFields();


      this.pdf.setFont(this.ol.font, "normal");
      this.pdf.setFontSize(this.ol.textFieldTextFontSize);


      let pistonString = `Stage ${stage.stage}`;
      this.pdf.text(pistonString, this.ol.textFieldColumns[0], this.ol.textFieldRows[0] + this.ol.textFieldTextOffset);
      
      let baseString = "(None)";
      if(stage.stage > 1) {
        baseString = `Stage ${stage.stage -1}`;
      }
      this.pdf.text(baseString, this.ol.textFieldColumns[2], this.ol.textFieldRows[0] + this.ol.textFieldTextOffset);
      
      let step: PrintStep = {
        drawknobs: stage.drawknobs,
        memoryLevel: -1,
        piston: null,
        base: null,
        notes: null,
        measure: null
      }

      this._drawDrawknobs(step);
      this._drawDivisionLabels();
      this._drawDivisionDividers();
      
      page++;
      this.pdf.addPage();

    }

    this.pdf.deletePage(page);

    let filename: string = "Crescendo " + crescendo.num + ".pdf";
    this.pdf.save("Crescendo" + filename);
  }

  public printTutti(tutti: Tutti): void {
    
    this._setOrgan(tutti.organ);

    this.pdf = new jsPDF({
      format: "letter",
      orientation: "landscape",
      unit: "pt"
    });

    this._drawTitles("Tutti " + tutti.num, "", "");
    this._drawCornerBoxes();
    this._drawTextFields();

    this.pdf.setFont(this.ol.font, "normal");
    this.pdf.setFontSize(this.ol.textFieldTextFontSize);


    let pistonString = `Tutti ${tutti.num}`;
    this.pdf.text(pistonString, this.ol.textFieldColumns[0], this.ol.textFieldRows[0] + this.ol.textFieldTextOffset);
      
    let step: PrintStep = {
      drawknobs: tutti.drawknobs,
      memoryLevel: -1,
      piston: null,
      base: null,
      notes: null,
      measure: null
    }

    this._drawDrawknobs(step);
    this._drawDivisionLabels();
    this._drawDivisionDividers();

    let filename: string = "Tutti " + tutti.num + ".pdf";
    this.pdf.save(filename);
    
  }


  /** Generates a blank piston record for either organ.
   * 
   * @param organ {Organs} The instrument for which a blank record should be generated.
   */

  public blankRecord(organ: Organs): void {

    let page: number = 1;

    this.pdf = new jsPDF({
      format: "letter",
      orientation: "landscape",
      unit: "pt"
    });

    this._setOrgan(organ);

    this.log.add("Drawing page " + page + ".");
    if(this.testing) { this._drawGrid(); }
    this._drawTitles(`${this.o.venue} Organ Piston Record`, "", "");
    this._drawCornerBoxes();
    this._drawCompositionTextField();
    this._drawTextFields();
    this._drawDrawknobs();
    this._drawDivisionLabels();
    this._drawDivisionDividers();

    this.pdf.save(`Blank Piston Record (${this.os})`); 
    this.log.add("PDF finished.");

  }

  /** Sets the organ (TAB or CC) to be used for the document. (Note: this works independently
   * of organService.setOrgan in order to enable the printing of blank piston records for either
   *  organ.
   */
  private _setOrgan(organ: Organs): void {

    if (organ === Organs.Tabernacle) { 
      this.o = this.organService.TabernacleOrgan.organ;
      this.ol = this.organService.TabernacleOrgan.layout;
      this.p = this.organService.TabernacleOrgan.pistons;
      this.os = "TAB"; 
    } else if (organ === Organs.ConferenceCenter ) { 
      this.o = this.organService.ConferenceCenterOrgan.organ;
      this.ol = this.organService.ConferenceCenterOrgan.layout;
      this.p = this.organService.ConferenceCenterOrgan.pistons;
      this.os = "CC"; 
    }
  }

  /** Draws margins and stop column gridlines for testing. */
  private _drawGrid():void {

    this.pdf.setDrawColor("0.8");

    // Draw margins
    this.pdf.line(0, 36, 792, 36); // Top
    this.pdf.line(0, 576, 792, 576); // Bottom
    this.pdf.line(36, 0, 36, 612); // Left
    this.pdf.line(756, 0, 756, 612); // Right

    // Center line
    this.pdf.setDrawColor(0, 0, 255);
    this.pdf.line(396, 0, 396, 612);

    // Stop columns
    this.pdf.setDrawColor(255, 0, 0);
    
    for(let column of this.ol.columns) {
      this.pdf.line(column, 0, column, 612);
    }
  }

  /** Draws titles and subtitles */
  private _drawTitles(title: string, composer: string, version: string): void {
    
    /** Horizontal center of the page. */
    const center = (72 * 11) / 2; 
    let baseline: number = this.ol.titleBaseline;
    
    // Draw title
    this.pdf.setTextColor(0);
    this.pdf.setFontSize(this.ol.titleFontSize);
    this.pdf.setFont(this.ol.font, "bold");

    this.pdf.text(title.toUpperCase(), center, baseline, {align: "center"});

    // Draw subtitles
    this.pdf.setFontSize(this.ol.subtitleFontSize);
    this.pdf.setFont(this.ol.font, "normal");
    baseline += this.ol.subtitleFontSize + 2;
    
    if (version !== "") {
      this.pdf.text(version, center, baseline, {align: "center"});
      baseline += this.ol.subtitleFontSize + 2;
      this.pdf.text(composer, center, baseline, {align: "center"});
    } else {
      this.pdf.text(composer, center, baseline, {align: "center"});
    }
  }

  /** Draws venue (left) and step number (right corner boxes). */
  private _drawCornerBoxes(pageNumber?: number): void {
    
    let pageString: string;

    this.pdf.setTextColor(0);
    this.pdf.setDrawColor(0);
    this.pdf.setLineWidth(1);
    
    // Draw organ indicator (top left corner)
    this.pdf.rect(this.ol.pageMargin, this.ol.cornerBoxYPosition, this.ol.cornerBoxWidth, this.ol.cornerBoxHeight, "S");
    this.pdf.setFont(this.ol.font, "bold");
    this.pdf.setFontSize(this.ol.cornerBoxFontSize);
    this.pdf.text(this.os, this.ol.pageMargin + (this.ol.cornerBoxWidth / 2), this.ol.cornerBoxBaseline, {align: "center"});

    // Draw step number (top right corner)
    this.pdf.rect(this.ol.pageWidth - (this.ol.pageMargin + this.ol.cornerBoxWidth), this.ol.cornerBoxYPosition, this.ol.cornerBoxWidth, this.ol.cornerBoxHeight, "S");
    this.pdf.setFont(this.ol.font, "normal");
    
    if(pageNumber) {
      pageString = `Step ${pageNumber} of ${this.s.steps.length}`;
    } else {
      pageString = "Step __ of __";
    }
    
    this.pdf.text(pageString, this.ol.pageWidth - (this.ol.pageMargin + (this.ol.cornerBoxWidth / 2)), this.ol.cornerBoxBaseline, {align: "center"});

  }

  /** Draws venue (left) and step number (right corner boxes). */
  private _drawCornerBoxesNew(organString: string, pageNumber: number, pageCount: number): void {
    
    let pageString: string;

    this.pdf.setTextColor(0);
    this.pdf.setDrawColor(0);
    this.pdf.setLineWidth(1);
    
    // Draw organ indicator (top left corner)
    this.pdf.rect(this.ol.pageMargin, this.ol.cornerBoxYPosition, this.ol.cornerBoxWidth, this.ol.cornerBoxHeight, "S");
    this.pdf.setFont(this.ol.font, "bold");
    this.pdf.setFontSize(this.ol.cornerBoxFontSize);
    this.pdf.text(organString, this.ol.pageMargin + (this.ol.cornerBoxWidth / 2), this.ol.cornerBoxBaseline, {align: "center"});

    // Draw step number (top right corner)
    this.pdf.rect(this.ol.pageWidth - (this.ol.pageMargin + this.ol.cornerBoxWidth), this.ol.cornerBoxYPosition, this.ol.cornerBoxWidth, this.ol.cornerBoxHeight, "S");
    this.pdf.setFont(this.ol.font, "normal");
    
    if(pageNumber) {
      pageString = `Step ${pageNumber} of ${pageCount}`;
    } else {
      pageString = "Step __ of __";
    }
    
    this.pdf.text(pageString, this.ol.pageWidth - (this.ol.pageMargin + (this.ol.cornerBoxWidth / 2)), this.ol.cornerBoxBaseline, {align: "center"});

  }












  /** Draws the "piston," "based on," "measure(s)," and "notes" text fields with their associated 
   * labels and underlines.
   * 
   * @param {PrintStep} [step] - The sequence step that provides the piston, base piston, measure,
   * and notes information to be drawn on the page. If not passed, only labels and underlines are drawn.
   */
  private _drawTextFields(step?: PrintStep): void {
    
    this.pdf.setLineWidth(1);
    this.pdf.setDrawColor(0);
    
    this.pdf.line(this.ol.textFieldColumns[0], this.ol.textFieldRows[0], this.ol.textFieldColumns[1], this.ol.textFieldRows[0]);  
    this.pdf.line(this.ol.textFieldColumns[2], this.ol.textFieldRows[0], this.ol.textFieldColumns[3], this.ol.textFieldRows[0]);  
    this.pdf.line(this.ol.textFieldColumns[4], this.ol.textFieldRows[0], this.ol.textFieldColumns[5], this.ol.textFieldRows[0]); 
    this.pdf.line(this.ol.textFieldColumns[0], this.ol.textFieldRows[1], this.ol.textFieldColumns[5], this.ol.textFieldRows[1]);  
    
    // Text field labels
    this.pdf.setFont(this.ol.font, "bold");
    this.pdf.setFontSize(this.ol.textFieldLabelFontSize);
    this.pdf.text("PISTON", this.ol.textFieldColumns[0], this.ol.textFieldRows[0] + this.ol.textFieldlabelOffset);
    this.pdf.text("BASED ON", this.ol.textFieldColumns[2], this.ol.textFieldRows[0] + this.ol.textFieldlabelOffset);
    this.pdf.text("MEASURE(S)", this.ol.textFieldColumns[4], this.ol.textFieldRows[0] + this.ol.textFieldlabelOffset);
    this.pdf.text("NOTES", this.ol.textFieldColumns[0], this.ol.textFieldRows[1] + this.ol.textFieldlabelOffset);
    

    // Text field text (only draw if a SequenceStep was passed into the function).

    if (step) {
      this.pdf.setFont(this.ol.font, "normal");
      this.pdf.setFontSize(this.ol.textFieldTextFontSize);
      
      let pistonString = `Level ${step.memoryLevel}: ${this.p[step.piston].division} ${this.p[step.piston].number}`;
      this.pdf.text(pistonString, this.ol.textFieldColumns[0], this.ol.textFieldRows[0] + this.ol.textFieldTextOffset);
      
      let baseString = "(None)";
      if(step.base !== -1) {
        let baseStep = this.s.steps[step.base];
        let basePiston = this.p[baseStep.piston];
        baseString = `Level ${baseStep.memoryLevel}: ${basePiston.division} ${basePiston.number} (Step ${step.base + 1})`;
      }
      
      this.pdf.text(baseString, this.ol.textFieldColumns[2], this.ol.textFieldRows[0] + this.ol.textFieldTextOffset);
      
      this.pdf.text(step.measure, this.ol.textFieldColumns[4], this.ol.textFieldRows[0] + this.ol.textFieldTextOffset);
      
      this.pdf.text(step.notes, this.ol.textFieldColumns[0], this.ol.textFieldRows[1] + this.ol.textFieldTextOffset);
    }
    
  }

  /** Draws the additional "Composition" text field for blank piston records. */
  private _drawCompositionTextField(): void {

    const baseline = this.ol.textFieldBaseline - this.ol.textFieldRowHeight;

    this.pdf.setLineWidth(1);
    this.pdf.setDrawColor(0);
    
    this.pdf.setFont(this.ol.font, "bold");
    this.pdf.setFontSize(this.ol.textFieldLabelFontSize);
    this.pdf.setTextColor(0);

    this.pdf.line(this.ol.textFieldColumns[0], baseline, this.ol.textFieldColumns[5], baseline);  
    this.pdf.text("COMPOSITION", this.ol.textFieldColumns[0], baseline + this.ol.textFieldlabelOffset);
  }

  /** Draws the drawknobs found in PDFService.o.stops.
   * 
   * @param {PrintStep} [step] - A PrintStep that provides state information for each drawknob. If 
   * parameter is not passed, all drawknobs are drawn in the "Off" state.  
   */
  private _drawDrawknobs(step?: PrintStep): void {

    this.pdf.setLineWidth(1);
    this.pdf.setFontSize(this.ol.drawknobFontSize);
    this.pdf.setFont(this.ol.font, "bold");

    let r: number = this.ol.drawknobRadius;
    
    for(let i = 0; i < this.o.stops.length; i++) {
      
      const stop = this.o.stops[i];
      let state: DrawknobState;

      if (step) { state = step.drawknobs[i]; }
      else { state = DrawknobState.Off; }
      
      let x: number 
      
      if (this.o.stops[i].aux) {
        x = this.ol.auxColumns[stop.column];
      } else {
        x = this.ol.columns[stop.column];
      } 

      const y: number = this.ol.rows[stop.row];
      const lh: number = this.ol.drawknobFontSize; // Line height
      let offset: number;
      let baseline: number;
      let style = "";
      
      // Get correct colors for drawknob state (specified in OrganLayout)
      let colors = this.ol.colors[state];
      this.pdf.setDrawColor(colors.stroke.r, colors.stroke.g, colors.stroke.b);
      this.pdf.setFillColor(colors.fill.r, colors.fill.g, colors.fill.b);
      this.pdf.setTextColor(colors.text.r, colors.text.g, colors.text.b);
      style = colors.style;
      
      if(stop.shortPitchDesignation.indexOf("\'") !== -1) {
        offset = this.ol.drawknobPitchOffset;
      } else {
        offset = 0;
      }

      if(stop.shortPitchDesignation === "") {
        baseline = y + (lh / 2) - 1;
      } else {
        baseline = y - 1;
      }

      // Draw a circle around regular stops and a square around "auxilliary" stops
      if(stop.aux) {
        this.pdf.rect(x - r, y - r, r * 2, r * 2, style);
      } else {
        this.pdf.circle(x, y, r, style);
      }

      // Draw drawknob text
      this.pdf.text(stop.shortName, x, baseline, {align: "center"});
      this.pdf.text(stop.shortPitchDesignation, (x + offset), (baseline + lh), {align: "center"}); 
    }
  }

  /** Draws the vertical dividing lines between divisions. */
  private _drawDivisionDividers(): void {

    this.pdf.setLineWidth(this.ol.divisionDividerLineWidth);
    this.pdf.setDrawColor(0);
    this.pdf.setTextColor(0);
    
    for(let divider of this.ol.dividers) {
      this.pdf.line(divider.x, divider.y1, divider.x, divider.y2);
    }
  }

  /** Draws division labels. */
  private _drawDivisionLabels(): void {
    
    this.pdf.setFontSize(this.ol.divisionLabelFontSize);
    this.pdf.setTextColor(0);
    this.pdf.setFont(this.ol.font, "bold");
    
    for(let label of this.ol.labels) {
      this.pdf.text(label.label, label.x, label.y, {align: "center"});
    }
  }
}
