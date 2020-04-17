import { DrawknobState } from './drawknob-state';

export interface Drawknob {
    state: DrawknobState;
    isInRange: boolean;
    isCancelable: boolean;
}