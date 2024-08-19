
import {atom} from "jotai";

 export interface Members {
    teams: string[]
}


export const TeamMembers = atom<Members>({teams:[]});

