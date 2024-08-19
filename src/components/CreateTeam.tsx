import {useAtom} from "jotai";
import {AllStudents} from "../type/Students.tsx";
import {TeamMemberInput} from "./TeamMemberInput.tsx";
import {NameProp} from "../type/NameProp.tsx";
import {Team} from "../type/Team.tsx";
import {readWriteTeamIdState} from "../state/TeamId.tsx";
import {isDisabledState} from "../state/ButtonDisabled.tsx";
import {TeamMembers} from "../state/Members.tsx";
import {TeamsState} from "../state/Teams.tsx";
import {useRef} from "react";




export function CreateTeam() {
    const [useStudents] = useAtom(AllStudents);
    const [members,setMembers] = useAtom(TeamMembers);
    const [teamId,setTeamId] =  useAtom(readWriteTeamIdState);
    const [allTeams,setAllTeams] =  useAtom(TeamsState);
    const [isDisabled,setDisabled] =  useAtom(isDisabledState);
    const teamNameRef = useRef<HTMLInputElement>(null);
    const isButtonDisabled = isDisabled.trim() === '';
    let nameInputValue:string = '';

    return (
        <>
            <label className="input input-bordered flex items-center gap-2">
                <input ref={teamNameRef} onChange={(e)=>{nameInputValue=e.target.value;setDisabled(e.target.value)}} type="text"  className="grow" placeholder="team name"/>
            </label>

            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1">Team members</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    {useStudents.students.map((name) => {
                        const nameInp: NameProp<string> = {model: name}
                        return (
                            <TeamMemberInput key={nameInp.model} model={nameInp.model}/>
                        )
                    })}
                </ul>
            </div>
            <div>
                <button  disabled={isButtonDisabled} onClick={()=>{
                    let teamIdTemp:number= teamId.id;
                    const newTeam:Team = addNewTeam(nameInputValue,members.teams,teamIdTemp);
                    setAllTeams({teams:[...allTeams.teams,newTeam]});
                    setTeamId(teamIdTemp+=1);
                    setMembers({teams:[]});
                 nameInputValue='';
                       teamNameRef.current.value=nameInputValue;
                       setDisabled(nameInputValue);
                    console.log(allTeams);
                }} className="btn btn-active">Create Team</button>
            </div>
        </>
    )
}



function addNewTeam(teamName:string,teamMembers:string[],teamId:number):Team{
    return {id:teamId,name:teamName,members:teamMembers,answers:[],locations:[]}
}




