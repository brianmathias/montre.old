import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Organs } from '../models/organs';
import { OrganService } from '../services/organ.service';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit, OnDestroy {

  file: File = null;
  fileName: string = "";
  fileNameSubscription: Subscription;
  fileLoaded: boolean = false;
  fileLoadedSubscription: Subscription;
  fileError: string = "";
  fileErrorSubscription: Subscription;

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

  selectFile(): void {
    const fileElement = document.getElementById("fileElem");
    fileElement.click();
  }

  handleFile(files: FileList): void {
    this.organService.setOrgan(Organs.Tabernacle);
    this.fileService.loadFile(files[0]);
  }

  setOrgan(organ: Organs): void {
    this.organ = organ;
    this.organService.setOrgan(organ);
  }

}
