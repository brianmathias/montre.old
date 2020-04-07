import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DivisionStylesService {

  // This service provides a simple function for applying conditional styles (colors)
  // for different division of the organ

  constructor() { }

  getDivisionClass(manual: string) {
    
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
