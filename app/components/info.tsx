import { InfoSetProps, subjectObject, teacherObject } from "@/types/types";
import arrayCompare from "../utils/arrayCompare";

export default function Info(props: InfoSetProps) {

    const handleSelect = () => {
        const value = (document.getElementById(props.Entry.type + "Select") as HTMLInputElement).value;

        if (props.Entry.type === 'subject' && props.setEntryTargetSubject) {
            const index = (props.Entry.list as subjectObject[]).findIndex((i) => i.title === value);
            console.log(index);
            console.log(props.Entry.list)
            props.setEntryTargetSubject(props.Entry.list[index] as subjectObject)
            console.log((props.EntryTarget as subjectObject).title)
        }

        if (props.Entry.type === 'teacher' && props.setEntryTargetTeacher) {
            const index = (props.Entry.list as teacherObject[]).findIndex((i) => i.name === value);
            props.setEntryTargetTeacher(props.Entry.list[index] as teacherObject)
            console.log((props.EntryTarget as teacherObject).name)
        }
    }

    return (
        <form className="flex flex-col justify-center items-center gap-4 w-full sm:w-1/2">
            <div className="flex flex-row gap-4 flex-wrap justify-center items-center">
                <label htmlFor={props.Entry.type + 'Input'}>{props.Entry.type === 'subject' ? 'Matéria: ' : 'Professor: '}</label>
                <select onChange={handleSelect} name={props.Entry.type + "Select"} id={props.Entry.type + "Select"} className="outline outline-school rounded-xl p-2">
                    {
                        props.Entry.type === 'subject' ?
                            arrayCompare(props.Entry.list, []) ? 'Nenhum cadastro' : props.Entry.list.map((unit, i) =>
                                <option value={unit.title} key={props.Entry.type + "Options" + i}>{unit.title}</option>
                            ) :
                            arrayCompare(props.Entry.list, []) ? 'Nenhum cadastro' : props.Entry.list.map((unit, i) =>
                                <option value={unit.name} key={props.Entry.type + "Options" + i}>{unit.name}</option>
                            )
                    }
                </select>

                <span>
                    {
                        <span>{(props.EntryTarget as subjectObject).title}</span>
                    }
                </span>
            </div>
        </form>
    )
}