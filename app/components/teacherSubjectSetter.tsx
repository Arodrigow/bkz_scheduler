import { SetterProps, teacherObject } from "@/types/types";
import arrayCompare from "../utils/arrayCompare";
import ButtonComponent from "./button";
import MainTitleComponent from "./mainTitle";

export default function TeacherSubjectSetter({ Entry, EntryTarget, setEntryTargetTeacher, SubjectEntry }: SetterProps) {
    const selectId = Entry.type + 'TeacherSubjectSetterSelect';

    const handleSubmit = () => {
        const value = (document.getElementById(selectId) as HTMLInputElement).value.split(' ');

        if (!SubjectEntry) return;
        if (!setEntryTargetTeacher) return;

        const index = (Entry.list as teacherObject[]).findIndex((value) => value.name === (EntryTarget as teacherObject).name);
        const subjectIndex = SubjectEntry.list.findIndex((subject) => subject.title === value[0] && subject.classes.findIndex((cl) => cl === value[1]) !== -1);

        let aux: Array<teacherObject> = Array.from(Entry.list as Array<teacherObject>);

        const auxIndex = aux[index].subjects.findIndex((subject) => subject.title === value[0] && subject.classes.findIndex((cl) => cl === value[1]) !== -1);
        
        auxIndex === -1 ? aux[index].subjects.push(SubjectEntry.list[subjectIndex]) : window.alert("Matéria já cadastrada neste professor.");

        setEntryTargetTeacher({
            musts: EntryTarget.musts,
            name: (EntryTarget as teacherObject).name,
            restrictions: EntryTarget.restrictions,
            subjects: aux[index].subjects
        })

        Entry.setList(aux);

    }

    const onClickHandler = (subjectName: string) => {
        if (!setEntryTargetTeacher) return;
        const index = (Entry.list as teacherObject[]).findIndex((value) => value.name === (EntryTarget as teacherObject).name);

        let aux: Array<teacherObject> = Array.from(Entry.list as Array<teacherObject>);

        const auxIndex = aux[index].subjects.findIndex((subject) => subject.title === subjectName);
        aux[index].subjects.splice(auxIndex, 1);

        setEntryTargetTeacher({
            musts: EntryTarget.musts,
            name: (EntryTarget as teacherObject).name,
            restrictions: EntryTarget.restrictions,
            subjects: aux[index].subjects
        })

        Entry.setList(aux);
    }
    return (
        <div className="flex flex-col gap-4">
            <MainTitleComponent text="Disciplinas"></MainTitleComponent>
            <form action={handleSubmit} className="flex flex-row gap-4 flex-wrap justify-center items-center">
                <label htmlFor={selectId}>Matéria: </label>
                <select name={selectId} id={selectId} className="outline outline-school rounded-xl p-2">
                    {
                        SubjectEntry ?
                            arrayCompare(SubjectEntry.list, []) ? 'Nenhum cadastro' : SubjectEntry.list.map((unit, i) =>
                                arrayCompare(SubjectEntry.list[i].classes, []) ?
                                    <option value={unit.title} key={SubjectEntry.type + "teacherSubjectOptionsClassEmpty" + i}>{unit.title}</option> :
                                    SubjectEntry.list[i].classes.map((cl, ii) =>
                                        <option value={unit.title + " " + cl} key={SubjectEntry.type + `teacherSubjectOptions`+ unit.title+ cl + ii}>{unit.title + " " + cl}</option>
                                    )
                            ) : <option value={'Nenhum cadastro'}></option>

                    }
                </select>
                <ButtonComponent text="Adicionar" type="add"></ButtonComponent>
            </form>

            <div className="flex flex-col gap-4 justify-center items-center">
                {
                    arrayCompare((EntryTarget as teacherObject).subjects, []) ? 'Nenhuma matéria cadastrada' :
                        (EntryTarget as teacherObject).subjects.map((subject, i) =>
                            <div key={Entry.type + "TeacherSubjectsList" + i} className="flex justify-between gap-4">
                                <span>{subject.title}</span>
                                <ButtonComponent text="Apagar" type="delete" onClickHandler={() => onClickHandler(subject.title)}></ButtonComponent>
                            </div>
                        )
                }
            </div>
        </div>
    )
}