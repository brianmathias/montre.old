import { OrganLayout } from './organ-layout';

export class TabernacleOrganLayout extends OrganLayout {

    constructor(){

        // Calculate column coordinates
        super();

        //Pedal
        this.columns.push(this.drawknobMargin + (this.drawknobColumnWidth / 2) + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[0] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[1] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[2] + this.spacerColumnWidth + this.drawknobColumnWidth);

        // Swell
        this.columns.push(this.columns[3] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[4] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[5] + this.spacerColumnWidth + this.drawknobColumnWidth);
        
        // Bombarde/Anthiphonal
        this.columns.push(this.columns[6] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[7] + this.spacerColumnWidth + this.drawknobColumnWidth);

        // Pedal Couplers/Percussion
        this.columns.push(this.columns[8] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[9] + this.spacerColumnWidth + this.drawknobColumnWidth);

        // Manual Couplers
        this.columns.push(this.columns[10] + (this.centerSpacerWidth * 2) + (this.drawknobColumnWidth));
        this.columns.push(this.columns[11] + this.spacerColumnWidth + this.drawknobColumnWidth);

        // Solo
        this.columns.push(this.columns[12] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[13] + this.spacerColumnWidth + this.drawknobColumnWidth);

        // Great
        this.columns.push(this.columns[14] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[15] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[16] + this.spacerColumnWidth + this.drawknobColumnWidth);
        
        // Choir/Positiv
        this.columns.push(this.columns[17] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[18] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[19] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[20] + this.spacerColumnWidth + this.drawknobColumnWidth); 
        

        // Division dividers

        // Left stop jamb
        this.dividers.push({x: this.dividerColumn(3), y1: this.rows[0], y2: this.rows[21]});
        this.dividers.push({x: this.dividerColumn(6), y1: this.rows[0], y2: this.rows[21]});
        this.dividers.push({x: this.dividerColumn(8), y1: this.rows[0], y2: this.rows[20]});
        
        // Center
        this.dividers.push({x: 396, y1: this.rows[0] - 20, y2: this.rows[21]});
        
        // Right stop jamb
        this.dividers.push({x: this.dividerColumn(12), y1: this.rows[0], y2: this.rows[18]});
        this.dividers.push({x: this.dividerColumn(14), y1: this.rows[0], y2: this.rows[18]});
        this.dividers.push({x: this.dividerColumn(17), y1: this.rows[0], y2: this.rows[21]});
        
        // Division labels
        this.labels.push({label: "PEDAL", x: this.labelColumn(1), y: this.labelRow()});
        this.labels.push({label: "SWELL", x: this.columns[5], y: this.labelRow()});
        this.labels.push({label: "BOMBARDE", x: this.labelColumn(7), y: this.labelRow()});
        this.labels.push({label: "PED. COUP.", x: this.labelColumn(9), y: this.labelRow()});
        this.labels.push({label: "ANT.", x: this.columns[8], y: this.rows[8] + 2});
        this.labels.push({label: "PERC.", x: this.columns[9], y: this.rows[9] + 2});
        this.labels.push({label: "MAN. COUP.", x: this.labelColumn(11), y: this.labelRow()});
        this.labels.push({label: "SOLO", x: this.labelColumn(13), y: this.labelRow()});
        this.labels.push({label: "GREAT", x: this.columns[16], y: this.labelRow()});
        this.labels.push({label: "CHOIR", x: this.labelColumn(19), y: this.labelRow()});
        this.labels.push({label: "POS.", x: this.columns[19], y: this.rows[14] + 2});
    }
}