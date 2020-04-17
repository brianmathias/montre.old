import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from "rxjs";
import * as XLSX from 'xlsx';
import { Organs } from '../models/organs';
import { OrganService } from '../services/organ.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private _env = environment;
  private _file: File;

  private _fileLoaded: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _fileName: BehaviorSubject<string> = new BehaviorSubject("");
  public fileLoaded = this._fileLoaded.asObservable();
  public fileName = this._fileName.asObservable();
  
  private _32BitArray: Uint32Array;
  private _dataView: DataView;
  private _data = null; // Array of values from spreadsheet
  
  constructor(private organService: OrganService) {
    if(!this._env.virtuoso) {
      this.organService.setOrgan(Organs.Tabernacle);
    }
  }

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
      this._32BitArray = new Uint32Array(result);
      
      // Eventually, there should be some check to make sure the file is a 
      // Virtuoso file before proceeding. Also, check file for which organ
      // and call organService.setOrgan() 

      this._fileLoaded.next(true);
      this._fileName.next(this._file.name);
    }
    reader.readAsArrayBuffer(this._file);
  }

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
