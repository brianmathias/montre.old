import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private _file: File;
  private _fileLoaded: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _fileName: BehaviorSubject<string> = new BehaviorSubject("");
  
  public fileLoaded = this._fileLoaded.asObservable();
  public fileName = this._fileName.asObservable();
  public data = null;
  
  constructor() { }

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
      this.data = XLSX.utils.sheet_to_json(sheet, {raw: true, header: 1});

      // ** Eventually, there should be some check to make sure the file is a Virtuoso file before proceeding

      this._fileLoaded.next(true);
      this._fileName.next(this._file.name);
    }
    reader.readAsArrayBuffer(this._file);
  }

}
