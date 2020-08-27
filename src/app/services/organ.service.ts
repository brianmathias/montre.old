import { Injectable } from '@angular/core';
import { Organ, OrganObject } from '../models/organ';
import { Organs } from '../models/organs';
import { OrganLayout } from '../models/organ-layout';
import { OrganConfig } from '../models/organ-config';
import { Manual } from '../models/manual';
import { Piston } from '../models/piston';
import { TabernacleOrgan } from '../models/tabernacle-organ';
import { TabernacleOrganLayout } from '../models/tabernacle-organ-layout';
import { ConferenceCenterOrgan } from '../models/conference-center-organ';
import { ConferenceCenterOrganLayout } from '../models/conference-center-organ-layout';


/**
 * This service provides access to the Organ, OrganLayout, and OrganConfig classes for the currently 
 * selected instrument, as well as direct access to the Tabernacle and Conference Center organs.
 * The setOrgan() method is used to set which organ should be used for a particular Virtuoso file.
 * 
 * (Note: setOrgan() is currently called from FileService and should be determined by the contents of the
 * file uploaded.)
 */
@Injectable({
  providedIn: 'root'
})
export class OrganService {
  
  /**  The Organs enum value of the currently selected instrument. */
  public selectedOrgan: Organs;

  /** The Organ object for the currently selected instrument. */
  public organ: Organ;

  /** The OrganLayout object for the currently selected instrument. */
  public organLayout: OrganLayout;

  /** The OrganConfig object of the currently selected instrument. */
  public organConfig: OrganConfig;

  /** An array containing the memory levels of the currently selected instrument. */
  public memoryLevels: number[] = [];

  /** An array containing the manuals of the currently selected instrument. */
  public manuals: Manual[] = [];

  /** An array containing the pistons of the currently selected instrument. */
  public pistons: Piston[] = [];



  /** Provides access to the organ, layout and config objects for the Tabernacle Organ. */
  public TabernacleOrgan: OrganObject;

  /** Provides access to the organ, layout and config objects for the Conference Center Organ. */
  public ConferenceCenterOrgan: OrganObject;
   
  

  constructor() {

    // --------------------------------------------------------------------------------------------
    // Create TabernacleOrgan object --------------------------------------------------------------
    // --------------------------------------------------------------------------------------------

    this.TabernacleOrgan = {
      organ: TabernacleOrgan,
      layout: new TabernacleOrganLayout(),
      memoryLevels: [],
      manuals: [],
      pistons: [],
    }

    // Populate memory levels array
    for (let i = 1; i < TabernacleOrgan.memoryLevels + 1; i++) {
      this.TabernacleOrgan.memoryLevels.push(i);
    }

    // Populate manuals array
    for (let manual of TabernacleOrgan.manuals) {
      this.TabernacleOrgan.manuals.push(manual);
    }

    // Populate pistons array
    for (let manual of TabernacleOrgan.manuals) {
      for (let piston of manual.pistons) {
        this.TabernacleOrgan.pistons.push({id: piston.id, division: piston.division, number: piston.number});
      }
    }

    // --------------------------------------------------------------------------------------------
    // Create ConferenceCenterOrgan object --------------------------------------------------------
    // --------------------------------------------------------------------------------------------

    this.ConferenceCenterOrgan = {
      organ: ConferenceCenterOrgan,
      layout: new ConferenceCenterOrganLayout(),
      memoryLevels: [],
      manuals: [],
      pistons: [],
    }

    // Populate memory levels array
    for (let i = 1; i < ConferenceCenterOrgan.memoryLevels + 1; i++) {
      this.ConferenceCenterOrgan.memoryLevels.push(i);
    }

    // Populate manuals array
    for (let manual of ConferenceCenterOrgan.manuals) {
      this.ConferenceCenterOrgan.manuals.push(manual);
    }

    // Populate pistons array
    for (let manual of ConferenceCenterOrgan.manuals) {
      for (let piston of manual.pistons) {
        this.ConferenceCenterOrgan.pistons.push({id: piston.id, division: piston.division, number: piston.number});
      }
    }
  } // End constructor

  /**
   * Sets the currently selected organ.
   * @param {Organs} organ - The organ that is to be set as the selected instrument
   * (using the Organs enum).
   */
  public setOrgan(organ: Organs) {
    
    if (organ === Organs.Tabernacle) {
      this.selectedOrgan = organ;
      this.organ = TabernacleOrgan;
      this.organLayout = this.TabernacleOrgan.layout;
      this.memoryLevels = this.TabernacleOrgan.memoryLevels;
      this.manuals = this.TabernacleOrgan.manuals;
      this.pistons = this.TabernacleOrgan.pistons;
      //  Add OrganConfig

    } else if (organ === Organs.ConferenceCenter) {
      this.selectedOrgan = organ;
      this.organ = ConferenceCenterOrgan;
      this.organLayout = this.ConferenceCenterOrgan.layout;
      this.memoryLevels = this.ConferenceCenterOrgan.memoryLevels;
      this.manuals = this.ConferenceCenterOrgan.manuals;
      this.pistons = this.ConferenceCenterOrgan.pistons;
      // Add OrganConfig
    }
  }
}
