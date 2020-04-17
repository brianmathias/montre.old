import { Drawknob } from './drawknob';

export interface SequenceStep {
    
    memoryLevel: number; 
    piston: number // ID number of piston
    base: number; // Index of sequence step current step is based on (-1 = none); 
    notes: string;
    measure: string; 
    drawknobs?: Drawknob[];
}

export interface PrintStep extends SequenceStep {
    drawknobs: Drawknob[];
}
