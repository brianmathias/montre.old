/**
 * The data format for each object in the OrganConfig.stopTable array, facilitating lookup of 
 * the index (position) of a particular stop within a Virtuoso piston's binary data.
 */
export interface StopTableRow {
    
    /** The ID of the stop, as listed in the Organ object constant. (The data in stopTable should 
     * be listed in the same order so this ID number can also be used as the index for 
     * the array.) */
    id: number;

    /** The index number of the piston in Virtuoso's ordering. (This is to be used to 
     * calculate the offset from the start of the piston.) */
    vIndex: number;

}