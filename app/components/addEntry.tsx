'use client'
import { EntryProps, subjectObject, teacherObject } from "@/types/types";
import ButtonComponent from "./button";

export default function AddEntry(props: EntryProps) {
    const handleForm = () => {
        const input = (document.getElementById(props.Entry.type + 'Input') as HTMLInputElement).value
        if (input && props.Entry.type ==='subject') {
            let aux: subjectObject[] = Array.from(props.Entry.list)
            const subAux: subjectObject = {
                title: input,
                workLoad: 0,
                musts:[],
                restrictions:[]
            }
            aux.push(subAux);
            props.Entry.setList(aux);
        }

        if (input && props.Entry.type ==='teacher') {
            let aux: teacherObject[] = Array.from(props.Entry.list)
            const teacherAux: teacherObject = {
                name: input,
                subjects:[],
                musts:[],
                restrictions:[]
            }
            aux.push(teacherAux);
            props.Entry.setList(aux);
        }
    }

    const onClickHandler = () => {
        props.Entry.setList([])
    }

    return (
        <form action={handleForm} className="flex flex-col justify-center items-center gap-4 w-full sm:w-1/2">
            <div className="flex flex-row gap-4 flex-wrap justify-center items-center">
                <label htmlFor={props.Entry.type + 'Input'}>{props.Entry.type === 'subject' ? 'Matéria: ' : 'Professor: '}</label>
                <input type="text" name={props.Entry.type + 'Input'} id={props.Entry.type + "Input"} className="outline outline-school rounded-xl p-2" />
            </div>
            <div className="flex flex-row">
                <ButtonComponent type="add" text="Cadastrar"></ButtonComponent>
                <ButtonComponent type="clear" text="Apagar Tudo" onClickHandler={onClickHandler}></ButtonComponent>
            </div>
        </form>
    )
}