import { Manual } from "./manual";
import { Stop } from "./stop";

export interface Organ {

    venue: string;
    memoryLevels: number;
    builder: string;
    manuals: Manual[];
    stops: Stop[];

}