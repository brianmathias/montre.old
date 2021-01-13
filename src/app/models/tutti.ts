import { Organs } from '../models/organs';
import { DrawknobState } from '../models/drawknob-state';

export interface Tutti {
    num: number,
    organ: Organs,
    drawknobs: DrawknobState[]
}