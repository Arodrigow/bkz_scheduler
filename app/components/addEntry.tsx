'use client'
import { EntryProps } from "@/types/types";
import ButtonComponent from "./button";

export default function AddEntry(props: EntryProps) {
    const handleForm = () => {
        let aux: string[] = Array.from(props.list)
        aux.push('novo');
        props.setList(aux);
    }

    const onClickHandler = () => {
        props.setList([])
    }

    return (
        <form action={handleForm} className="flex flex-col justify-center items-center gap-4 w-full sm:w-1/2">
            <div className="flex flex-row gap-4 flex-wrap">
                <label htmlFor="subject">Matéria: </label>
                <input type="text" name="subject" id="subject" className="outline rounded-xl" />
            </div>
            <div className="flex flex-row">
                <ButtonComponent type="add" text="Cadastrar"></ButtonComponent>
                <ButtonComponent type="clear" text="Apagar Tudo" onClickHandler={onClickHandler}></ButtonComponent>
            </div>
        </form>
    )
}