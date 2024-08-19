import {Team} from "../type/Team.tsx";
import {atom} from "jotai";

export interface Teams{
    teams:Team[];
}

export const TeamsState = atom<Teams>({teams:[]})