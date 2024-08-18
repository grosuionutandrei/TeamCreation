import {useAtom} from "jotai";
import {AllStudents} from "../type/Students.tsx";
import {TeamMemberInput} from "./TeamMemberInput.tsx";
import {NameProp} from "../type/NameProp.tsx";



export function CreateTeam() {
    const [useStudents] = useAtom(AllStudents);
    return (
        <
        >


            {/*id:number,*/}
            {/*name:string,*/}
            {/*members:[],*/}
            {/*answers:string,*/}
            {/*locations:Location[]*/}
            {/*}*/}

            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="team name"/>
            </label>

                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1">Team members</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        {useStudents.students.map((name)=>{
                            console.log(name);
                            const nameInp:NameProp<string> = {model:name}
                            console.log(nameInp.model)
                            return (
                                <TeamMemberInput model={nameInp.model}/>
                            )
                        })}
                    </ul>
                </div>




            {/*<label className="input input-bordered flex items-center gap-2">*/}
            {/*    <input type="text" className="grow" placeholder="Search"/>*/}
            {/*    <kbd className="kbd kbd-sm">⌘</kbd>*/}
            {/*    <kbd className="kbd kbd-sm">K</kbd>*/}
            {/*</label>*/}
        </>
    )
}

