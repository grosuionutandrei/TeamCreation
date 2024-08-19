import {NameProp} from "../type/NameProp.tsx";
import {useAtom} from "jotai/index";
import {TeamMembers} from "../state/Members.tsx";


export function TeamMemberInput({model}: NameProp<string>) {
    const [members, setMembers] = useAtom(TeamMembers);

    function addTeamMember(value: string) {
        setMembers({teams: [...members.teams,value]});

    }

    const removeTeamMember = (value: string) => {
        const removedMembers = members.teams.filter((item:string) => item !== value);
        setMembers({teams: [...removedMembers]});
    }
    return (
        <label className="input input-bordered flex items-center gap-2">
            {model}
            <input onChange={(e) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                e.target.checked ? addTeamMember(e.target.value) : removeTeamMember(e.target.value);
            }} type="checkbox" value={model} className="grow"/>
        </label>
    )
}

