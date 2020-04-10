import { Injectable } from '@angular/core';
import { Organ } from '../models/organ';
import { OrganLayout } from '../models/organ-layout';
import { Manual } from '../models/manual';
import { Piston } from '../models/piston';
import { TabernacleOrgan } from '../models/tabernacle-organ';
import { TabernacleOrganLayout } from '../models/tabernacle-organ-layout';
import { ConferenceCenterOrgan } from '../models/conference-center-organ';
import { ConferenceCenterOrganLayout } from '../models/conference-center-organ-layout';

@Injectable({
  providedIn: 'root'
})
export class OrganService {

  // Eventually need to re-work to allow for multiple organs
  
  public organ: Organ = TabernacleOrgan;
  public organLayout: OrganLayout = new TabernacleOrganLayout();
  
  //public organ: Organ = ConferenceCenterOrgan;
  //public organLayout: OrganLayout = new ConferenceCenterOrganLayout();
  
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
