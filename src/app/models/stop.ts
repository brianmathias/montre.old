export interface Stop {

    id: number; // indexed from top left moving down rows from left to right
    name: string; // Full name
    shortName: string; // Abbreviated name from printing on registration sheet
    pitchDesignation: string; // Full pitch designation (i.e., 10 2/3')
    shortPitchDesignation: string; // Pitch designation for printing on registration sheet
    column: number; // Drawknob column index (from left, zero indexed)
    row: number; // Drawknob row index (from top, zero indexed)
    division: number; // Index of manual stop belongs to
    
}