import { Injectable } from '@angular/core';
import { PrintSequence } from '../models/sequence';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  /** String that acts as the template for output filenames for choral works. */
  private _filenameTemplateChoral: string;

  /** String that acts as the template for output filenames for organ works. */
  private _filenameTemplateOrgan: string;
  
  /** String that acts as the page title template for choral works. */
  private _titleTemplateChoral: string;

  /** String that acts as the page title template for organ works. */
  private _titleTemplateOrgan: string;

  private _sequence = {
    type: "",
    catalog: "",
    title: "",
    composer: "",
    composerFirst: "",
    composerLast: "", 
    version: "", 
    organ: ""
  }

  /** Array of recent sequences. */
  public sequenceHistory: PrintSequence[];

  constructor() { 
    
    let history = localStorage.getItem("history");
    
    if (history !== null) {
      this.sequenceHistory = JSON.parse(history);
    } else {
      this.sequenceHistory = [];
    }

    this._filenameTemplateChoral = localStorage.getItem("filenameChoral") || "$catalog - $title ($organ)";
    this._filenameTemplateOrgan = localStorage.getItem("filenameOrgan") || "$composer-last, $composer-first - $title ($organ)";
    this._titleTemplateChoral = localStorage.getItem("titleChoral") || "#$catalog - $title";
    this._titleTemplateOrgan = localStorage.getItem("titleOrgan") || "$title";

  }

  // ----------------------------------------------------------------------------------------------
  // Filename and Title Generation --------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------

  private _parseName(name: string): void {
    
    let firstName: string, lastName: string;

    if (name.indexOf(",") === -1) {
      // If there is no comma (i.e., "First Last")
      firstName = name.substring(0, name.lastIndexOf(" "));
      lastName = name.substring(name.lastIndexOf(" ") + 1);
    } else {
      // If there is a comma (i.e., Last, First)
      lastName = name.substring(0, name.indexOf(","));
      firstName = name.substring(name.indexOf(", "));
    }

    this._sequence.composerFirst = firstName;
    this._sequence.composerLast = lastName;

  }

  private _replaceFields(template: string): string {
    
    let str: string = template;
    
    this._parseName(this._sequence.composer);

    str = str.replace("$composer-first", this._sequence.composerFirst);
    str = str.replace("$composer-last", this._sequence.composerLast);
    
    str = str.replace("$catalog", this._sequence.catalog);
    str = str.replace("$title", this._sequence.title);
    str = str.replace("$version", this._sequence.version);
    str = str.replace("$organ", this._sequence.organ)

    let date = new Date();
    let dateString = date.toISOString().split("T")[0];
    str = str.replace("$date", dateString);

    console.log(str);
    return str;
  }



  /** Sets the template used for the filename of choral works and saves it to localStorage.
   * 
   * @param {string} template - The string that should be set as the template.
   */
  public setFilenameTemplateChoral(template: string): void {
    this._filenameTemplateChoral = template;
    localStorage.setItem("filenameChoral", template);
  }

  /** Gets the current filename template string for choral works.
   * 
   * @return The template string. 
   */
  public getFilenameTemplateChoral(): string {
    return this._filenameTemplateChoral;
  }

  /** Sets the template used for the filename of organ works and saves it to localStorage.
   * 
   * @param {string} template - The string that should be set as the template.
   */
  public setFilenameTemplateOrgan(template: string): void {
    this._filenameTemplateOrgan = template;
    localStorage.setItem("filenameOrgan", template);
  }

  /** Gets the current filename template string for organ works.
   * 
   * @return The template string. 
   */
  public getFilenameTemplateOrgan(): string {
    return this._filenameTemplateOrgan;
  }

  /**
   * Creates filenames by replacing pre-defined tokens with the data provided.
   * @param catalog - The catalog number of the musical work.
   * @param title  - The title of the musical work.
   * @param composer - The composer of the musical work.
   * @param organ - The organ (TAB or CC) associated with the current sequence.
   * 
   * @return - The generated filename as a string. 
   */
  public getFilename(type: string, catalog: string, title: string, composer: string, version: string, organ: string): string {
    
    this._sequence.type = type;
    this._sequence.catalog = catalog;
    this._sequence.title = title;
    this._sequence.composer = composer;
    this._sequence.version = version;
    this._sequence.organ = organ;
  
    this._parseName(composer);
    
    let template: string;

    if (type === "Choral") { template = this._filenameTemplateChoral; }
    else { template = this._filenameTemplateOrgan; }

    let str: string = this._replaceFields(template);
    
    // Remove illegal characters
    str = str.replace(/[/\\?%*:|"<>\.]/g, '');
    str += ".pdf";

    return str;
  }

  // ----------------------------------------------------------------------------------------------
  // Page Title Generation ------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------

  /** Sets the template used for the page title of choral works and saves it to localStorage.
   * 
   * @param {string} template - The string that should be set as the template.
   */
  public setTitleTemplateChoral(template: string): void {
    this._titleTemplateChoral = template;
    localStorage.setItem("titleChoral", template);
  }

  /** Gets the current title template string for choral works.
   * 
   * @return The template string. 
   */
  public getTitleTemplateChoral(): string {
    return this._titleTemplateChoral;
  }

  /** Sets the template used for the page title of organ works and saves it to localStorage.
   * 
   * @param {string} template - The string that should be set as the template.
   */
  public setTitleTemplateOrgan(template: string): void {
    this._titleTemplateOrgan = template;
    localStorage.setItem("titleOrgan", template);
  }
  
  /** Gets the current title template string for organ works.
   * 
   * @return The template string. 
   */
  public getTitleTemplateOrgan(): string {
    return this._titleTemplateOrgan;
  }

  public getTitle(type: string, catalog: string, title: string, composer: string, version: string, organ: string){
    
    this._sequence.type = type;
    this._sequence.catalog = catalog;
    this._sequence.title = title;
    this._sequence.composer = composer;
    this._sequence.version = version;
    this._sequence.organ = organ;
  
    this._parseName(composer);
    
    let template: string;

    if (type === "Choral") { template = this._titleTemplateChoral; }
    else { template = this._titleTemplateOrgan; }

    let str = this._replaceFields(template);
    return str;
  }






  /** Adds the sequence passed into the function for the history on the options screen and saves
   * it to localStorage.
   * 
   * @param {PrintSequence} sequence - The PrintSequence object that is to be added to the history.
   */
  public addToHistory(sequence: PrintSequence): void {
    this.sequenceHistory.unshift(sequence);

    // Limit list of recent sequences to 10 in order to stay within LocalStorage limit 
    if (this.sequenceHistory.length > 10 ) {
      this.sequenceHistory.length = 10;
    }

    localStorage.setItem("history", JSON.stringify(this.sequenceHistory));
  }

  /** Removes the sequence at the provided index from history. */
  public removeFromHistory(index: number): void {
    this.sequenceHistory.splice(index, 1);
    localStorage.setItem("history", JSON.stringify(this.sequenceHistory));
  }

  /** Clears the current sequence history in the application and in localStorage. */
  public clearHistory(): void {
    localStorage.removeItem("history");
    this.sequenceHistory = [];
  }
 }
