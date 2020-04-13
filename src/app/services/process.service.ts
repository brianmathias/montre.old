import { Injectable } from '@angular/core';
import { OrganService } from './organ.service';
import { Sequence, PrintSequence } from '../models/sequence';
import { Organ } from '../models/organ';
import { DrawknobState } from '../models/drawknob-state';
import { PDFService } from '../services/pdf.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  organ: Organ;

  constructor(private organService: OrganService, private pdfService: PDFService) { 
    this.organ = this.organService.organ;
  }

  public process(sequence: Sequence): void { 
    
    // Create a copy of the sequence
    const str = JSON.stringify(sequence);
    let seq = JSON.parse(str);

    // This step should be replaced with actual logic to get drawknob states from the file
    seq = this._generateDrawknobs(seq);

    // This step stays
    seq = this._compareDrawknobs(seq);
    this.pdfService.PDF(seq);    
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
  }

  // This function generates fake drawknob data and should be removed later
  private _generateDrawknobs(sequence: Sequence): PrintSequence {

    // Create copy of sequence
    const str = JSON.stringify(sequence);
    let seq: Sequence = JSON.parse(str);

    for (let step of seq.steps) {

      step.drawknobs = [];
      
      // Create a random array of boolean drawknob states for each step of the sequence
      for(let stop of this.organ.stops){
        const bool: boolean = Math.random() >= 0.5;
        let ds: DrawknobState;
        if(bool) { ds = DrawknobState.On; }
        else { ds = DrawknobState.Off; }
        step.drawknobs.push(ds);
      }
    }
    return seq as PrintSequence; 
  }








}
