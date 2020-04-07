import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Organ } from '../models/organ';
import { Piston } from '../models/piston';
import { OrganLayout } from '../models/organ-layout';

import { TabernacleOrganLayout } from '../models/tabernacle-organ-layout';
import { SequenceService } from './sequence.service';
import { OrganService } from './organ.service';
import { Sequence } from '../models/sequence';

@Injectable({
  providedIn: 'root'
})
export class PDFService {

  sequence: Sequence;
  organ: Organ;
  pistons: Piston[];
  organLayout: OrganLayout = new TabernacleOrganLayout();

  constructor(private sequenceService: SequenceService, private organService: OrganService) { 
    this.sequence = this.sequenceService.sequence;
    this.organ = this.organService.organ;
    this.pistons = this.organService.pistons;
  }

  public PDF(){

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
      pdf.setLineWidth(1);
      pdf.rect(36, 30, 72, 24, "S");
      pdf.setFont(font, "bold");
      pdf.setFontSize(10);
      
      let organString;
      if(this.organ.venue === "Tabernacle") { organString = "TAB"; }
      else if (this.organ.venue === "Conference Center") { organString = "CC"; }
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

      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(1);
      pdf.setFontSize(this.organLayout.drawknobFontSize);
      pdf.setFont(font, "bold");
      
      for(let stop of this.organ.stops) {
        const x = this.organLayout.columns[stop.column];
        const y = this.organLayout.rows[stop.row];
        const lh = this.organLayout.drawknobFontSize;
        let offset;
        
        if(stop.shortPitchDesignation.indexOf("\'") !== -1) {
          offset = this.organLayout.drawknobPitchOffset;
        } else {
          offset = 0;
        }

        pdf.circle(x, y, r, "S");
        pdf.text(stop.shortName, x, y, {align: "center"});
        pdf.text(stop.shortPitchDesignation, (x + offset), (y + lh), {align: "center"}); 
      }

      for(let divider of this.organLayout.dividers) {
        pdf.line(divider.x, divider.y1, divider.x, divider.y2);
      }

      pdf.setFontSize(8);
      for(let label of this.organLayout.labels) {
        pdf.text(label.label, label.x, label.y, {align: "center"});
      }

      page = page + 1;
      pdf.addPage("letter", "landscape");
    } // End For step of sequence.steps


    pdf.deletePage(page); // Delete extra page from end of loop
    pdf.save("montre.pdf");

  }
  public draw(){
    
    const testing = false;
    const drawknobFont: string = "Helvetica";
    const r = this.organLayout.drawknobRadius;
    //const tf = this.organLayout.textFields;
    
    let pdf = new jsPDF({
      format: "letter",
      orientation: "landscape",
      unit: "pt"
    });

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
    pdf.setFontSize(18);
    pdf.setFont("Helvetica", "bold");
    let titleString = "";
    if (this.sequence.composition.catalogNo !== "") { titleString += "#" + this.sequence.composition.catalogNo + " - "; } 
    titleString += this.sequence.composition.title;
    pdf.text(titleString.toUpperCase(), 396, baseline, {align: "center"});

    // Draw subtitles
    pdf.setFontSize(14);
    pdf.setFont("Helvetica", "normal");
    baseline += 16;
    
    if (this.sequence.version !== "") {
      pdf.text(this.sequence.version, 396, baseline, {align: "center"});
      baseline += 16;
      pdf.text(this.sequence.composition.composer, 396, baseline, {align: "center"});
    } else {
      pdf.text(this.sequence.composition.composer, 396, baseline, {align: "center"});
    }
  
    // Draw organ indicator
    pdf.setLineWidth(1);
    pdf.rect(36, 30, 72, 24, "S");
    pdf.setFont("Helvetica", "bold");
    pdf.setFontSize(10);
    pdf.text("TAB", 72, 46, {align: "center"});

    // Draw step number 
    pdf.rect(684, 30, 72, 24, "S");
    pdf.setFont("Helvetica", "normal");
    pdf.text("Step 12 of 27", 720, 46, {align: "center"});
    
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
    pdf.setFont("Helvetica", "bold");
    pdf.setFontSize(5);
    pdf.text("PISTON", tfColumns[0], tfRows[0] + tfLabelOffset);
    pdf.text("BASED ON", tfColumns[2], tfRows[0] + tfLabelOffset);
    pdf.text("MEASURE(S)", tfColumns[4], tfRows[0] + tfLabelOffset);
    pdf.text("NOTES", tfColumns[0], tfRows[1] + tfLabelOffset);
    
    // Text field text
    pdf.setFont("Helvetica", "normal");
    pdf.setFontSize(11);
    pdf.text("Level 60: General 3", tfColumns[0], tfRows[0] + tfTextOffset);
    pdf.text("Level 60: General 2 (Step 2)", tfColumns[2], tfRows[0] + tfTextOffset);
    pdf.text("mm. 1, 45, 60, 120", tfColumns[4], tfRows[0] + tfTextOffset);
    pdf.text("Standard general 9 plus Rauschfeife.", tfColumns[0], tfRows[1] + tfTextOffset);







    pdf.setDrawColor(0,0,0);
    pdf.setLineWidth(1);
    

    

    pdf.setDrawColor(0, 0, 0);
    pdf.setLineWidth(1);
    pdf.setFontSize(this.organLayout.drawknobFontSize);
    pdf.setFont(drawknobFont, "bold");
    
    for(let stop of this.organ.stops) {
      const x = this.organLayout.columns[stop.column];
      const y = this.organLayout.rows[stop.row];
      const lh = this.organLayout.drawknobFontSize;
      let offset;
      
      if(stop.shortPitchDesignation.indexOf("\'") !== -1) {
        offset = this.organLayout.drawknobPitchOffset;
      } else {
        offset = 0;
      }

      pdf.circle(x, y, r, "S");
      pdf.text(stop.shortName, x, y, {align: "center"});
      pdf.text(stop.shortPitchDesignation, (x + offset), (y + lh), {align: "center"}); 
    }

    for(let divider of this.organLayout.dividers) {
      pdf.line(divider.x, divider.y1, divider.x, divider.y2);
    }

    pdf.setFontSize(8);
    for(let label of this.organLayout.labels) {
      pdf.text(label.label, label.x, label.y, {align: "center"});
    }
    
    pdf.save("montre.pdf");
  }
}
