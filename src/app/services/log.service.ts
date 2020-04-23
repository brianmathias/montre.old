import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private _env = environment;

  constructor() { }

  public add (message: any) {
    if (!environment.production) {
      console.log(message);
    }  
  }
}
