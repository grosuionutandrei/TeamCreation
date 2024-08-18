export interface TeamName{
    id:number,
    name:string
}


export interface  Team extends TeamName{
    members:[],
    answers:string,
    locations:Location[]
}