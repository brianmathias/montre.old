import { Injectable } from '@angular/core';
import { Organ } from '../models/organ';
import { Organs } from '../models/organs';
import { OrganLayout } from '../models/organ-layout';
import { OrganConfig } from '../models/organ-config';
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
  
  // Organ is currently set in FileService constructor
  public organ: Organ;
  public organLayout: OrganLayout;
  public organConfig: OrganConfig;
  public selectedOrgan: Organs;
    
  public memoryLevels: number[] = [];
  public manuals: Manual[] = [];
  public pistons: Piston[] = [];

  constructor() { }

  public setOrgan(organ: Organs) {
    
    if (organ === Organs.Tabernacle) {
      this.selectedOrgan = organ;
      this.organ = TabernacleOrgan;
      this.organLayout = new TabernacleOrganLayout();
      //  Add OrganConfig
    } else if (organ === Organs.ConferenceCenter) {
      this.selectedOrgan = organ;
      this.organ = ConferenceCenterOrgan;
      this.organLayout = new ConferenceCenterOrganLayout();
      // Add OrganConfig
    }

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
