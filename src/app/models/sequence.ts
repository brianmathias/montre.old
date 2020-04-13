import { SequenceStep, PrintStep } from "./sequence-step";

export class Sequence {

    composition: {
        title: string,
        composer: string,
        catalogNo: string // Choir catalog number
    }
    
    version: string;
    organ: string
    steps: SequenceStep[]

    constructor() {
        this.composition = {
            title: "",
            composer: "",
            catalogNo: ""
        };
        this.version = "";
        this.organ = "";
        this.steps = [];
    }
}

export interface PrintSequence extends Sequence {
    steps: PrintStep[];
}