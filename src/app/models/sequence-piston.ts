import { Piston } from './piston';

/** Extension of Piston that includes the memory level for use use in a Sequence. */
export interface SequencePiston extends Piston {
    
    memoryLevel: number;
    
}