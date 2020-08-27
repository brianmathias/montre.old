import { Piston } from './piston';

/**
 * Object that represents a single manual with the following properties:
 * 
 * - name: string - The name of the division with which the manual is associated.
 * - orderNumber: number - Integer reflecting the order of the manuals, zero-indexed from
 * top to bottom
 * - orderNumeral: string - The roman numeral of the manual (i.e., Great = "II").
 * - pistons: Piston[] - An array of Piston objects containing the division's pistons.
 */
export interface Manual {

    name: string;
    orderNumber: number;
    orderNumeral: string;
    pistons: Piston[];
    
}