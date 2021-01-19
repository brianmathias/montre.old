import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';

import { LogService } from './log.service';
import { OrganService } from './organ.service';

import { Crescendo } from '../models/crescendo';
import { DrawknobState } from '../models/drawknob-state';
import { Organ } from '../models/organ';
import { OrganLayout } from '../models/organ-layout';
import { Organs } from '../models/organs';
import { Piston } from '../models/piston';
import { PrintSequence } from '../models/sequence';
import { Tutti } from '../models/tutti';

/** This service is responsible for drawing and outputting PDF documents. */
@Injectable({
  providedIn: 'root'
})
export class PDFService {

  /** Local copy of organService.organ (purely for brevity and convenience). */
  private o: Organ;
  
  /** Local copy of organService.organLayout. */
  private ol: OrganLayout;
  
  /** Local copy of organService.pistons. */
  private p: Piston[];
  
  /** Abbreviated venue ("organString"; "TAB" or "CC") used for the upper-left corner venue 
   * indicator and filename generation. */
  private os: string;
  
  /** The sequence used as the main data source by various class methods.   */
  private s: PrintSequence;
  
  /** The jsPDF document used for printSequence(), printCrescendo(), and printTutti() methods. */
  private pdf: jsPDF;

  /** Indicates whether testing mode is active. Gridlines and margins are drawn on the page when true. */
  private testing: boolean = false;


  constructor(private organService: OrganService, private log: LogService) { }

  /** Generates a PDF document based on the PrintSequence passed into the function.
   * 
   * @param sequence {PrintSequence} The PrintSequence object that provides all the data for the 
   * PDF document.
   */
  public printSequence(sequence: PrintSequence, filename: string, title: string): void {

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
      this._drawCornerBoxes(this.os, `Step ${page} of ${this.s.steps.length}`, true);

      let piston: string = `Level ${step.memoryLevel}: ${this.p[step.piston].division} ${this.p[step.piston].number}`;
      
      let basedOn = "(None)";

      if (step.base !== -1) {
        let baseStep = this.s.steps[step.base];
        let basePiston = this.p[baseStep.piston];
        basedOn = `Level ${baseStep.memoryLevel}: ${basePiston.division} ${basePiston.number} (Step ${step.base + 1})`;
      }

      this._drawTextFields(piston, basedOn, step.measure, step.notes);
      this._drawDrawknobs(step.drawknobs);
      this._drawDivisionLabels();
      this._drawDivisionDividers();
      
      page++;
      this.pdf.addPage();
    }
    
