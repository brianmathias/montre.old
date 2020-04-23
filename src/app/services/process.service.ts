import { Injectable } from '@angular/core';
import { Sequence, PrintSequence } from '../models/sequence';
import { DrawknobState } from '../models/drawknob-state';
import { VirtuosoService } from '../services/virtuoso.service';
import { PDFService } from '../services/pdf.service';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(private virtuosoService: VirtuosoService, private pdfService: PDFService, private log: LogService) { }

  public process(sequence: Sequence): void { 
    
    this.log.add("Processing sequence.");
    // Create a copy of the sequence
    const str = JSON.stringify(sequence);
    let seq: Sequence = JSON.parse(str);

    // Add drawknobs to sequence steps
    for(let step of seq.steps){
      step.drawknobs = this.virtuosoService.getPiston(step.memoryLevel, step.piston);
    }

    let pseq = seq as PrintSequence;

    // Compare steps to determine add/remove states
    pseq = this._compareDrawknobs(pseq);
    this.log.add(pseq);
    this.pdfService.PDF(pseq);    
  }

  // Compare drawknobs of each sequence step to determine Add/Remove states
  private _compareDrawknobs(sequence: PrintSequence): PrintSequence {
    
    // Create a copy of sequence
    const str = JSON.stringify(sequence);
    let seq = JSON.parse(str);
    
    for(let i = 1; i < seq.steps.length; i++) {
      
      // If the piston has a base
      if(seq.steps[i].base !== -1){

        let step = seq.steps[i];
        let base = seq.steps[step.base];

        for(let j = 0; j < step.drawknobs.length; j++){

          // If previous step is Off or Remove, change On to Add
          if (step.drawknobs[j].state === DrawknobState.On && (base.drawknobs[j].state === DrawknobState.Off || base.drawknobs[j].state === DrawknobState.Remove)){
            step.drawknobs[j].state = DrawknobState.Add;
          }

          // If previous step is On or Add, change Off to Remove
          else if (step.drawknobs[j].state === DrawknobState.Off && (base.drawknobs[j].state === DrawknobState.On || base.drawknobs[j].state === DrawknobState.Add)){
            step.drawknobs[j].state = DrawknobState.Remove;
          }
        }
      }
    }
    return seq;
  } // End _compareDrawknobs




}
