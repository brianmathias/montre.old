import { Injectable } from '@angular/core';
import { Organ } from '../models/organ';
import { Manual } from '../models/manual';
import { Piston } from '../models/piston';
import { TabernacleOrgan } from '../models/tabernacle-organ';

@Injectable({
  providedIn: 'root'
})
export class OrganService {

  // Eventually need to re-work to allow for multiple organs
  public organ: Organ = TabernacleOrgan;
  public memoryLevels: number[] = [];
  public manuals: Manual[] = [];
  public pistons: Piston[] = [];

  constructor() { 

    // Populate memory levels array
    for (let i = 1; i < this.organ.memoryLevels + 1; i++) {
      this.memoryLevels.push(i);
    }

    // Populate manuals array
    for (let manual of this.organ.manuals) {
      this.manuals.push(manual);
    }

    // Populate pistons array
    for (let manual of this.organ.manuals) {
      for (let piston of manual.pistons) {
        this.pistons.push({id: piston.id, division: piston.division, number: piston.number});
      }
    }

  }
}
