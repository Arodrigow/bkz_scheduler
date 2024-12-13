'use client'
import { useState } from "react"
import AccordionComponent from "./accordion"
import AddEntry from "./addEntry"

export default function RegisterSection() {
    const [subjectList, setSubjectList] = useState(['']);
    const [teacherList, setTeacherList] = useState(['']);

    return (
        <>
            <AccordionComponent id="Accordion1" step="1" title="Cadastrar as matérias" stepGuide={step1}>
                <AddEntry type="subject" list={subjectList} setList={setSubjectList}></AddEntry>
            </AccordionComponent>
            <AccordionComponent id="Accordion2" step="2" title="Cadastrar os professores" stepGuide={step2}>
                <AddEntry type="teacher" list={teacherList} setList={setTeacherList}></AddEntry>
            </AccordionComponent>
            {/* <AccordionComponent id="Accordion3" step="3" title="Relacionar professores e matéras" stepGuide={step3}></AccordionComponent> */}
        </>

    )
}

const step1 = "Cadastre todas as matérias que serão ofertadas no ano letivo e precisam ser organizadas.";
const step2 = "Após o cadastro de todas as matérias, é hora de cadastrar todos os professores.";
const step3 = "Agora faremos o relacionamento entre os professores e as matérias, adicionando a carga horária de cada um.";