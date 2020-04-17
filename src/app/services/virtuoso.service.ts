import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Organ } from '../models/organ';
import { Drawknob } from '../models/drawknob';
import { DrawknobState } from '../models/drawknob-state';
import { OrganService } from '../services/organ.service';
import { FileService } from '../services/file.service';


@Injectable({
  providedIn: 'root'
})
export class VirtuosoService {

  private _env = environment;
  private _organ: Organ;

  constructor(private organService: OrganService, private fileService: FileService) {
    this._organ = this.organService.organ;
   }

  public getPiston(level: number, piston: number): Drawknob[] {

    let drawknobs: Drawknob[] = [];

    if(this._env.virtuoso) {
      // Insert code here to find the correct address for the requested piston,
      // request the binary strings (22 32-bit words for the Tabernacle organ)
      // from FileService.getValue(), and translate it into an array of DrawknobStates

    } else {
      drawknobs = this._generateDrawknobs();
    }
    return drawknobs;
  }

  private _getOffset(level: number, piston: number): number {
    
    // Calculates and returns the offset at which the data for the requested piston 
    // is located

    return 1;
  }

  private _getBinaryString(offset: number): string[] {
    
    // Requests binary info from FileService at offset and returns the information as
    // an array of 32-bit binary strings
    
    return ["test", "string"]; 
  }

  










  private _generateDrawknobs(): Drawknob[] {

    // Generates drawknob states for one piston and returns an array of On or Off drawknob states

    let drawknobs: Drawknob[] = [];

    for(let stop of this._organ.stops){
      
      let drawknob: Drawknob = {
        state: DrawknobState.Off,
        isInRange: true,
        isCancelable: true
      }

      const bool: boolean = Math.random() >= 0.5;
      if(bool) { drawknob.state = DrawknobState.On; }
      drawknobs.push(drawknob);
    }
    return drawknobs;
  }

}
