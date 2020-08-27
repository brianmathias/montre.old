import { DrawknobState } from './drawknob-state';

/**
 * Object representing a drawknob as part of a sequence step with the following three properties:
 * 
 * - state: DrawknobState (off|on|remove|add)
 * - isInRange: boolean
 * - inCancelable: boolean
 */
export interface Drawknob {
    state: DrawknobState;
    isInRange: boolean;
    isCancelable: boolean;
}