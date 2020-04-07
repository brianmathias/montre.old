import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.fileLoadedSubscription = this.fileService.fileLoaded.subscribe(val => this.fileLoaded = val);
    this.fileNameSubscription = this.fileService.fileName.subscribe(val => this.fileName = val);
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
    this.fileService.loadFile(files[0]);
  }

}
