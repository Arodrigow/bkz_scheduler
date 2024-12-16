'use client'
import { EntryProps } from "@/types/types";
import ButtonComponent from "./button";

export default function AddEntry(props: EntryProps) {
    const handleForm = () => {
        let aux:string[] = Array.from(props.list)
        aux.push('novo');
        props.setList(aux);
    }

    const onClickHandler = () => {
        props.setList([])
    }

    return (
        <form action={handleForm}>
            <label htmlFor="subject">Matéria: </label>
            <input type="text" name="subject" id="subject" />
            <ButtonComponent type="add" text="Cadastrar"></ButtonComponent>
            <ButtonComponent type="clear" text="Apagar Tudo" onClickHandler={onClickHandler}></ButtonComponent>
        </form>
    )
}