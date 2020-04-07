import { Injectable } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

import { Sequence } from '../models/sequence';

@Injectable({
  providedIn: 'root'
})
export class SequenceService {

  // Used for working on other components with having to enter a sequence on every reload
  //public mockData: Sequence = { "composition": { "title": "Praise, My Soul, the King of Heaven", "composer": "arr. Wilberg", "catalogNo": "963" }, "version": "Organ w/ Orchestra", "organ": "", "steps": [ { "memoryLevel": 1, "piston": 0, "base": -1, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 1, "base": 0, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 2, "base": 1, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 3, "base": 2, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 35, "base": 3, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 45, "base": 4, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 66, "base": 5, "notes": "", "measure": "" } ] };
  
  public sequence: Sequence = new Sequence();
  //public sequence: Sequence = this.mockData;

  constructor() { }

  public addStep(memoryLevel: number, piston: number): void {

    let base;

    if (this.sequence.steps.length === 0) { base = -1; }
    else { base = this.sequence.steps.length -1; }

    this.sequence.steps.push({
      memoryLevel: memoryLevel,
      piston: piston,
      base: base,
      notes: "",
      measure: ""
    });
  }

  public deleteStep(index: number): void {
    let arr = this.sequence.steps.splice(index, 1);
  }

  public reorderSequence(previousIndex: number, currentIndex: number): void { 
    moveItemInArray(this.sequence.steps, previousIndex, currentIndex);
  }
}
