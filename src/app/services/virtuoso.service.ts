import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

import { environment } from '../../environments/environment';
import { Organ } from '../models/organ';
import { OrganConfig } from '../models/organ-config';
import { DrawknobState } from '../models/drawknob-state';
import { CrescendoStage } from '../models/crescendo';
import { OrganService } from '../services/organ.service';
import { FileService } from '../services/file.service';


/**
 * This service is the bridge between ProcessService and FileService, and is responsible
 * for interpreting the Virtuoso file format. It requests raw binary data from FileService
 * and returns an array of DrawknobState[] to ProcessService.
 */
@Injectable({
  providedIn: 'root'
})
export class VirtuosoService {
 
  private _config: OrganConfig;
  
  private _organSubscription: Subscription;

  constructor(private organService: OrganService, private fileService: FileService) {
    
    this._organSubscription = this.organService.selectedOrgan$.subscribe(val => {
      this._config = this.organService.organConfig;
    })
  }

  /**
   * Retrieves the drawknob data for a single piston.
   * @param level {number} - The memory level of the requested piston.
   * @param piston {number} - The index number of the requested piston.
   * @returns {Drawknob[]} An array of Drawknob objects.
   */ 
  public getPiston(level: number, piston: number): DrawknobState[] {

    let drawknobs: DrawknobState[] = [];

    let offset = this._getOffset(level, piston);

    // General and divisional pistons have a status byte at the beginning of the piston (See
    // Virtuoso file format map from Dwight - SdStops + 1)
    let byteCount = this._config.byteCount + 1;
    let data = this._getValues(offset, byteCount);

    drawknobs = this._decodePiston(data);
    return drawknobs;
  }


  /** Checks to see if the supplied piston is set or clear.
   * 
   * @param level {number} - The memory level of the requested piston.
   * @param piston {number} - The index number of the requested piston.
   * @returns {boolean} - Returns a boolean, with true indicating that the piston
   * has been set, and false indicating that it is clear.
   */
  public getPistonStatus(level: number, piston: number): boolean {

    let offset = this._getOffset(level, piston);
    let byteCount = this._config.byteCount + 1;
    let data = this._getValues(offset, byteCount);
    let drawknobs = this._decodePiston(data);

    for (let drawknob of drawknobs) {
      if (drawknob !== DrawknobState.Off && drawknob !== DrawknobState.OutOfRange) { return true; };
    }

    return false;
  }

  /** Gets drawknob data for Stages 1-60 of the specified crescendo.
   * 
   * @param num {number} - The number of the desired crescendo.
   * 
   * @returns {CresendoStage[]} Returns an array of CrescendoStage objects.
   */
  public getCrescendo(num: number): CrescendoStage[] {

    let offset = this._config.crescendoOffsets[num - 1];
    let stages: CrescendoStage[] = [];

    for(let i = 1; i < 61; i++) {

      let stepOffset = offset + (i * (this._config.byteCount));
      let values: number[] = this._getValues(stepOffset, this._config.byteCount);
      
      let drawknobs = this._decodePiston(values, false);

      let stage: CrescendoStage = {
        stage: i,
        drawknobs: drawknobs
      }

      stages.push(stage);
    }

    return stages;
  }

  /**
   * Gets the drawknobs of a specified Tutti.
   * @param num {number} - The number of the desired tutti.
   * @returns {DrawknobState[]} - An array of DrawknobStates.
   */
  public getTutti(num: number): DrawknobState[] {
    
    let offset: number = this._config.tuttiOffsets[num];
    let values: number[] = this._getValues(offset, this._config.byteCount);
    let drawknobs: DrawknobState[] = this._decodePiston(values, false);
    return drawknobs;
  }


  private _decodePiston(data: number[], statusByte: boolean = true): DrawknobState[] {

    let drawknobs: DrawknobState[] = [];

    // General and divisional pistons have a "status" byte at the beginning of the piston,
    // but crescendo and tutti pistons do not. This step corrects that discrepancy.
    let statusByteOffset: number = 0;
    if (!statusByte) { statusByteOffset = -1; }

    for (let stop of this._config.stopTable) {
      
      const byteValue: number = data[stop.vIndex + statusByteOffset];
      const drawknob: DrawknobState = this._decodeStop(byteValue);
      drawknobs.push(drawknob);
    }

    return drawknobs;
  }




  /** Decodes the supplied 8-bit integer to a DrawknobState. 
   * 
   * @param int {number} - The integer value that represents a stop in Virtuoso's data format. 
   * Virtuoso stores each stop of each piston as a single byte, with the 8 bits representing the 
   * following:
   * 
   * - 7 (high bit) - Whether or not the stop is in range (1 = no, 0 = yes)
   * - 6 - N/A
   * - 1-5 - Binary number representing the number of the division the stop belongs to (not needed)
   * - 0 (low bit) - Whether or not the stop is on (1 = yes, 0 = no)
   * 
   * @returns {DrawknobState} Returns a DrawknobState.
   */
  private _decodeStop(int: number): DrawknobState {

    let state: DrawknobState;

    // If the high bit is 1, the drawknob is out of range
    if (((int >> 7) & 1) === 1) { return DrawknobState.OutOfRange; }

    // If the low bit is 1, the drawknob is on
    if ((int & 1) === 1) {
      state = DrawknobState.On;
    } else {
      state = DrawknobState.Off;
    }

    return state;
  }


  /** Calculates the byte offset for the requested piston.
   * @param level {number} - The memory level of the requested piston.
   * @param piston {number} - The index number of the requested piston.
   */
  public _getOffset(level: number, piston: number): number {
    
    let levelOffset: number = (level - 1) * this._config.memoryLevelLength; 

    let vIndex: number = this._config.pistonTable[piston].vIndex;
    let pistonOffset: number = vIndex * (this._config.byteCount + 1);

    let offset: number = levelOffset + pistonOffset;
    return offset;
  }


  /** Retrieves an array of byte-length values from FileService.
   * 
   * @param offset {number} - The offset at which to begin reading values.
   * @param length {number} - The number of values to retrieve.
   * 
   * @returns {number[]} Returns an array of 8-bit signed integers.
   */
  private _getValues(offset: number, length: number): number[] {

    let values = this.fileService.getValues(offset, length);
    return values;
  }

}