import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { ModalMessage } from '../models/modal';


/** Service that allows any component or service to show a modal dialog and receive a 
 * boolean response. Works with ModalComponent to display messages. 
 */

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  /** The current state of the modal window (true = show, false = hide). */
  private _state: BehaviorSubject<boolean>  = new BehaviorSubject(false);
  
  /** The current message displayed in the dialog */
  private _message: BehaviorSubject<ModalMessage> = new BehaviorSubject({
    message: "",
    cancelButton: "",
    okButton: ""
  });

  /** The user response to the most recent dialog (true = OK, false = cancel). */
  private _response: Subject<boolean>;
  
  /** The current state of the dialog element (true = shown, false = hidden). */
  public state$ = this._state.asObservable();

  /** The current  message displayed in the dialog. */
  public message$ = this._message.asObservable();

  constructor() { }

  /** Main public method to show a modal dialog. Returns an observable that sends a boolean 
   * result when available.
   * 
   * @param {ModalMessage} message - The message object that contains the text of the message as well
   * as the text for the OK/Cancel buttons.
   * 
   * @returns Returns an Observable that provides the user response as a boolean 
   * (OK = True, Cancel = False).
   * */

  public showModal(message: ModalMessage): Observable<boolean> {
    
    // Update the message shown in ModalComponent
    this._message.next(message);

    // Show the modal
    this._state.next(true);

    // Send the result back to the caller when it arrives
    this._response = new Subject();
    return this._response.asObservable();
  }

  /** Hides the modal dialog, sending the user's response to the component or service that created
   * it.
   * 
   * @param {boolean} result - The action selected by the user (true = OK, false = cancel).
   */
  public hideModal(result: boolean): void {
    this._state.next(false);
    this._response.next(result);
  }
  
}
