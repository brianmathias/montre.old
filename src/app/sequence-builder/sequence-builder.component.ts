import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { Organ } from '../models/organ';
import { Piston } from '../models/piston';
import { Sequence } from '../models/sequence';
import { SequenceService } from '../services/sequence.service';
import { OrganService } from '../services/organ.service';
import { VirtuosoService } from '../services/virtuoso.service';
import { DivisionStylesService } from '../services/division-styles.service';

@Component({
  selector: 'app-sequence-builder',
  templateUrl: './sequence-builder.component.html',
  styleUrls: ['./sequence-builder.component.scss']
})
export class SequenceBuilderComponent implements OnInit {

  organ: Organ;
  sequence: Sequence;
  memoryLevels: number[];
  memoryLevel: number = 1;
  pistons: Piston[];

  
  constructor(private sequenceService: SequenceService, private organService: OrganService, private divisionStylesService: DivisionStylesService, private vs: VirtuosoService) {}

  ngOnInit(): void {
    this.sequence = this.sequenceService.sequence; 
    this.organ = this.organService.organ;
    this.memoryLevels  = this.organService.memoryLevels;
    this.pistons = this.organService.pistons;
    console.log(this.pistons);
  }

  addStep(memoryLevel: number, piston: number): void {
    this.sequenceService.addStep(memoryLevel, piston);
    let test = this.vs.getPiston(memoryLevel, piston);
    console.log(test);
  }

  deleteStep(step: number): void {
    this.sequenceService.deleteStep(step);
  }

  /** Fires when a sequence step is reordered. */
  drop(event: CdkDragDrop<string[]>) {
    this.sequenceService.reorderSequence(event.previousIndex, event.currentIndex);
  }

  /** Provides conditional CSS classes to enable division colors. */
  getDivisionStyle(manual: string) {
    return this.divisionStylesService.getDivisionClass(manual);
  }
}
