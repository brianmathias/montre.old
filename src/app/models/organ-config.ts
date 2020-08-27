/**
 * An object containing information about the Virtuoso configuration for an organ. Used
 * to facilitate calculating (or looking up) the binary offset for a particular piston.
 */
export interface OrganConfig {


    // Offset numbers
    // Lookup tables for memory levels, pistons, and stops
    
    pistonLength: number; // Number of 32-bit words used to store one piston
    
    // Either data to calculate offsets of memory levels (ideally), 
    // or array of offsets for every level

    memoryLevels: number[];
    
    // Either data to calculate offsets of each piston or array of offsets
    // for each of the organs pistons

    pistons: number[];
    
    // Lookup table for stops of Organ to facilitate putting data at the correct
    // index in the Drawknobs array
    
    stops: number[];

}