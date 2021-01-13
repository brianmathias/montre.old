import { DrawknobState } from '../models/drawknob-state';
import { Organs } from '../models/organs';

export interface Crescendo {

    num: number,
    organ: Organs,
    stages: CrescendoStage[]
}

export interface CrescendoStage {
    stage: number,
    drawknobs: DrawknobState[]
}