import {atom} from "jotai";


 export interface Students{
    students:string [];
}


export const AllStudents = atom<Students>({students:['ana','Are','Mere','Pere']});