import { OrganLayout } from './organ-layout';

/**
 * Subclassed OrganLayout for the Conference Center organ.
 * 
 * @extends OrganLayout
 */
export class ConferenceCenterOrganLayout extends OrganLayout {

    /** The Y position of the expression drawknobs. */
    expTopMargin: number;

    /** Array containing the X position of the columns for the expression drawknobs. */
    expColumns: number[];

    constructor(){

        super();
        
        
        // Calculate row coordinates
        this.drawknobTopMargin = 196;
        
        this.rows.push(this.pageMargin + this.drawknobTopMargin + (this.drawknobColumnWidth / 2));
        for(let i = 1; i < this._rowCount + 1; i++) {
            const y = this.rows[i - 1] + (this.drawknobColumnWidth / 2) + (this.spacerColumnWidth / 2);
            this.rows.push(y);
        }

        this.expTopMargin = 184;
        
        // Column coordinates should be calculated in sub-class constructors
        // Division labels and dividers should be specified in sub-class constructors
       
        //Pedal
        this.columns.push(this.drawknobMargin + (this.drawknobColumnWidth / 2));
        this.columns.push(this.columns[0] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[1] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[2] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[3] + this.spacerColumnWidth + this.drawknobColumnWidth);

        // Swell
        this.columns.push(this.columns[4] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[5] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[6] + this.spacerColumnWidth + this.drawknobColumnWidth);
        
        // Solo
        this.columns.push(this.columns[7] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[8] + this.spacerColumnWidth + this.drawknobColumnWidth);

        // Pedal Couplers/Special Couplers
        this.columns.push(this.columns[9] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[10] + this.spacerColumnWidth + this.drawknobColumnWidth);

        // Manual Couplers/MIDI Couplers
        this.columns.push(this.columns[11] + (this.centerSpacerWidth * 2) + (this.drawknobColumnWidth));
        this.columns.push(this.columns[12] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[13] + this.spacerColumnWidth + this.drawknobColumnWidth);
        
        // Orchestral
        this.columns.push(this.columns[14] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[15] + this.spacerColumnWidth + this.drawknobColumnWidth);

        // Great
        this.columns.push(this.columns[16] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[17] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[18] + this.spacerColumnWidth + this.drawknobColumnWidth);
        
        // Choir
        this.columns.push(this.columns[19] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[20] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[21] + this.spacerColumnWidth + this.drawknobColumnWidth);

        // Expression Drawknob Columns
        this.expColumns.push(196, 216, 236, 256);
        this.expColumns.push(296, 316, 336);
        this.expColumns.push(376, 396, 416, 436, 456);
        this.expColumns.push(496, 516, 536, 556);
        this.expColumns.push(596);


        // Division dividers

        // Left stop jamb
        this.dividers.push({x: this.dividerColumn(4), y1: this.rows[1], y2: this.rows[19]});
        this.dividers.push({x: this.dividerColumn(7), y1: this.rows[0], y2: this.rows[21]});
        this.dividers.push({x: this.dividerColumn(9), y1: this.rows[0], y2: this.rows[22]});
        
        // Center
        this.dividers.push({x: 396, y1: this.rows[0] - 30, y2: this.rows[22] + 30});
        
        // Right stop jamb
        this.dividers.push({x: this.dividerColumn(14), y1: this.rows[0], y2: this.rows[22]});
        this.dividers.push({x: this.dividerColumn(16), y1: this.rows[0], y2: this.rows[21]});
        this.dividers.push({x: this.dividerColumn(19), y1: this.rows[0], y2: this.rows[20]});
        
        // Division labels
        this.labels.push({label: "PEDAL", x: this.columns[2], y: this.labelRow()});
        this.labels.push({label: "SWELL", x: this.columns[6], y: this.labelRow()});
        this.labels.push({label: "SOLO", x: this.labelColumn(8), y: this.labelRow()});
        this.labels.push({label: "PED. COUP.", x: this.labelColumn(10), y: this.labelRow()});
        this.labels.push({label: "SP. COUP.", x: this.labelColumn(10), y: this.rows[10] + 10});
        this.labels.push({label: "MAN. COUP.", x: this.columns[13], y: this.labelRow()});
        this.labels.push({label: "MIDI COUP.", x: this.columns[13], y: this.rows[16] + 10});
        this.labels.push({label: "ORCHESTRAL", x: this.labelColumn(15), y: this.labelRow()});
        this.labels.push({label: "GREAT", x: this.columns[18], y: this.labelRow()});
        this.labels.push({label: "CHOIR", x: this.columns[21], y: this.labelRow()});
    }

    
}