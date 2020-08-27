import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Sequence } from '../models/sequence';
import { ModalService } from '../services/modal.service';
import { SequenceService } from '../services/sequence.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

  sequence: Sequence;
  json: string;
  modal$: Subscription;

  constructor(private sequenceService: SequenceService, private modalService: ModalService) {}
  
  ngOnInit(): void {
    this.sequence = this.sequenceService.sequence;
  }

  testModal(): void {
    let response = this.modalService.showModal({
      message: "This is a test of the modal dialog.",
      okButton: "OK",
      cancelButton: "Cancel"
    });

    this.modal$ = response.subscribe((result) =>  {
      this.modal$.unsubscribe();
      console.log(result);
    });
  }
}
