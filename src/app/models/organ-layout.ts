interface DivisionDivider {
    x: number;
    y1: number;
    y2: number;
}

interface DivisionLabel {
    x: number;
    y: number;
    label: string;
}

export class OrganLayout {
    
    // 12 Columns * 22pt =       264pt
    // 11 Column spacers * 5pt =  55pt
    // 3 Division spacers * 7pt = 21pt
    // 1 Center spacer * 20pt =   20pt
    //                          ------
    //                           360pt (per half)
    
    // Page variables
    public pageWidth: number = 792; // 11"
    public pageHeight: number = 612; // 8.5"
    public pageMargin: number = 36; // 0.25"
    public topMargin: number = 36; // 0.5"
    public drawknobMargin: number = 27;
    public drawknobTopMargin: number = 160;
    
    // Drawknob variables
    public drawknobFontSize: number = 7;
    public drawknobPitchOffset: number = 0.5; // Horizontal offset to center pitch designation (to make up for ')

    public drawknobColumnWidth: number = 22;
    public drawknobRadius: number = this.drawknobColumnWidth / 2; 
    public spacerColumnWidth: number = 7;
    public divisionSpacerWidth: number = this.spacerColumnWidth + 7;
    public centerSpacerWidth: number = 7;
    
    // Drawknob rows and columns
    public columns: number[] = [];
    public auxColumns?: number[] = []
    private _rowCount: number = 23;
    public rows: number[] = [];

    // Division dividers
    public dividers: DivisionDivider[] = [];

    // Division labels
    public labels: DivisionLabel[] = [];

    constructor() {

        // Calculate row coordinates
        this.rows.push(this.pageMargin + this.drawknobTopMargin + (this.drawknobColumnWidth / 2));
        for(let i = 1; i < this._rowCount + 1; i++) {
            const y = this.rows[i - 1] + (this.drawknobColumnWidth / 2) + (this.spacerColumnWidth / 2);
            this.rows.push(y);
        }

        // Bottom row for auxilliary stops (row 24)
        this.rows.push(564);
        
        // Column coordinates should be calculated in sub-class cunstructors
        // Division labels and dividers should be specified in sub-class constructors
    }

    labelColumn(col: number): number {

        // Helper function for calculating the center between columns for 
        // division labels. Returns the center position after the stop column
        // passed into the function.

        const x = this.columns[col] + ((this.drawknobColumnWidth + this.spacerColumnWidth) / 2);
        return x;
    }

    labelRow(): number {

        // Helper function for calculating the Y position of top-row division labels
        return this.rows[0] - 20;
    }

    dividerColumn(col: number): number {

        // Helper function for calculating the center between columns for 
        // division dividers. Returns the center position after the stop column
        // passed into the function.

        const x = this.columns[col] + ((this.divisionSpacerWidth + this.drawknobColumnWidth) / 2);
        return x;
    }
}

