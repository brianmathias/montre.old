import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Sequence } from '../models/sequence';
import { Piston } from '../models/piston';
import { OrganService } from './organ.service';

@Injectable({
  providedIn: 'root'
})
export class SequenceService {

  private _env = environment;
  private _mockData: Sequence = { "composition": { "title": "Praise, My Soul, the King of Heaven", "composer": "arr. Wilberg", "catalogNo": "963" }, "version": "Organ w/ Orchestra", "organ": "", "steps": [ { "memoryLevel": 1, "piston": 0, "base": -1, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 1, "base": 0, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 2, "base": 1, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 3, "base": 2, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 35, "base": 3, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 45, "base": 4, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 66, "base": 5, "notes": "", "measure": "" } ] };
  private _pistons: Piston[];

  public sequence: Sequence;
  
  
  constructor(private organService: OrganService) {
    this._pistons = this.organService.pistons;
    
    if(this._env.production){
      this.sequence = new Sequence();
    } else {
      this.sequence = this._mockData;
    }
  }

  public addStep(memoryLevel: number, piston: number): void {

    this.sequence.steps.push({
      memoryLevel: memoryLevel,
      piston: piston,
      base: -1,
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

  public setBases(method: number): void {
    
    if(method === 0) { // "None"
      for(let step of this.sequence.steps) {
        step.base = -1;
      }
    } else if (method === 1) { // "Previous General Piston"
      
      let base: number = -1;
      
      this.sequence.steps.forEach((step, index) => {
        this.sequence.steps[index].base = base;
        if(this._pistons[step.piston].division === "General") {
          base = index;
        }
      });
    } else if (method === 2) { // "Previous Piston"
      
      this.sequence.steps.forEach((step, index) => {
        step.base = index - 1;
      });
    }
  }
}
