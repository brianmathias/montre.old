import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Organ } from '../models/organ';
import { Organs } from '../models/organs';
import { Piston } from '../models/piston';
import { OrganLayout } from '../models/organ-layout';
import { PrintSequence } from '../models/sequence';
import { DrawknobState } from '../models/drawknob-state';
import { OrganService } from './organ.service';
import { LogService } from './log.service';
 
@Injectable({
  providedIn: 'root'
})
export class PDFService {

  sequence: PrintSequence;
  organ: Organ;
  pistons: Piston[];
  organLayout: OrganLayout;

  constructor(private organService: OrganService, private log: LogService) { 
    this.organ = this.organService.organ;
    this.organLayout = this.organService.organLayout;
    this.pistons = this.organService.pistons;
  }

  public PDF(sequence: PrintSequence){
    
    this.sequence = sequence;
    let organString: string;

    if (this.sequence.organ === Organs.Tabernacle) { organString = "TAB"; }
    else if (this.sequence.organ === Organs.ConferenceCenter ) { organString = "CC" }

    const testing = false;
    const font = "Helvetica";
    const r = this.organLayout.drawknobRadius;
    let page = 1;

    let pdf = new jsPDF({
      format: "letter",
      orientation: "landscape",
      unit: "pt"
    });

    for (let step of this.sequence.steps) {
      
      this.log.add("Drawing page " + page + ".");
      // Draw margins and drawknob columns in test mode
      if(testing) {
        
        pdf.setDrawColor("0.8");

        // Draw margins
        pdf.line(0, 36, 792, 36); // Top
        pdf.line(0, 576, 792, 576); // Bottom
        pdf.line(36, 0, 36, 612); // Left
        pdf.line(756, 0, 756, 612); // Right

        // Center line
        pdf.setDrawColor(0, 0, 255);
        pdf.line(396, 0, 396, 612);

        // Stop columns
        pdf.setDrawColor(255, 0, 0);
        for(let column of this.organLayout.columns) {
          pdf.line(column, 0, column, 612);
        }
      }

      let baseline = 48;

      // Draw title
      pdf.setTextColor("0");
      pdf.setFontSize(18);
      pdf.setFont(font, "bold");
      let titleString = "";
      if (this.sequence.composition.catalogNo !== "") { titleString += "#" + this.sequence.composition.catalogNo + " - "; } 
      titleString += this.sequence.composition.title;
      pdf.text(titleString.toUpperCase(), 396, baseline, {align: "center"});

      // Draw subtitles
      pdf.setFontSize(14);
      pdf.setFont(font, "normal");
      baseline += 16;
      
      if (this.sequence.version !== "") {
        pdf.text(this.sequence.version, 396, baseline, {align: "center"});
        baseline += 16;
        pdf.text(this.sequence.composition.composer, 396, baseline, {align: "center"});
      } else {
        pdf.text(this.sequence.composition.composer, 396, baseline, {align: "center"});
      }
    
      // Draw organ indicator
      pdf.setDrawColor("0");
      pdf.setLineWidth(1);
      pdf.rect(36, 30, 72, 24, "S");
      pdf.setFont(font, "bold");
      pdf.setFontSize(10);
      
      pdf.text(organString, 72, 46, {align: "center"});

      // Draw step number 
      pdf.rect(684, 30, 72, 24, "S");
      pdf.setFont(font, "normal");
      let pageString = "Step " + page + " of " + this.sequence.steps.length;
      pdf.text(pageString, 720, 46, {align: "center"});

      // Draw text fields
      baseline = 120;
      const tfColumns = [36, 263, 283, 509, 529, 756]; // 10" / 3 with 20 point gutters
      const tfRowHeight = 32;
      const tfRows = [baseline, baseline + tfRowHeight];
      const tfLabelOffset = -18;
      const tfTextOffset = -5;

      pdf.setLineWidth(1);
      pdf.setDrawColor(1);
      
      pdf.line(tfColumns[0], tfRows[0], tfColumns[1], tfRows[0]);  
      pdf.line(tfColumns[2], tfRows[0], tfColumns[3], tfRows[0]);  
      pdf.line(tfColumns[4], tfRows[0], tfColumns[5], tfRows[0]); 
      pdf.line(tfColumns[0], tfRows[1], tfColumns[5], tfRows[1]);  
      
      // Text field labels
      pdf.setFont(font, "bold");
      pdf.setFontSize(5);
      pdf.text("PISTON", tfColumns[0], tfRows[0] + tfLabelOffset);
      pdf.text("BASED ON", tfColumns[2], tfRows[0] + tfLabelOffset);
      pdf.text("MEASURE(S)", tfColumns[4], tfRows[0] + tfLabelOffset);
      pdf.text("NOTES", tfColumns[0], tfRows[1] + tfLabelOffset);
      
      // Text field text
      pdf.setFont(font, "normal");
      pdf.setFontSize(11);
      
      let pistonString = "Level " + step.memoryLevel + ": " + this.pistons[step.piston].division + " " + this.pistons[step.piston].number;
      pdf.text(pistonString, tfColumns[0], tfRows[0] + tfTextOffset);
      
      let baseString = "(None)"
      if(step.base !== -1) {
        let baseStep = this.sequence.steps[step.base];
        let basePiston = this.pistons[baseStep.piston];
        baseString = "Level " + baseStep.memoryLevel + ": " + basePiston.division + " " + basePiston.number + " (Step " + (step.base + 1) + ")";
      }
      
      pdf.text(baseString, tfColumns[2], tfRows[0] + tfTextOffset);
      pdf.text(step.measure, tfColumns[4], tfRows[0] + tfTextOffset);
      pdf.text(step.notes, tfColumns[0], tfRows[1] + tfTextOffset);

      // Drawknobs
      pdf.setLineWidth(1);
      pdf.setFontSize(this.organLayout.drawknobFontSize);
      pdf.setFont(font, "bold");
      
      for(let i = 0; i < this.organ.stops.length; i++) {
        const stop = this.organ.stops[i];
        const state: DrawknobState = step.drawknobs[i].state;
        
        let x: number 
        
        if (this.organ.stops[i].aux) {
          x = this.organLayout.auxColumns[stop.column];
        } else {
          x = this.organLayout.columns[stop.column];
        } 

        const y: number = this.organLayout.rows[stop.row];
        const lh: number = this.organLayout.drawknobFontSize; // Line height
        let offset: number;
        let baseline: number;
        let style = "";
        
        switch(state) {
          case DrawknobState.Off:
            pdf.setDrawColor(0);
            pdf.setTextColor(0);
            style = "S";
            break;
          case DrawknobState.On:
            pdf.setDrawColor(0);
            pdf.setFillColor(0);
            pdf.setTextColor(255);
            style = "DF";
            break;
          case DrawknobState.Remove:
            pdf.setDrawColor(180, 0, 0);
            pdf.setTextColor(180, 0, 0);
            style = "S";
            break;
          case DrawknobState.Add:
            pdf.setDrawColor(30, 130, 75);
            pdf.setFillColor(30, 130, 75);
            pdf.setTextColor(255);
            style = "DF";
            break;
        }

        if(stop.shortPitchDesignation.indexOf("\'") !== -1) {
          offset = this.organLayout.drawknobPitchOffset;
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
          pdf.rect(x - r, y - r, r * 2, r * 2, style);
        } else {
          pdf.circle(x, y, r, style);
        }

        
        pdf.text(stop.shortName, x, baseline, {align: "center"});
        pdf.text(stop.shortPitchDesignation, (x + offset), (baseline + lh), {align: "center"}); 
      }

      // Division dividers
      pdf.setDrawColor("0");
      pdf.setTextColor("0");
      for(let divider of this.organLayout.dividers) {
        pdf.line(divider.x, divider.y1, divider.x, divider.y2);
      }

      // Division labels
      pdf.setFontSize(8);
      for(let label of this.organLayout.labels) {
        pdf.text(label.label, label.x, label.y, {align: "center"});
      }

      page = page + 1;
      pdf.addPage("letter", "landscape");
    } // End For step of sequence.steps


    pdf.deletePage(page); // Delete extra page from end of loop

    let title = "";
    if(sequence.composition.catalogNo !== "") { title += sequence.composition.catalogNo + " - "; }
    title += sequence.composition.title;
    if(title === "") { title = "Montre"; }
    title += " (" + organString + ").pdf";

    pdf.save(title);
    this.log.add("PDF finished.")
  }
}
