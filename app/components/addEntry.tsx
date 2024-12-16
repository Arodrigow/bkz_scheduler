'use client'
import { EntryProps } from "@/types/types";
import ButtonComponent from "./button";

export default function AddEntry(props: EntryProps) {
    const handleForm = () => {
        const input = (document.getElementById(props.type + 'Input') as HTMLInputElement).value
        if (input) {
            let aux: string[] = Array.from(props.list)
            aux.push(input);
            props.setList(aux);
        }
    }

    const onClickHandler = () => {
        props.setList([])
    }

    return (
        <form action={handleForm} className="flex flex-col justify-center items-center gap-4 w-full sm:w-1/2">
            <div className="flex flex-row gap-4 flex-wrap justify-center items-center">
                <label htmlFor={props.type + 'Input'}>Matéria: </label>
                <input type="text" name={props.type + 'Input'} id={props.type + "Input"} className="outline outline-school rounded-xl p-2" />
            </div>
            <div className="flex flex-row">
                <ButtonComponent type="add" text="Cadastrar"></ButtonComponent>
                <ButtonComponent type="clear" text="Apagar Tudo" onClickHandler={onClickHandler}></ButtonComponent>
            </div>
        </form>
    )
}