import { Injectable } from '@angular/core';

interface DivisionStyleObject {
  general?: boolean;
  antiphonal?: boolean;
  solo?: boolean;
  swell?: boolean;
  great?: boolean;
  choir?: boolean;
  positiv?: boolean;
  pedal?: boolean;
}


/**
 * Service that provides components an easy way to apply CSS classes based on divisions 
 * of the organ. 
 */

@Injectable({
  providedIn: 'root'
})

export class DivisionStylesService {

  constructor() { }

  /** 
   * Takes the name of the division as input and returns a DivisionStyleObject that 
   * can be used to apply the proper CSS class to an element using ngClass.
   * 
   * @param {string} manual - The name of the manual.
   * 
   * @return {DivisionStyleObject}
   */

  getDivisionClass(manual: string): DivisionStyleObject {
    
    let style: string = "";
    
    switch (manual) {
      
      case "General":
        style = "general";
        break;
      case "Antiphonal":
        style = "antiphonal";
        break;
      case "Orchestral":
        style = "antiphonal";
        break;
      case "Solo/Bombarde":
        style = "solo";
        break;
      case "Solo":
        style = "solo";
        break;
      case "Swell":
        style = "swell";
        break;
      case "Great":
        style = "great";
        break;
      case "Choir":
        style = "choir";
        break;
      case "Positiv":
        style = "positiv";
        break;
      case "Pedal":
        style = "pedal";
        break;
    }
    
    let styleObj = {};
    styleObj[style] = true;

    return styleObj;
  }
}
