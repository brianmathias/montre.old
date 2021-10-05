/** An object representing a single stop. */
export interface Stop {

    /** ID number of the stop (indexed from top left moving down rows from left to right). */
    id: number; 

    /** The stop's full name. */
    name: string;

    /** The stop's abbreviated name for printing on drawknobs. */
    shortName: string; 

    /** The stop's full pitch designation (i.e., 10 2/3'). */
    pitchDesignation: string; 

    /** The stop's abbreviated pitch designation for printing on drawknobs. */
    shortPitchDesignation: string; 

    /** The drawknob's column index (zero indexed from left to right). */
    column: number;

    /** The drawknob's row index (zero indexed from top to bottom). */
    row: number;

    /** The index number of the manual the stop belongs to. */
    division: number; 

    /** Boolean indicating whether or not the stop is an "auxiliary" stop (to be drawn with a 
     * square border at the bottom). 
     */
    aux?: boolean; 

    /** Boolean indicating whether or not the stop is an "expression" stop (to be drawn in small
     *  size along the top of the console diagram). */
    exp?: boolean;
    
}