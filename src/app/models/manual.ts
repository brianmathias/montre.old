import { Piston } from './piston';

export interface Manual {

    name: string;
    orderNumber: number;
    orderNumeral: string;
    pistons: Piston[];
    
}