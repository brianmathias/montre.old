import { DrawknobState } from './drawknob-state';

export interface SequenceStep {
    
    memoryLevel: number; 
    piston: number // ID number of piston
    base: number; // Index of sequence step current step is based on (-1 = none); 
    notes: string;
    measure: string; 
    drawknobs?: DrawknobState[];
}

export interface PrintStep extends SequenceStep {
    drawknobs: DrawknobState[];
}
