import { Stop } from "./stop";

export interface SequenceStop extends Stop {
    
    state: "on" | "off" | "add" | "remove"; 

}