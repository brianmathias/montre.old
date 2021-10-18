
import { OrganLayout } from './organ-layout';
import { OrganConfig } from './organ-config';
import { TallySheet } from './tally-sheet';
import { Manual } from "./manual";
import { Stop } from "./stop";
import { Piston } from './piston';

/**
 * An object representing an organ.
 */
export interface Organ {

    /** The venue in which the organ is housed. */
    venue: string;

    /** The number of memory levels contained in each user folder. */
    memoryLevels: number;

    /** The builder of the organ. */
    builder: string;

    /** An array of the organ's manuals. */
    manuals: Manual[];

    /** An array of the organ's stops. */
    stops: Stop[];

}

/** An object that contains the Organ, OrganLayout, and OrganConfig objects for a single organ. */
export interface OrganObject {
    organ: Organ,
    layout: OrganLayout,
    config?: OrganConfig,
    tallySheet: TallySheet,
    memoryLevels: number[],
    manuals: Manual[],
    pistons: Piston[]
}