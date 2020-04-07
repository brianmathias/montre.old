import { Component, OnInit } from '@angular/core';
import { SequenceService } from '../services/sequence.service';
import { OrganService } from '../services/organ.service';
import { DivisionStylesService } from '../services/division-styles.service';
import { PDFService } from '../services/pdf.service';
import { Sequence } from '../models/sequence';
import { SequenceStep } from '../models/sequence-step';
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

  constructor(private sequenceService: SequenceService, private organService: OrganService, private divisionStylesService: DivisionStylesService, private pdfService: PDFService) { }

  ngOnInit(): void {
    this.sequence = this.sequenceService.sequence;
    this.pistons = this.organService.pistons;
  }

  basedOn(step: SequenceStep): any {
    
    let obj = {
      level: null,
      division: "",
      number: null
    };

    if (step.base === -1) { 
      obj.division = "–";
      return obj;
    } else {
      let baseStep: SequenceStep = this.sequence.steps[step.base];
      obj.level = baseStep.memoryLevel;
      obj.division = this.pistons[baseStep.piston].division;
      obj.number = this.pistons[baseStep.piston].number;
    }

    return obj;
  }

  print(): void {
    this.pdfService.PDF();
  }

  // Provides conditional CSS classes to enable division colors
  getDivisionStyle(manual: string) {
    return this.divisionStylesService.getDivisionClass(manual);
  }
}
