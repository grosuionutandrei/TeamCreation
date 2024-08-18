
import {atom} from "jotai";

 export interface Members {
    teams: string[]
}


export const TeamsState = atom<Members>({teams:[]});

