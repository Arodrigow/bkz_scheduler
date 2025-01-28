import { SetterProps, subjectObject } from "@/types/types";
import ButtonComponent from "./button";
import MainTitleComponent from "./mainTitle";
import ParagraphComponent from "./paragraph";

export default function WorkLoad(props: SetterProps) {
    const handleSubmit = () => {
        const value = Number((document.getElementById('workloadInput') as HTMLInputElement).value)
        if (props.setEntryTargetSubject) {

            props.setEntryTargetSubject(
                {
                    title: (props.EntryTarget as subjectObject).title,
                    workLoad: value,
                    musts: (props.EntryTarget as subjectObject).musts,
                    restrictions: (props.EntryTarget as subjectObject).restrictions
                }
            )
            const index = (props.Entry.list as subjectObject[]).findIndex((value) => value.title === (props.EntryTarget as subjectObject).title)
            let aux: Array<subjectObject> = Array.from(props.Entry.list as Array<subjectObject>);
            aux[index].workLoad = value
            props.Entry.setList(aux)
        }
    }
    return (
        <div id={props.id} hidden>
             <ParagraphComponent content={explanation}></ParagraphComponent>
            <div className="flex flex-col gap-4 flex-wrap">
                <MainTitleComponent text="Carga horária"></MainTitleComponent>
                <form action={handleSubmit} className="flex flex-row items-center justify-center gap-4 flex-wrap">
                    <label htmlFor="workloadInput">Carga Horária: </label>
                    <input type="text" name="workloadInput" id="workloadInput" defaultValue={(props.EntryTarget as subjectObject).workLoad}
                        className="outline outline-school rounded-xl p-2"
                    />
                    <ButtonComponent text="Cadastrar" type="add"></ButtonComponent>
                </form>
            </div>
        </div >
    )
}

const explanation = "Cadastrar quantidade de horas semanais das disciplinas."