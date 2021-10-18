export interface TallySheet {
    columns: TallySheetColumn[];
}

export interface TallySheetColumn {
    divisions: TallySheetDivision[];
}

export interface TallySheetDivision {
    name: string;
    pistons: TallySheetPiston[];
}

export interface TallySheetPiston {
    pistonID: number;
}