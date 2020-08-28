import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from "rxjs";
import * as XLSX from 'xlsx';
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
export class FileService {
  
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
  public fileError$ = this._fileError.asObservable();
  
  private _32BitArray: Uint32Array;
  private _dataView: DataView;
  private _data = null; // Array of values from spreadsheet
  
  constructor(private organService: OrganService) {
    if(!this._env.virtuoso) {
      this.organService.setOrgan(Organs.Tabernacle);
      //this.organService.setOrgan(Organs.ConferenceCenter);
    }
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

      let data = new Uint8Array(result);
      let book = XLSX.read(data, {type: 'array'});
      let sheetName = book.SheetNames[0];
      let sheet = book.Sheets[sheetName];
      this._data = XLSX.utils.sheet_to_json(sheet, {raw: true, header: 1});
      
      // Should only need one of these (probably dataView, since it provides 
      // control over endianness)
      this._dataView = new DataView(result);
      
      
      // 32BitArray requires that file's byte length is a multiple of 4 (DataView is preferable)
      //this._32BitArray = new Uint32Array(result);
      
      // Eventually, there should be some check to make sure the file is a 
      // Virtuoso file before proceeding. Also, check file for which organ
      // and call organService.setOrgan() 

      if(this.getValue(3) === "10101110011011100000000000100001") {
        this._fileLoaded.next(true);
        this._fileName.next(this._file.name);
        this._fileError.next("");
      } else {
        this._fileLoaded.next(false);
        this._fileName.next(this._file.name);
        this._fileError.next("This file is not a valid Virtuoso file. Please upload another file to proceed.");
      }




      
      
      

    }
    reader.readAsArrayBuffer(this._file);
  }

  /** Unloads the current file and resets all the file observables. */
  public unloadFile(): void {
    this._file = null;
    this._fileName.next("");
    this._fileLoaded.next(false);
    this._fileError.next("");
  }

  /**
   * Retrieves 32-bit word at the specified offset.
   * 
   * @param offset - The offset (8-bit or 32-bit?) at which to retrieve the value.
   * 
   * @returns {string} 32-bit value as a binary string. 
   */
  public getValue(offset: number): string {

    // Note: need to find out from Dwight if Virtuoso is little-endian or big-endian 
    // Assumption: little-endian?

    // DataView takes an integer (BYTE - not 32-bit) offset and returns a 32-bit binary string
    const int = this._dataView.getUint32(offset * 4, true);
    const str = int.toString(2).padStart(32, "0");
    return str;
  }

  // This method is probably unnecessary and can be removed once file access is settled
  public getArrayValue(offset: number): string {
    const int = this._32BitArray[offset];
    const str = int.toString(2).padStart(32, "0");
    return str;
  }

  // If info is actually in a spreadsheet, need to provide way to retrieve values

}
