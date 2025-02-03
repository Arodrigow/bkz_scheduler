import { SetterProps, subjectObject, teacherObject, teachersClass } from "@/types/types";
import arrayCompare from "../utils/arrayCompare";
import ButtonComponent from "./button";
import MainTitleComponent from "./mainTitle";

export default function TeacherSubjectSetter({ Entry, EntryTarget, setEntryTargetTeacher, SubjectEntry }: SetterProps) {
    const selectId = Entry.type + 'TeacherSubjectSetterSelect';

    const handleSubmit = () => {
        const value = (document.getElementById(selectId) as HTMLInputElement).value.split(' ');

        if (!SubjectEntry) return;
        if (!setEntryTargetTeacher) return;
        if (value[1] === undefined) {
            window.alert("Você precisa cadastrar uma turma nesta matéria.")
            return
        };

        const index = (Entry.list as teacherObject[]).findIndex((value) => value.name === (EntryTarget as teacherObject).name);
        const subjectIndex = SubjectEntry.list.findIndex((subject) => subject.title === value[0]);

        let aux: Array<teacherObject> = Array.from(Entry.list as Array<teacherObject>);

        let classAux = -1;
        const auxIndex = aux[index].subjects.findIndex((subject, i) => {
            if (subject.subject.title === value[0]) {
                classAux = aux[index].subjects[i].classes.findIndex((cl) => cl === value[1]);
                return true
            }
            return false
        }
        )

        if (classAux === -1 && auxIndex === -1) {
            let subjectAux: teachersClass;
            let classAux: Array<string> = [];
            classAux.push(value[1]);
            subjectAux = ({ classes: classAux, subject: SubjectEntry.list[subjectIndex] });
            aux[index].subjects.push(subjectAux);
        }

        if (classAux === -1 && auxIndex !== -1) {
            aux[index].subjects[auxIndex].classes.push(value[1])
        }

        setEntryTargetTeacher({
            musts: EntryTarget.musts,
            name: (EntryTarget as teacherObject).name,
            restrictions: EntryTarget.restrictions,
            subjects: aux[index].subjects
        })

        Entry.setList(aux);

    }

    const onClickHandler = (subjectName: string, cl: string) => {
        if (!setEntryTargetTeacher) return;
        const index = (Entry.list as teacherObject[]).findIndex((value) => value.name === (EntryTarget as teacherObject).name);

        let aux: Array<teacherObject> = Array.from(Entry.list as Array<teacherObject>);
        const auxIndex = aux[index].subjects.findIndex((subject) => subject.subject.title === subjectName);

        if (arrayCompare(aux[index].subjects[auxIndex].classes, [undefined]) || aux[index].subjects[auxIndex].classes.length <= 1) {
            aux[index].subjects.splice(auxIndex, 1);
        } else if (aux[index].subjects[auxIndex].classes.length > 1) {
            const classeIndex = aux[index].subjects[auxIndex].classes.findIndex((classe, i) => classe === cl)
            aux[index].subjects[auxIndex].classes.splice(classeIndex, 1)
        }


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
                                        <option value={unit.title + " " + cl} key={SubjectEntry.type + `teacherSubjectOptions` + unit.title + cl + ii}>{unit.title + " " + cl}</option>
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
                            subject.classes.map((classe, ii) =>
                                <div key={Entry.type + "TeacherSubjectsList" + subject.subject + classe} className="flex justify-between gap-4">
                                    <span>{subject.subject.title + " " + classe}</span>
                                    <ButtonComponent text="Apagar" type="delete" onClickHandler={() => onClickHandler(subject.subject.title, classe)}></ButtonComponent>
                                </div>
                            )
                        )
                }
            </div>
        </div>
    )
}