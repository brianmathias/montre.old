import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { Organs } from '../models/organs';
import { OrganService } from '../services/organ.service';
import { PrintSequence } from '../models/sequence';
import { OptionsService } from '../services/options.service';
import { FileService } from '../services/file.service';
import { ProcessService } from '../services/process.service';
import { PDFService } from '../services/pdf.service';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss', '../../_variables.scss']
})
export class OptionsComponent {

  fileStatus$: Subscription;
  fileStatus: boolean = false;

  filenameTemplateChoral: string;
  filenameExampleChoral: string;
  filenameTemplateOrgan: string;
  filenameExampleOrgan: string;
  
  titleTemplateChoral: string;
  titleExampleChoral: string;
  titleTemplateOrgan: string;
  titleExampleOrgan: string;
  
  sequenceHistory: PrintSequence[];

  choralExample: any = {
    type: "Choral",
    catalog: "1496",
    title: "Hymn of Praise",
    composer: "Mack Wilberg",
    organ: "TAB",
    version: "Organ w/ Orchestra"
  }

  organExample: any = {
    type: "Organ",
    catalog: "",
    title: "Carillon de Westminster",
    composer: "Louis Vierne",
    organ: "CC",
    version: "Organ Solo"
  }

  constructor(private options: OptionsService, private fileService: FileService, private processService: ProcessService, private pdfService: PDFService) {
    
    this.filenameTemplateChoral = this.options.getFilenameTemplateChoral();
    this.filenameExampleChoral = this.options.getFilename(this.choralExample.type, this.choralExample.catalog, this.choralExample.title, this.choralExample.composer, this.choralExample.version, this.choralExample.organ);
    
    this.filenameTemplateOrgan = this.options.getFilenameTemplateOrgan();
    this.filenameExampleOrgan = this.options.getFilename(this.organExample.type, this.organExample.catalog, this.organExample.title, this.organExample.composer, this.organExample.version, this.organExample.organ);
  
    this.titleTemplateChoral = this.options.getTitleTemplateChoral();
    this.titleExampleChoral = this.options.getTitle(this.choralExample.type, this.choralExample.catalog, this.choralExample.title, this.choralExample.composer, this.choralExample.version, this.choralExample.organ);

    this.titleTemplateOrgan = this.options.getTitleTemplateOrgan();
    this.titleExampleOrgan = this.options.getTitle(this.organExample.type, this.organExample.catalog, this.organExample.title, this.organExample.composer, this.organExample.version, this.organExample.organ);

    this.sequenceHistory = this.options.sequenceHistory;
  }

  ngOnInit(): void {
    this.fileStatus$ = this.fileService.fileLoaded$.subscribe(val => this.fileStatus = val);
  }

  ngOnDestroy(): void {
    this.fileStatus$.unsubscribe();
  }

  updateFilenameChoral(): void {
    this.options.setFilenameTemplateChoral(this.filenameTemplateChoral);
    this.filenameExampleChoral = this.options.getFilename(this.choralExample.type, this.choralExample.catalog, this.choralExample.title, this.choralExample.composer, this.choralExample.version, this.choralExample.organ);
  }

  updateFilenameOrgan(): void {
    this.options.setFilenameTemplateOrgan(this.filenameTemplateOrgan);
    this.filenameExampleOrgan = this.options.getFilename(this.organExample.type, this.organExample.catalog, this.organExample.title, this.organExample.composer, this.organExample.version, this.organExample.organ);
  }

  updateTitleChoral(): void {
    this.options.setTitleTemplateChoral(this.titleTemplateChoral);
    this.titleExampleChoral = this.options.getTitle(this.choralExample.type, this.choralExample.catalog, this.choralExample.title, this.choralExample.composer, this.choralExample.version, this.choralExample.organ);
  }

  updateTitleOrgan(): void {
    this.options.setTitleTemplateOrgan(this.titleTemplateOrgan);
    this.titleExampleOrgan = this.options.getTitle(this.organExample.type, this.organExample.catalog, this.organExample.title, this.organExample.composer, this.organExample.version, this.organExample.organ);
  }

  printBlankRecord(organ: Organs): void {
    this.pdfService.blankRecord(organ);
  }

  reprintRecord(sequence: PrintSequence): void {
    console.log(sequence);
    const filename = this.options.getFilename(sequence.type, sequence.composition.catalogNo, sequence.composition.title, sequence.composition.composer, sequence.version, sequence.organString);
    const title = this.options.getTitle(sequence.type, sequence.composition.catalogNo, sequence.composition.title, sequence.composition.composer, sequence.version, sequence.organString);
    this.pdfService.PDF(sequence, filename, title);
  }

  removeFromHistory(index: number) {
    this.options.removeFromHistory(index);
    this.sequenceHistory = this.options.sequenceHistory;
  }

  clearHistory(): void {
    this.options.clearHistory();
    this.sequenceHistory = this.options.sequenceHistory;
  }

  printCrescendo(num: number): void {
    this.processService.crescendo(num);
  }

  printTutti(num: number): void {
    this.processService.tutti(num);
  }
  

}
