/** An object representing a vertical divider line between divisions. */
interface DivisionDivider {

    /** The X coordinate at which the divider should be placed. */
    x: number;

    /** The Y coordinate for the top of the divider. */
    y1: number;

    /** The Y coordinate for the bottom of the divider. */
    y2: number;
}

/** An object representing a division label. */
interface DivisionLabel {

    /** The X coordinate (in points) at which the label should be placed (i.e., the baseline). */
    x: number;

    /** The Y coordinate (in points) at which the label should be placed. */
    y: number;

    /** The text of the label. */
    label: string;
}

/** An object representing an RGB color. */
interface Color {
    
    /** The red value of an RGB color (0-255). */
    r: number;
    
    /** The green value of an RGB color (0-255). */
    g: number;
    
    /** The blue value of an RGB color (0-255). */
    b: number;
}

/** An object containing RGB colors for a single drawknob state (off, on, add, remove). */
interface DrawknobColor {
    stroke: Color;
    fill: Color;
    text: Color;
    style: string;
}

/**
 * A class used to provide visual layout for an organ. This parent class provides basic layout 
 * variables in order to acheive a consistent visual style, but must be subclassed to calculate 
 * drawknob and spacer columns, dividers, and division labels for each instrument.
 * 
 */
export class OrganLayout {
    
    // 12 Columns * 22pt =       264pt
    // 11 Column spacers * 5pt =  55pt
    // 3 Division spacers * 7pt = 21pt
    // 1 Center spacer * 20pt =   20pt
    //                          ------
    //                           360pt (per half)
    
    // --------------------------------------------------------------------------------------------
    // Page Variables -----------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------

    /** The page width (in points). */
    public pageWidth: number = 792; // 11"

    /** The page height (in points). */
    public pageHeight: number = 612; // 8.5"

    /** The page margin (in points). */
    public pageMargin: number = 36; // 0.25"

    /** The top page margin (in points). */
    public topMargin: number = 36; // 0.5"

    /** The left margin for the first drawknob column (in points). */
    public drawknobMargin: number = 27;

    /** The top margin above the first row of drawknobs (in points).  */
    public drawknobTopMargin: number = 160;

    /** The font used for everything on the page. (Note: restricted to jsPDF available fonts.) */
    public font: string = "Helvetica";

    /** The baseline (in points) for the main heading. */
    public titleBaseline: number = 48; 

    public titleFontSize: number = 18;

    public subtitleFontSize: number = 14;

    // --------------------------------------------------------------------------------------------
    // Colors -------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------

    /** RGB colors used for drawknob states. */
    private _colors = {
        black: {r: 0, g: 0, b: 0},
        white: {r: 255, g: 255, b: 255},
        red: {r: 180, g: 0, b: 0},
        green: {r: 30, g: 130, b: 75},
        gray: {r: 210, g: 210, b: 210}
    }

    /** Array of DrawknobColor objects corresponding to the four drawknob states:
     * 
     * - 0 = Off
     * - 1 = On
     * - 2 = Remove
     * - 3 = Add 
     * - 4 = OutOfRange
     * 
     * Each item contains the following properties: stroke, fill, text, and style. Stroke, fill,
     * and text are RGB Color objects, and style is a string corresponding to one of the jsPDF
     * painting styles.
     */
    public colors: DrawknobColor[] = [
        
        // DrawknobState.Off (0)
        {
            stroke: this._colors.black,
            fill: this._colors.white,
            text: this._colors.black,
            style: "S"
        },

        // DrawknobState.On (1)
        {
            stroke: this._colors.black,
            fill: this._colors.black,
            text: this._colors.white,
            style: "DF"
        },

        // DrawknobState.Remove (2)
        {
            stroke: this._colors.red,
            fill: this._colors.white,
            text: this._colors.red,
            style: "S"
        },

        // DrawknobState.Add (3)
        {
            stroke: this._colors.green,
            fill: this._colors.green,
            text: this._colors.white,
            style: "DF"
        },

        // DrawknobState.OutOfRange (4)
        {
            stroke: this._colors.gray,
            fill: this._colors.white,
            text: this._colors.gray,
            style: "S"
        }
    ]

    // --------------------------------------------------------------------------------------------
    // Corner Boxes -------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------

    /** The width (in points) of the boxes in the upper left and upper right corners displaying the 
     * venue (left) and the step number (right).
     */
    public cornerBoxWidth: number = 72;

    /** The height (in points) of the boxes in the upper left and upper right corners displaying the 
     * venue (left) and the step number (right).
     */
    public cornerBoxHeight: number = 24;

    /** The starting Y position of the boxes in the upper left and upper right corners displaying the 
     * venue (left) and the step number (right).
     *  */
    public cornerBoxYPosition: number = 30;

    /** The font size of the text used in the corner boxes. */
    public cornerBoxFontSize: number = 10;

    /** The baseline of the corner box text relative to the Y position of the boxes. */
    public cornerBoxBaseline: number = this.cornerBoxYPosition + 16;
    
    // --------------------------------------------------------------------------------------------
    // Text Fields --------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------

    /** The starting baseline (in points) for the first row of text fields. */
    public textFieldBaseline: number = 120;

