import { Injectable } from '@angular/core';
import { Sequence, PrintSequence } from '../models/sequence';
import { DrawknobState } from '../models/drawknob-state';
import { OptionsService } from '../services/options.service';
import { VirtuosoService } from '../services/virtuoso.service';
import { PDFService } from '../services/pdf.service';
import { LogService } from './log.service';
import { Organs } from '../models/organs';
import { Crescendo } from '../models/crescendo';
import { Tutti } from '../models/tutti';

/**
 * This service is the main processing point for generating PDF documents. 
 * It takes the current sequence, gathers the necessary information from VirtuosoService,
 * and sends the completed sequence to PDFService for drawing.
 */
@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(private optionsService: OptionsService, private virtuosoService: VirtuosoService, private pdfService: PDFService, private log: LogService) { }

  /**
   * Processes the provided sequence and generates a PDF document.
   * @param sequence {Sequence} - The completed sequence to draw on the PDF.
   * 
   * @return {string} Returns the filename of the generated file.
   */
  public process(sequence: Sequence, addToHistory: boolean = true): string { 
    
    this.log.add("Processing sequence.");
    
    // Create a copy of the sequence
    const str = JSON.stringify(sequence);
    let seq: Sequence = JSON.parse(str);

    // Add drawknobs to sequence steps
    for(let step of seq.steps){
      step.drawknobs = this.virtuosoService.getPiston(step.memoryLevel, step.piston);
    }

    let pseq = seq as PrintSequence;
    pseq.date = new Date();

    // Compare steps to determine add/remove states
    pseq = this._compareDrawknobs(pseq);
    this.log.add(pseq);

    let organ: string;

    if (pseq.organ === Organs.Tabernacle) {organ = "TAB"; }
    else {organ = "CC"; }

    let filename = this.optionsService.getFilename(pseq.type, pseq.composition.catalogNo, pseq.composition.title, pseq.composition.composer, pseq.version, organ)
    let title = this.optionsService.getTitle(pseq.type, pseq.composition.catalogNo, pseq.composition.title, pseq.composition.composer, pseq.version, organ);

    this.pdfService.PDF(pseq, filename, title); 
    
    if(addToHistory) { this.optionsService.addToHistory(pseq); }
    
    return filename;
  }

  /**
   * Prints one of four 60-stage crescendos.
   * @param num {number} - The number of the desired crescendo.
   */
  public crescendo(num: number): void {

    let crescendo: Crescendo = {
      num: num,
      organ: Organs.Tabernacle,
      stages: this.virtuosoService.getCrescendo(num)
    }

    // Compare crescendo stages to add Add and Remove drawknob states
    for(let i = 1; i < crescendo.stages.length; i++) {

      for (let j = 0; j < crescendo.stages[i].drawknobs.length; j++) {

        if (crescendo.stages[i].drawknobs[j] === DrawknobState.On && (crescendo.stages[i - 1].drawknobs[j] === DrawknobState.Off || crescendo.stages[i - 1].drawknobs[j] === DrawknobState.Remove)){
          crescendo.stages[i].drawknobs[j] = DrawknobState.Add;
        }

        // If previous step is On or Add, change Off to Remove
        else if (crescendo.stages[i].drawknobs[j] === DrawknobState.Off && (crescendo.stages[i - 1].drawknobs[j] === DrawknobState.On || crescendo.stages[i - 1].drawknobs[j] === DrawknobState.Add)){
          crescendo.stages[i].drawknobs[j] = DrawknobState.Remove;
        }
      }
    }

    this.pdfService.printCrescendo(crescendo);
  }

  public tutti(num: number): void {

    let tutti: Tutti = {
      num: num,
      organ: Organs.Tabernacle,
      drawknobs: this.virtuosoService.getTutti(num)
    }

    this.pdfService.printTutti(tutti);

  }


  /**
   * Compares drawknobs of each sequence step to determine Add/Remove states.
   */ 
  private _compareDrawknobs(sequence: PrintSequence): PrintSequence {
    
    // Create a copy of sequence
    const str = JSON.stringify(sequence);
    let seq: PrintSequence = JSON.parse(str);
    
    // Loop through sequence steps
    for(let i = 1; i < seq.steps.length; i++) {
      
      // If the piston has a base
      if(seq.steps[i].base !== -1){

        let step = seq.steps[i];
        let base = seq.steps[step.base];

        // Loop through drawknobs
        for(let j = 0; j < step.drawknobs.length; j++){

          // If previous step is Off or Remove, change On to Add
          if (step.drawknobs[j] === DrawknobState.On && (base.drawknobs[j] === DrawknobState.Off || base.drawknobs[j] === DrawknobState.Remove)){
            step.drawknobs[j] = DrawknobState.Add;
          }

          // If previous step is On or Add, change Off to Remove
          else if (step.drawknobs[j] === DrawknobState.Off && (base.drawknobs[j] === DrawknobState.On || base.drawknobs[j] === DrawknobState.Add)){
            step.drawknobs[j] = DrawknobState.Remove;
          }
        }
      }
    }
    return seq;
  } // End _compareDrawknobs

}
