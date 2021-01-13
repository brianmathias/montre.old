import { StopTableRow } from '../virtuoso/stopTableRow';
import { PistonTableRow } from '../virtuoso/pistonTableRow';

/**
 * An object containing information about the Virtuoso configuration for an organ. Used
 * to facilitate calculating the binary offset for a particular piston.
 */
export interface OrganConfig {


    /** The number of bytes used to store a single piston. This is equivalent to Sd Stops on the Virtuoso File Format Map (not Sd + 1 stops). */
    byteCount: number;

    /** The number of memory levels per user folder. */
    memoryLevelCount: number;

    /** The length in bytes of a single memory level */
    memoryLevelLength: number;
    
    /** Lookup table for pistons of the Organ to facilitate converting piston ID of 
     * Organ object to the correct offset relative to the memory level. */
    pistonTable: PistonTableRow[];
    
    /** Lookup table for stops of the Organ to facilitate putting data at the correct
     *  index in the Drawknobs array. */
    stopTable: StopTableRow[];

    /** Array of four numbers representing the offset for the start of each crescendo. */
    crescendoOffsets: number[];

    /** Array of seven numbers representing the offset for each of the six tuttis. */
    tuttiOffsets: number[];

}