    /** The start and end points (in points) of the three text field columns.
     *  - 0 - Column 1 start
     *  - 1 - Column 1 end
     *  - 2 - Column 2 start
     *  - 3 - Column 2 end
     *  - 4 - Column 3 start
     *  - 5 - Column 3 end
     */
    public textFieldColumns: number[] = [36, 263, 283, 509, 529, 756]; // 10" / 3 with 20 point gutters
    
    
    /** The row height (in points) of text fields. */
    public textFieldRowHeight: number = 32;

    /** The baselines of the two rows of text fields. */
    public textFieldRows: number[] = [this.textFieldBaseline, this.textFieldBaseline + this.textFieldRowHeight];
    
    /** The amount (in points) by which the text field label is offset vertically from the main text.  */
    public textFieldlabelOffset: number = -18;

    /** The font size of text field labels. */
    public textFieldLabelFontSize: number = 5;
   
    /** The amount (in points) by which text field text is offset from the baseline (where the line is drawn). */
    public textFieldTextOffset: number = -5;

    /** The font size of text field text. */
    public textFieldTextFontSize: number = 11;

    // --------------------------------------------------------------------------------------------
    // Drawknob Variables -------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------

    /** The point size for drawknob text. */
    public drawknobFontSize: number = 7;
    
    /** Horizontal offset (in points) to center pitch designation (making up for the '). */
    public drawknobPitchOffset: number = 0.5; 

    /** The width (in points) of each drawknob column. */
    public drawknobColumnWidth: number = 22;

    /** The drawknob radius (in points). */
    public drawknobRadius: number = this.drawknobColumnWidth / 2; 

    /** The drawknob radius of miniature expression drawknobs (in points). */
    public expDrawknobRadius: number = 7;

    /** The width (in points) of the spacer columns between drawknob columns. */
    public spacerColumnWidth: number = 7;

    /** The width (in points) of the larger spacer columns between divisions. */
    public divisionSpacerWidth: number = this.spacerColumnWidth + 7;

    /** The width (in points) of the center spacer column. A center spacer column is used on both
     * sides of the center line (i.e., 7 * 2 = 14).
     */
    public centerSpacerWidth: number = 7;
    
    // --------------------------------------------------------------------------------------------
    // Drawknob Rows and Columns ------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------
    
    /** An array containing the X position (in points) of the organ's drawknob columns. */
    public columns: number[] = [];

    /** An array containing the X position (in points) of the organ's auxiliary drawknobs. Used for 
     * the square "hidden" stops on the Tabernacle organ (All Trems Off, MIDI controls, etc.).
     */
    public auxColumns?: number[] = [];

    public expTopMargin: number = 184;

    /** An array containing the X position (in points) of the organ's expression assignments 
     * drawknobs. Used for the mini drawknobs on the Conference Center organ.*/
    public expColumns?: number[] = [];

    /** The number of drawknob rows. */
    public _rowCount: number = 23;

    /** An array containing the Y position (in points) of the organ's drawknob rows. */
    public rows: number[] = [];

    // --------------------------------------------------------------------------------------------
    // Division Labels and Dividers ---------------------------------------------------------------
    // --------------------------------------------------------------------------------------------

    /** The stroke weight (in points) of division dividers. */
    public divisionDividerLineWidth: number = 1;

    /** The font size of division labels. */
    public divisionLabelFontSize: number = 8;

    /** An array containing the division dividers that are to be drawn on the page. */ 
    public dividers: DivisionDivider[] = [];

    /** A array containing the division labels that are to be drawn on the page. */ 
    public labels: DivisionLabel[] = [];

    

    constructor() {

        // Calculate row coordinates
        //this.rows.push(this.pageMargin + this.drawknobTopMargin + (this.drawknobColumnWidth / 2));
        //for(let i = 1; i < this._rowCount + 1; i++) {
        //    const y = this.rows[i - 1] + (this.drawknobColumnWidth / 2) + (this.spacerColumnWidth / 2);
        //    this.rows.push(y);
       // }

        // Bottom row for auxilliary stops (row 24)
        //this.rows.push(564);
        //this.rows.push(573)
        
        // Column coordinates should be calculated in sub-class constructors
        // Division labels and dividers should be specified in sub-class constructors
    }

    /**
     * Helper function for calculating the center between two columns for 
     * division labels.
     * 
     * @param column {number} The index of the column to the left of the desired position.
     * 
     * @return {number} The X coordinate (in points) of the center position.
     */
    labelColumn(column: number): number {
        const x = this.columns[column] + ((this.drawknobColumnWidth + this.spacerColumnWidth) / 2);
        return x;
    }

    /**
     * Helper function for calculating the Y position of top-row division labels.
     * 
     * @return {number} The Y coordinate (in points) of the label row.
     */
    labelRow(): number {
        return this.rows[0] - 20;
    }


    /**
     * Helper function for calculating the center between columns for division dividers. 
     * Returns the center position after the stop column passed into the function.
     * 
     * @param column {number} The index of the column to the left of the desired position.
     * 
     * @return {number} The X coordinate (in points) of the center position.
     */
    dividerColumn(column: number): number {
        const x = this.columns[column] + ((this.divisionSpacerWidth + this.drawknobColumnWidth) / 2);
        return x;
    }
}

