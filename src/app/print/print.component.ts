import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SequenceService } from '../services/sequence.service';
import { FileService } from '../services/file.service';
import { OrganService } from '../services/organ.service';
import { DivisionStylesService } from '../services/division-styles.service';
import { ProcessService } from '../services/process.service';
import { Sequence } from '../models/sequence';
import { Piston } from '../models/piston';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  sequence: Sequence;
  pistons: Piston[];
  bases: Piston[];


  showNextBar: boolean = false;
  filename: string = "";

  constructor(
    private sequenceService: SequenceService, 
    private organService: OrganService, 
    private divisionStylesService: DivisionStylesService, 
    private processService: ProcessService, 
    private router: Router, 
    private fileService: FileService
  ) { }

  ngOnInit(): void {
    this.sequence = this.sequenceService.sequence;
    this.pistons = this.organService.pistons;
  }

  print(): void {
    this.filename = this.processService.process(this.sequence);
    this.showNextBar = true;
  }

  edit(): void {
    this.router.navigate(["edit"]);
  }

  newSequence(): void {
    this.sequenceService.clearSequence();
    this.router.navigate(["build"]);
  }

  newFile(): void {
    this.sequenceService.clearSequence();
    this.fileService.unloadFile();
    this.router.navigate([""]);
    console.log(this.sequenceService.sequence);
  }

  // Provides conditional CSS classes to enable division colors
  getDivisionStyle(manual: string) {
    return this.divisionStylesService.getDivisionClass(manual);
  }
}
