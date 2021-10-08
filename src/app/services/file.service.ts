import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable, Subject, BehaviorSubject } from "rxjs";

import { Organs } from '../models/organs';
import { OrganService } from '../services/organ.service';

/**
 * This service processes the uploaded file and provides methods to access its raw data.
 * 
 * Observables:
 * 
 * - fileLoaded$<boolean> - Indicates whether or not a valid file has been uploaded.
 * - fileName$<string> - Holds the name of the current file.
 * 
 * Public Methods:
 * 
 * - loadFile(file: File): void - Loads the passed file object into memory for future access.
 * - getValue(offset: number): string - Returns binary string at offset from loaded file.
 */

@Injectable({
  providedIn: 'root'
})
export class FileService implements CanActivate {
  
  private _env = environment;
  
  /** HTML5 File object provided by the user. */
  private _file: File;

  /** Boolean indicating whether or not a file has been uploaded. (TODO: should indicate false if
   * the uploaded file is not valid.) */
  private _fileLoaded: BehaviorSubject<boolean> = new BehaviorSubject(false);

  /** The name of the uploaded file. */
  private _fileName: BehaviorSubject<string> = new BehaviorSubject("");
  
  /** Error message for the uploaded file, if any. */
  private _fileError: BehaviorSubject<string> = new BehaviorSubject("");
  
  /** Observable providing the current upload status. */
  public fileLoaded$ = this._fileLoaded.asObservable();

  /** Observable providing the name of the current file. */
  public fileName$ = this._fileName.asObservable();

  /** Observable providing the current error message ("" = no error) */
  public fileError$: Observable<string> = this._fileError.asObservable();
  
  private _dataView: DataView;

  constructor(public router: Router, private organService: OrganService) {}

    /** If the user has not uploaded a file, tell the router not to allow navigation to the Build, 
     * Edit, and Print routes.
     */
    canActivate(): boolean {
      
      if (this._file === undefined) { 
        this.router.navigate(['']);
        return false;
      } 

      return true;
    }

  /**
   * Loads the passed file into memory for access through getValue().
   * 
   * @param {File} file - The HTML5 file object to load. 
   */
  public loadFile(file: File): void {
    
    this._file = file;

    let reader: FileReader = new FileReader();

    reader.onload = (event: Event) => {

      // Necessary to circumvent Typescript errors
      let e: any = event.target;
      let result = e.result; 
      
      this._dataView = new DataView(result);
      
      // Determine which organ the uploaded file originated from by checking the size of the file
      let length: number = this._dataView.byteLength;
      if (length === 1740091) { this.organService.setOrgan(Organs.Tabernacle); }
      else if (length === 1929200) { this.organService.setOrgan(Organs.ConferenceCenter); }
    
      this._fileLoaded.next(true);
      this._fileName.next(this._file.name);
      this._fileError.next("");
    }
    reader.readAsArrayBuffer(this._file);
  }

  /** Unloads the current file and resets all the file observables. */
  public unloadFile(): void {
    this._file = undefined;
    this._fileName.next("");
    this._fileLoaded.next(false);
    this._fileError.next("");
  }

  /**
   * Retrieves a block of byte values beginning at the specified offset.
   * 
   * @param offset - The offset at which to begin retrieving the values.
   * @param length - The number of values to return.
   * @returns {number[]} An array of signed 8-bit integers. 
   */
  public getValues(offset: number, length: number): number[] {

    let arr: number[] = [];
    
    for(let i = 0; i < length; i++){
      let int = this._dataView.getInt8(offset + i);
      arr.push(int);
    }
    
    return arr;
  }
}
