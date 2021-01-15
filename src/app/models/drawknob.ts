import { DrawknobState } from './drawknob-state';

/**
 * NOTE: No longer being used?
 * 
 * Object representing a drawknob as part of a sequence step with the following three properties:
 * 
 * - id: number - The id number of the stop
 * - state: DrawknobState (off|on|remove|add)
 * - isInRange: boolean
 */
export interface Drawknob {
    id: number;
    state: DrawknobState;
    isInRange: boolean;
}