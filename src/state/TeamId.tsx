import {atom} from "jotai";


export interface TeamId{
    id:number
}

export const TeamIdState = atom<TeamId>({id:1});
export const readWriteTeamIdState = atom(
    (get) => get(TeamIdState), // Getter function to access the current state
    (get, set, newValue: number) => {
        const currentTeamId = get(TeamIdState); // Get the current value of TeamIdState
        set(TeamIdState, { id: currentTeamId.id + newValue }); // Update the id property
        // You can set as many atoms as you want at the same time
    }
);