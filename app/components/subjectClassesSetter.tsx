import { SetterProps, subjectObject } from "@/types/types";
import MainTitleComponent from "./mainTitle";
import ButtonComponent from "./button";
import arrayCompare from "../utils/arrayCompare";

export default function SubjectClassesSetter({ Entry, EntryTarget, setEntryTargetSubject, id }: SetterProps) {
    const handleSubmit = () => {
        const value = (document.getElementById(id) as HTMLInputElement).value;
        if (!setEntryTargetSubject) return;

        const index = (Entry.list as subjectObject[]).findIndex((value) => value.title === (EntryTarget as subjectObject).title);
        let aux: Array<subjectObject> = Array.from(Entry.list as Array<subjectObject>);

        const auxIndex = aux[index].classes.findIndex((subject) => subject === value);

        auxIndex === -1 ? aux[index].classes.push(value) : window.alert("Turma já cadastrada nesta matéria.");

        setEntryTargetSubject({
            musts: EntryTarget.musts,
            title: (EntryTarget as subjectObject).title,
            restrictions: EntryTarget.restrictions,
            workLoad: (EntryTarget as subjectObject).workLoad,
            classes: aux[index].classes,
        })

        Entry.setList(aux);
    }

    const onClickHandler = (className: string) => {
        if (!setEntryTargetSubject) return;
        const index = (Entry.list as subjectObject[]).findIndex((value) => value.title === (EntryTarget as subjectObject).title);

        let aux: Array<subjectObject> = Array.from(Entry.list as Array<subjectObject>);

        const auxIndex = aux[index].classes.findIndex((subject) => subject === className);
        aux[index].classes.splice(auxIndex, 1);

        setEntryTargetSubject({
            musts: EntryTarget.musts,
            title: (EntryTarget as subjectObject).title,
            restrictions: EntryTarget.restrictions,
            workLoad: (EntryTarget as subjectObject).workLoad,
            classes: aux[index].classes,
        })

        Entry.setList(aux);
    }

    return (

        <div className="flex flex-col gap-4 flex-wrap">
            <MainTitleComponent text="Turmas"></MainTitleComponent>
            <form action={handleSubmit} className="flex flex-row items-center justify-center gap-4 flex-wrap">
                <label htmlFor={id}>Turma: </label>
                <input type="text" name={id} id={id}
                    className="outline outline-school rounded-xl p-2"
                />
                <ButtonComponent text="Cadastrar" type="add"></ButtonComponent>
            </form>
            <div className="flex flex-col gap-4 justify-center items-center">
                {
                    arrayCompare((EntryTarget as subjectObject).classes, []) ? 'Nenhuma turma cadastrada' :
                        (EntryTarget as subjectObject).classes.map((cl, i) =>
                            <div key={Entry.type + "SubjectClassesList" + i} className="flex justify-between gap-4">
                                <span>{cl}</span>
                                <ButtonComponent text="Apagar" type="delete" onClickHandler={() => onClickHandler(cl)}></ButtonComponent>
                            </div>
                        )
                }
            </div>
        </div>
    )
}