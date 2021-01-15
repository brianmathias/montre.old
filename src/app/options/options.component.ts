import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { FileService } from '../services/file.service';
import { OptionsService } from '../services/options.service';
import { PDFService } from '../services/pdf.service';
import { ProcessService } from '../services/process.service';

import { Organs } from '../models/organs';
import { PrintSequence } from '../models/sequence';



@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss', '../../_variables.scss']
})
export class OptionsComponent {

  /** Subscription to FileService.fileLoaded boolean. */
  fileStatus$: Subscription;

  /** Current state of file upload. Used as switch for features that should only be shown
   * when a Virtuoso file has been uploaded. */
  fileStatus: boolean = false;

  /** The template used to generate filenames for choral pieces. */
  filenameTemplateChoral: string;

  /** The example string used to demonstrate the filename template for choral pieces. */
  filenameExampleChoral: string;

  /** The template used to generate filenames for organ pieces. */
  filenameTemplateOrgan: string;

  /** The example string used to demonstrate the filename template for organ pieces. */
  filenameExampleOrgan: string;
  
  /** The template used to generate the page title for choral pieces. */
  titleTemplateChoral: string;

  /** The example string used to demonstrate the page title template for choral pieces. */
  titleExampleChoral: string;

  /** The tempalte used to generate the page title for organ pieces. */
  titleTemplateOrgan: string;

  /** The example string used to demonstrate the page title template for organ pieces. */
  titleExampleOrgan: string;
  
  /** An array of PrintSequence objects that contains recently created documents available for re-printing. */
  sequenceHistory: PrintSequence[];

  /** Sample choral piece used to demonstrate the filename and page title templates. */
  choralExample: any = {
    type: "Choral",
    catalog: "1496",
    title: "Hymn of Praise",
    composer: "Mack Wilberg",
    organ: "TAB",
    version: "Organ w/ Orchestra"
  }

  /** Sample organ piece used to demonstrate the filename and page title templates. */
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

  /** Updates the choral filename template any time the template is changed. */
  updateFilenameChoral(): void {
    this.options.setFilenameTemplateChoral(this.filenameTemplateChoral);
    this.filenameExampleChoral = this.options.getFilename(this.choralExample.type, this.choralExample.catalog, this.choralExample.title, this.choralExample.composer, this.choralExample.version, this.choralExample.organ);
  }

  /** Updates the organ filename template any time the template is changed. */
  updateFilenameOrgan(): void {
    this.options.setFilenameTemplateOrgan(this.filenameTemplateOrgan);
    this.filenameExampleOrgan = this.options.getFilename(this.organExample.type, this.organExample.catalog, this.organExample.title, this.organExample.composer, this.organExample.version, this.organExample.organ);
  }

  /** Updates the choral page title template any time the template is changed. */
  updateTitleChoral(): void {
    this.options.setTitleTemplateChoral(this.titleTemplateChoral);
    this.titleExampleChoral = this.options.getTitle(this.choralExample.type, this.choralExample.catalog, this.choralExample.title, this.choralExample.composer, this.choralExample.version, this.choralExample.organ);
  }

  /** Updates the organ page title template any time the tempalte is changed. */
  updateTitleOrgan(): void {
    this.options.setTitleTemplateOrgan(this.titleTemplateOrgan);
    this.titleExampleOrgan = this.options.getTitle(this.organExample.type, this.organExample.catalog, this.organExample.title, this.organExample.composer, this.organExample.version, this.organExample.organ);
  }

  /** Prints a blank piston record for the organ passed into the function. */
  printBlankRecord(organ: Organs): void {
    this.pdfService.blankRecord(organ);
  }

  /** Reprints the PrintSequence passed into the function. */
  reprintRecord(sequence: PrintSequence): void {
    const filename = this.options.getFilename(sequence.type, sequence.composition.catalogNo, sequence.composition.title, sequence.composition.composer, sequence.version, sequence.organString);
    const title = this.options.getTitle(sequence.type, sequence.composition.catalogNo, sequence.composition.title, sequence.composition.composer, sequence.version, sequence.organString);
    this.pdfService.printSequence(sequence, filename, title);
  }

  /** Deletes a PrintSequence from the history. */
  removeFromHistory(index: number) {
    this.options.removeFromHistory(index);
    this.sequenceHistory = this.options.sequenceHistory;
  }

  /** Deletes all sequences in hte history. */
  clearHistory(): void {
    this.options.clearHistory();
    this.sequenceHistory = this.options.sequenceHistory;
  }

  /** Prints the specified Crescendo. */
  printCrescendo(num: number): void {
    this.processService.crescendo(num);
  }

  /** Prints the specified Tutti. */
  printTutti(num: number): void {
    this.processService.tutti(num);
  }
  

}
