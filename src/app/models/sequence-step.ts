import { DrawknobState } from './drawknob-state';

/** Object that represents a single step of a sequence. */
export interface SequenceStep {
    
    /** The memory level of the piston to be included. */
    memoryLevel: number; 

    /** The ID number of the piston. */
    piston: number;

    /** The index of the sequence step this step is based on (-1 = none). */
    base: number; 

    /** Written notes for this step. */
    notes: string;

    /** The measure number(s) at which this piston is used. */
    measure: string; 

    /** Only used to keep TypeScript happy when converting a SequenceStep to a PrintStep. */
    drawknobs?: DrawknobState[];
}

/** Extension of SequenceStep that includes drawknob states from VirtuosoService. */
export interface PrintStep extends SequenceStep {

    /** An array of Drawknob objects containing the state of each drawknob for the current piston. */
    drawknobs: DrawknobState[];
}
