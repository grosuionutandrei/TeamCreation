export interface TeamName{
    id:number,
    name:string
}


export interface  Team extends TeamName{
    members:string[],
    answers:string[],
    locations:Location[]
}