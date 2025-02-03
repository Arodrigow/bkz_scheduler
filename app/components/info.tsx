import { InfoSetProps, subjectObject, teacherObject } from "@/types/types";
import arrayCompare from "../utils/arrayCompare";
import { sortArray } from "../utils/sortArray";

export default function Info(props: InfoSetProps) {
    // console.log(((props.Entry.type === 'subject' && (props.EntryTarget as subjectObject).title === undefined) || (props.Entry.type === 'teacher' && (props.EntryTarget as teacherObject).name === undefined)))
    console.log(" Teste" + (props.Entry.type === 'subject' && (props.EntryTarget as subjectObject).title === ''));

    const handleSelect = () => {
        const value = (document.getElementById(props.Entry.type + "Select") as HTMLInputElement).value;

        if (props.Entry.type === 'subject' && props.setEntryTargetSubject) {
            const index = (props.Entry.list as subjectObject[]).findIndex((i) => i.title === value);
            props.setEntryTargetSubject(props.Entry.list[index] as subjectObject)
        }

        if (props.Entry.type === 'teacher' && props.setEntryTargetTeacher) {
            const index = (props.Entry.list as teacherObject[]).findIndex((i) => i.name === value);
            props.setEntryTargetTeacher(props.Entry.list[index] as teacherObject)
        }
    }

    return (
        <form className="flex flex-col justify-center items-center gap-4 w-full sm:w-2/5">
            <div className="flex flex-row gap-4 flex-wrap justify-center items-center">
                <label htmlFor={props.Entry.type + 'Input'}>{props.Entry.type === 'subject' ? 'Matéria: ' : 'Professor: '}</label>
                <select onChange={handleSelect} value={((props.Entry.type === 'subject' && (props.EntryTarget as subjectObject).title === '') || (props.Entry.type === 'teacher' && (props.EntryTarget as teacherObject).name === '')) ? "selecionar" : props.Entry.type === 'subject' ? (props.EntryTarget as subjectObject).title : (props.EntryTarget as teacherObject).name} name={props.Entry.type + "Select"} id={props.Entry.type + "Select"} className="outline outline-school rounded-xl p-2">
                    {
                        ((props.Entry.type === 'subject' && (props.EntryTarget as subjectObject).title === '') || (props.Entry.type === 'teacher' && (props.EntryTarget as teacherObject).name === '')) ?
                            <option value="selecionar" disabled>Selecionar {props.Entry.type === 'subject' ? 'matéria' : 'professor'}</option>
                            :
                            null
                    }
                    {
                        props.Entry.type === 'subject' ?
                            arrayCompare(props.Entry.list, []) ? <option disabled>Nenhum cadastro</option> : props.Entry.list.map((unit, i) =>
                                <option value={unit.title} key={props.Entry.type + "Options" + i}>{unit.title}</option>
                            ) :
                            arrayCompare(props.Entry.list, []) ? <option disabled>Nenhum cadastro</option> : props.Entry.list.map((unit, i) =>
                                <option value={unit.name} key={props.Entry.type + "Options" + i}>{unit.name}</option>
                            )
                    }
                </select>
            </div>
            <div className="flex flex-col gap-4 w-full justify-center items-start">

                <div className="flex flex-row gap-2">
                    <span className="text-school font-bold">
                        {
                            props.Entry.type === 'subject' ? 'Disciplina: '
                                : 'Professor: '
                        }
                    </span>
                    <span>
                        {
                            props.Entry.type === 'subject' ? (props.EntryTarget as subjectObject).title
                                : (props.EntryTarget as teacherObject).name
                        }
                    </span>
                </div>
                <div className="flex flex-row gap-2">
                    <span className="text-school font-bold">
                        {
                            props.Entry.type === 'subject' ? 'Carga horária: '
                                : 'Disciplinas: '
                        }
                    </span>
                    <span>
                        {
                            props.Entry.type === 'subject' ? (props.EntryTarget as subjectObject).workLoad
                                : arrayCompare((props.EntryTarget as teacherObject).subjects, []) ? 'Nenhum cadastro' :
                                    <ul>
                                        {

                                            (props.EntryTarget as teacherObject)
                                                .subjects
                                                .sort((a, b) => sortArray(a.subject.title, b.subject.title, 'string'))
                                                .map((subs, i) =>
                                                    subs.classes.map((classe, ii) =>
                                                        <li key={"TeacherSubjects" + ii}>{subs.subject.title + " " + classe}</li>
                                                    )

                                                )
                                        }
                                    </ul>
                        }
                    </span>
                </div>
                {
                    props.Entry.type === 'subject' ?
                        <div>
                            <span className="text-school font-bold">Turmas: </span>
                            {
                                arrayCompare((props.EntryTarget as subjectObject).classes, []) ? 'Nenhuma Turma' :
                                    <ul>
                                        {
                                            (props.EntryTarget as subjectObject)
                                                .classes
                                                .sort((a, b) => sortArray(a, b, 'string'))
                                                .map((cl, i) =>
                                                    <li key={props.Entry.type + "Classes" + i}>{"Turma: " + cl}</li>
                                                )
                                        }
                                    </ul>
                            }
                        </div> : null
                }
                <div>
                    <span className="text-school font-bold">Horários obrigatórios: </span>
                    {
                        arrayCompare(props.EntryTarget.musts, []) ? 'Nenhuma obrigatoriedade' :
                            <ul>
                                {
                                    props.EntryTarget
                                        .musts
                                        .sort((a, b) => sortArray(a.hour.toString(), b.hour.toString(), 'number'))
                                        .sort((a, b) => sortArray(a.dayOfWeek, b.dayOfWeek, 'week'))
                                        .map((must, i) =>
                                            <li key={props.Entry.type + "Musts" + i}>{must.dayOfWeek + " - " + must.hour + "º horário"}</li>
                                        )
                                }
                            </ul>
                    }
                </div>
                <div>
                    <span className="text-school font-bold">Restrição de horários: </span>
                    {
                        arrayCompare(props.EntryTarget.restrictions, []) ? 'Nenhuma restrição' :
                            <ul>
                                {
                                    props.EntryTarget
                                        .restrictions
                                        .sort((a, b) => sortArray(a.hour.toString(), b.hour.toString(), 'number'))
                                        .sort((a, b) => sortArray(a.dayOfWeek, b.dayOfWeek, 'week'))
                                        .map((restriction, i) =>
                                            <li key={props.Entry.type + "Musts" + i}>{restriction.dayOfWeek + " - " + restriction.hour + "º horário"}</li>
                                        )
                                }
                            </ul>
                    }
                </div>
            </div>
        </form>
    )
}