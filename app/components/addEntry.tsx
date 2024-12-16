'use client'
import { EntryProps } from "@/types/types";
import ButtonComponent from "./button";

export default function AddEntry(props: EntryProps) {
    const handleForm = () => {

        let aux:string[] = Array.from(props.list)
        aux.push('novo');
        props.setList(aux);
    }

    return (
        <form action={handleForm}>
            <label htmlFor="subject">Matéria: </label>
            <input type="text" name="subject" id="subject" />
            <ButtonComponent type="add" text="Cadastrar"></ButtonComponent>
        </form>
    )
}