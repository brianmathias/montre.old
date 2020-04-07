import { Component, OnInit } from '@angular/core';
import { Sequence } from '../models/sequence';
import { SequenceService } from '../services/sequence.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

  sequence: Sequence;
  json: string;

  constructor(private sequenceService: SequenceService) {}
  
  ngOnInit(): void {
    this.sequence = this.sequenceService.sequence;
  }

  

}
