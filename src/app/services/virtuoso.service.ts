import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Organ } from '../models/organ';
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

  public getPiston(level: number, piston: number): DrawknobState[] {

    let drawknobs: DrawknobState[] = [];

    if(this._env.virtuoso) {
      // Insert code here to find the correct address for the requested piston,
      // request the binary strings (22 32-bit words for the Tabernacle organ)
      // from FileService.getValue(), and translate it into an array of DrawknobStates

    } else {
      drawknobs = this._generateDrawknobs();
    }
    return drawknobs;
  }

  private _generateDrawknobs(): DrawknobState[] {

    // Generates drawknob states for one piston and returns an array of On or Off drawknob states

    let drawknobs: DrawknobState[] = [];

    for(let stop of this._organ.stops){
      const bool: boolean = Math.random() >= 0.5;
      let ds: DrawknobState;
      if(bool) { ds = DrawknobState.On; }
      else { ds = DrawknobState.Off; }
      drawknobs.push(ds);
    }
    return drawknobs;
  }

}
