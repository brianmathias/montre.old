import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs';
import { ModalService } from '../services/modal.service';
import { ModalMessage } from '../models/modal';

/** Component for displaying modal dialogs from any part of the application. Works with 
 * ModalService to display dialog messages and return the user response.
  */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'], 
  animations: [
    trigger('backdrop', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ 
          opacity: 1
        })),
      ]),
      transition(':leave', [
        animate('300ms', style({ 
          opacity: 0
        }))
      ])
    ]),
    trigger('dialog', [
      transition(':enter', [
        style({ 
          opacity: 0,
          transform: 'translateY(-150px)'}),
        animate('150ms 0ms ease-out', style({ 
          opacity: 1,
          transform: 'translateY(0)'
        })),
      ]),
      transition(':leave', [
        animate('150ms 0ms ease-out', style({ 
          opacity: 0,
          transform: 'translateY(-150px)'
        }))
      ])
    ])
  ]

})

export class ModalComponent {

  /** The current state of the modal dialog (true = show, false = hide). Receives updates from the 
   * modalService.state$ observable.
   */
  showDialog: boolean = false;

  /** The current ModalMessage displayed in the dialog. */
  message: ModalMessage;

  /** Subscription from modalService providing updates to the state of the dialog. */
  state$: Subscription;

  /** Subscription from modalService providing updates to the message that should be displayed. */
  message$: Subscription;
  
  constructor(private modalService: ModalService) { 
    this.state$ = this.modalService.state$.subscribe((state) => { this.showDialog = state });    
    this.message$ = this.modalService.message$.subscribe((message) => this.message = message);
  }

  /** Hides the dialog when the user clicks the cancel button or the overlay. */
  cancelClick(): void {
    this.modalService.hideModal(false);
  }

  /** Hides the dialog when the user click the OK button. */
  okClick(): void {
    this.modalService.hideModal(true);
  }
}
