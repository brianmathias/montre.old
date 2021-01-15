import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FileService } from '../services/file.service';
import { OrganService } from '../services/organ.service';

import { Organs } from '../models/organs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit, OnDestroy {

  /** The File object for the user-supplied file. */
  file: File = null;

  /** The name of the user-supplied file. */
  fileName: string = "";

  /** A subscription to the FileService.fileName$ observable. */
  fileNameSubscription: Subscription;

  /** Boolean indicating whether or not a file has been uploaded. */
  fileLoaded: boolean = false;

  /** A subscription to the FileService.fileLoaded$ observable. */
  fileLoadedSubscription: Subscription;

  /** String indicating an error with the file upload. (Is this necessary?) */
  fileError: string = "";

  /** A subscription to the FileService.fileError$ observable. */
  fileErrorSubscription: Subscription;

  /** The currently selected organ. */
  organ: Organs;

  constructor(private organService: OrganService, private fileService: FileService) {
    this.organ = this.organService.selectedOrgan;
  }

  ngOnInit(): void {
    this.fileLoadedSubscription = this.fileService.fileLoaded$.subscribe(val => this.fileLoaded = val);
    this.fileNameSubscription = this.fileService.fileName$.subscribe(val => this.fileName = val);
    this.fileErrorSubscription = this.fileService.fileError$.subscribe(val => this.fileError = val);
  }

  ngOnDestroy(): void {
    this.fileLoadedSubscription.unsubscribe();
    this.fileNameSubscription.unsubscribe();
  }

  /** Shows the dialog box to select a file for upload. (Necessary in order to hide the ugly HTML default
   * file upload element.) */
  selectFile(): void {
    const fileElement = document.getElementById("fileElem");
    fileElement.click();
  }

  /** Sends the file to FileService for processing. */
  handleFile(files: FileList): void {
    this.fileService.loadFile(files[0]);
  }

  /** Sets the current organ. */
  setOrgan(organ: Organs): void {
    this.organ = organ;
    this.organService.setOrgan(organ);
  }

}
