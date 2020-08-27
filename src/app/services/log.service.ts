import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

/**
 * This is a simple service to log information to the console only when in development mode.
 */
@Injectable({
  providedIn: 'root'
})
export class LogService {

  private _env = environment;

  constructor() { }
  
  /** 
   * Logs the provided message to the console when the application is
   * running in development mode.
   * 
   * @param {any} message - The message or object to send to the console.
   */
  public add (message: any) {
    if (!environment.production) {
      console.log(message);
    }  
  }
}
