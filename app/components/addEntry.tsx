'use client'
import { EntryProps } from "@/types/types";
import ButtonComponent from "./button";

export default function AddEntry(props: EntryProps) {
    const handleForm = () => {
        console.log('novo');
        props.list.push('novo');
        console.log(props.list)
        props.setList(props.list);
    }

    return (
        <form action={handleForm}>
            <label htmlFor="subject">Matéria: </label>
            <input type="text" name="subject" id="subject" />
            <ButtonComponent type="add" text="Cadastrar"></ButtonComponent>
        </form>
    )
}