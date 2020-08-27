import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SequenceService } from '../services/sequence.service';
import { OrganService } from '../services/organ.service';
import { DivisionStylesService } from '../services/division-styles.service';
import { ProcessService } from '../services/process.service';
import { ModalService } from '../services/modal.service';
import { Sequence } from '../models/sequence';
import { SequenceStep } from '../models/sequence-step';
import { Piston } from '../models/piston';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  sequence: Sequence;
  pistons: Piston[];
  bases: Piston[];

  modal$: Subscription;

  constructor(private sequenceService: SequenceService, private organService: OrganService, private divisionStylesService: DivisionStylesService, private processService: ProcessService, private modalService: ModalService, private router: Router) { }

  ngOnInit(): void {
    this.sequence = this.sequenceService.sequence;
    this.pistons = this.organService.pistons;
  }

  print(): void {
    let filename = this.processService.process(this.sequence);
    
    this.modal$ = this.modalService.showModal({
      message: `${filename} has been created. Do you want to create a new sequence?`,
      cancelButton: "No",
      okButton: "Yes"
    }).subscribe((result) => {
      if (result) { 
        this.sequenceService.clearSequence(); 
        this.router.navigate(["build"]);
      }
      this.modal$.unsubscribe();
    });
    
  }

  // Provides conditional CSS classes to enable division colors
  getDivisionStyle(manual: string) {
    return this.divisionStylesService.getDivisionClass(manual);
  }
}