    // Delete extra page from end of loop
    this.pdf.deletePage(page); 
    this.pdf.save(filename);
  }

  /** Generates a PDF based on the Crescendo passed into the function. */
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
      this._drawCornerBoxes(this.os, `Stage ${stage.stage} of 60`, true);
      this._drawTextFields(`Stage ${stage.stage}`, `Stage ${stage.stage - 1}`, "", "");
      this._drawDrawknobs(stage.drawknobs);
      this._drawDivisionLabels();
      this._drawDivisionDividers();
      
      page++;
      this.pdf.addPage();
    }

    // Delete extra page from end of loop
    this.pdf.deletePage(page);
    let filename: string = `Crescendo ${crescendo.num}.pdf`;
    this.pdf.save(filename);
  }

  /** Generates a PDF based on the Tutii passed into the function. */
  public printTutti(tutti: Tutti): void {
    
    this._setOrgan(tutti.organ);

    this.pdf = new jsPDF({
      format: "letter",
      orientation: "landscape",
      unit: "pt"
    });

    this._drawTitles("Tutti " + tutti.num, "", "");
    this._drawCornerBoxes(this.os, "", true);
    this._drawTextFields(`Tutti ${tutti.num}`, "", "", "");
    this._drawDrawknobs(tutti.drawknobs);
    this._drawDivisionLabels();
    this._drawDivisionDividers();

    let filename: string = `Tutti ${tutti.num}.pdf`;
    this.pdf.save(filename);
  }


  /** Generates a blank piston record for the organ passed into the function. */
  public blankRecord(organ: Organs): void {

    let page: number = 1;

    this.pdf = new jsPDF({
      format: "letter",
      orientation: "landscape",
      unit: "pt"
    });

    this._setOrgan(organ);

    if(this.testing) { this._drawGrid(); }
    this._drawTitles(`${this.o.venue} Organ Piston Record`, "", "");
    this._drawCornerBoxes(this.os, "Step __ of __", true);
    this._drawCompositionTextField();
    this._drawTextFields("", "", "", "");
    this._drawDrawknobs();
    this._drawDivisionLabels();
    this._drawDivisionDividers();

    this.pdf.save(`Blank Piston Record (${this.os})`); 
  }

  /** Sets the organ (TAB or CC) to be used for the document. (Note: this works independently of 
   * OrganService.setOrgan(). This allows for blank pistons records and items from the sequence 
   * history to be printed independently of the currently selected organ.)*/
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

  /** Draws titles and subtitles.
   * 
   * @param {string} title - The text for the main page title.
   * @param {string} subtitle1 - The text for the first subtitle line.
   * @param {string} subtitle2 - The text for the second subtitle line.
   */
  private _drawTitles(title: string, subtitle1: string, subtitle2: string): void {
    
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
    
    if (subtitle2 !== "") {
      this.pdf.text(subtitle1, center, baseline, {align: "center"});
      baseline += this.ol.subtitleFontSize + 2;
      this.pdf.text(subtitle2, center, baseline, {align: "center"});
    } else {
      this.pdf.text(subtitle1, center, baseline, {align: "center"});
    }
  }

  /** Draws boxes in the upper left and right corners with the supplied text inside.
   * 
   * @param {string} leftBoxText - The text that is to be drawn in the upper left box. If an empty 
   * string is supplied, the left box will not be drawn on the page.
   * @param {string} rightBoxText - The text that is to be drawn in the upper right box. If an 
   * empty string is supplied, the right box will not be drawn on the page.
   * @param {boolean} leftBoxBold - Boolean indicating whether the text in the left box should be
   * bold. Optional and false by default.
   * @param {boolean} rightBoxBold - Boolean indicating whether the text in the right box should be
   * bold. Optional and false by default.
  */
  private _drawCornerBoxes(leftBoxText: string, rightBoxText: string, leftBoxBold: boolean = false, rightBoxBold: boolean = false): void {

    this.pdf.setTextColor(0);
    this.pdf.setDrawColor(0);
    this.pdf.setLineWidth(1);
    this.pdf.setFontSize(this.ol.cornerBoxFontSize);
    
    // Draw left corner box (dont draw anything if empty string passed in)
    if (leftBoxText !== "") {

      this.pdf.rect(this.ol.pageMargin, this.ol.cornerBoxYPosition, this.ol.cornerBoxWidth, this.ol.cornerBoxHeight, "S");
      
      if (leftBoxBold) { 
        this.pdf.setFont(this.ol.font, "bold");
      } else {
        this.pdf.setFont(this.ol.font, "normal");
      }

      this.pdf.text(leftBoxText, this.ol.pageMargin + (this.ol.cornerBoxWidth / 2), this.ol.cornerBoxBaseline, {align: "center"});
    }
    

    // Draw right corner box
    if (rightBoxText !== "") {
      this.pdf.rect(this.ol.pageWidth - (this.ol.pageMargin + this.ol.cornerBoxWidth), this.ol.cornerBoxYPosition, this.ol.cornerBoxWidth, this.ol.cornerBoxHeight, "S");
    
      if (rightBoxBold) { 
        this.pdf.setFont(this.ol.font, "bold");
      } else {
        this.pdf.setFont(this.ol.font, "normal");
      }
      
      this.pdf.text(rightBoxText, this.ol.pageWidth - (this.ol.pageMargin + (this.ol.cornerBoxWidth / 2)), this.ol.cornerBoxBaseline, {align: "center"});
    }
    
  }

  /** Draws the "piston," "based on," "measure(s)," and "notes" text fields with their associated 
   * labels and underlines.
   * 
   * @param {string} piston - The text to appear in the Piston field.
   * @param {string} basedOn - The text to appear in the Based On field.
   * @param {string} measure - The text to appear in the Measure field.
   * @param {string} notes - The text to appear in the Notes field.
   */
  private _drawTextFields(piston: string, basedOn: string, measure: string, notes: string): void {
    
    this.pdf.setLineWidth(1);
    this.pdf.setDrawColor(0);
    
    // Text field underlines
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
    
    // Text field Text
    this.pdf.setFont(this.ol.font, "normal");
    this.pdf.setFontSize(this.ol.textFieldTextFontSize);
      
    this.pdf.text(piston, this.ol.textFieldColumns[0], this.ol.textFieldRows[0] + this.ol.textFieldTextOffset);
    this.pdf.text(basedOn, this.ol.textFieldColumns[2], this.ol.textFieldRows[0] + this.ol.textFieldTextOffset);
    this.pdf.text(measure, this.ol.textFieldColumns[4], this.ol.textFieldRows[0] + this.ol.textFieldTextOffset);
    this.pdf.text(notes, this.ol.textFieldColumns[0], this.ol.textFieldRows[1] + this.ol.textFieldTextOffset);

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

  /** Draws the drawknobs found in Organ.stops. 
   * 
   * @param {DrawknobState[]} drawknobs - An array of DrawknobState integers (drawknobs assumed to 
   * in the same order as the stops in the Organ constant). If this argument is omitted, all 
   * drawknobs are drawn in the "Off" state.
   */
  private _drawDrawknobs(drawknobs?: DrawknobState[]): void {

    this.pdf.setLineWidth(1);
    this.pdf.setFontSize(this.ol.drawknobFontSize);
    this.pdf.setFont(this.ol.font, "bold");

    let r: number = this.ol.drawknobRadius;

    
    // Auxiliarry stops (Tabernacle Organ only, stops 220-229) should only print if at least one 
    // of them is in a On, Add, or Remove (don't print if they are all Off or OutOfRange) state.
    let printAux: boolean = false;

    if(drawknobs && this.os === "TAB") {
      for(let i = 220; i < 230; i++) {
        if (drawknobs[i] !== DrawknobState.Off && drawknobs[i] !== DrawknobState.OutOfRange) {
          printAux = true;
          break;
        } 
      }
    }
    

    for(let i = 0; i < this.o.stops.length; i++) {
      
      const stop = this.o.stops[i];
      let state: DrawknobState;

      if (drawknobs) { state = drawknobs[i]; }
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

      // If the stop is not an auxiliarry stop
      if (!stop.aux) {
        this.pdf.circle(x, y, r, style);
        this.pdf.text(stop.shortName, x, baseline, {align: "center"});
        this.pdf.text(stop.shortPitchDesignation, (x + offset), (baseline + lh), {align: "center"}); 
      } else {

        // Only print auxiliarry stops if at least one has been found to be in a non-Off state (see loop above)
        if (printAux) {
          this.pdf.rect(x - r, y - r, r * 2, r * 2, style);
          this.pdf.text(stop.shortName, x, baseline, {align: "center"});
          this.pdf.text(stop.shortPitchDesignation, (x + offset), (baseline + lh), {align: "center"}); 
        }
      }
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
