/**
 * The data format for each object in the OrganConfig.pistonTable array, facilitating lookup of 
 * index (position) of a particular piston in Virtuoso's file format.
 */
export interface PistonTableRow {
    
    /** The ID of the piston, as listed in the Organ object constant. (The data should 
     * be listed in the same order so this ID number can also be used as the index for 
     * the PistonTable array.) */
    id: number;

    /** The index number of the piston in Virtuoso's ordering. (This is to be used to 
     * calculate the offset from the start of the memory level.) */
    vIndex: number;
    
}