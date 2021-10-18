import { Component, OnInit } from '@angular/core';
import { TallySheet } from '../models/tally-sheet';
import { OrganService } from '../services/organ.service';
import { VirtuosoService } from '../services/virtuoso.service';
import { Piston } from '../models/piston';

@Component({
  selector: 'app-level-checker',
  templateUrl: './level-checker.component.html',
  styleUrls: ['./level-checker.component.scss']
})
export class LevelCheckerComponent implements OnInit {

  /** The currently selected memory level. */
  memoryLevel: number;

  /** An array of memory levels from the current Organ object. */
  memoryLevels: number[];

  /** An array of pistons from the current Organ object. */
  pistons: Piston[];
  
  /** The TallySheet object from the current Organ object. */
  tallySheet: TallySheet;

  /** An array of piston states for the currently selected memory level (true = "set", false = "clear").*/
  pistonState: boolean[] = [];

  constructor(private organService: OrganService, private virtuosoService: VirtuosoService) { }

  ngOnInit(): void {

    // Load information from currently selected organ
    this.memoryLevels = this.organService.memoryLevels;
    this.pistons = this.organService.pistons;
    this.tallySheet = this.organService.tallySheet;
    this.memoryLevel = 1;
    this.selectLevel(this.memoryLevel)
  }

  selectLevel(level: number): void {

    this.pistonState = [];
    for(let piston of this.pistons) {
      let state = this.virtuosoService.getPistonStatus(this.memoryLevel, piston.id);
      this.pistonState.push(state);
    }
  }

  getNumber(pistonID: number): string {
    if (pistonID >= 0) { return this.pistons[pistonID].number.toString(); }
    else { return ""; }
  }

  getState(pistonID: number): string {
    if (pistonID === -1) { return ""; }
    else {
      if (this.pistonState[pistonID]) { return "Set"; }
      else { return "Clear"; }
    }
  }

  getClass(pistonID: number): string {
    if (pistonID === -1) { return "disabled"; }
    else {
      if (this.pistonState[pistonID]) { return "set"; }
      else { return "clear"; }
    }
  }
 
}
