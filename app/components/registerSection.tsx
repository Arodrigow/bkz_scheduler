'use client'

import AccordionComponent from "./accordion"
import AddEntry from "./addEntry"
import usePersistState from "../utils/usePersistState";
import AddWraper from "./addWraper";

export default function RegisterSection() {
    const [subjectList, setSubjectList] = usePersistState<string[]>([], 'subjectList');
    const [teacherList, setTeacherList] = usePersistState<string[]>([], 'teacherList');

    return (
        <div className="flex flex-col gap-4 w-full ">
            <AccordionComponent id="Accordion1" step="1" title="Cadastrar as matérias" stepGuide={step1}>
                <AddWraper list={subjectList} setList={setSubjectList} type="subject" title="Lista de matérias"></AddWraper>
            </AccordionComponent>
            <AccordionComponent id="Accordion2" step="2" title="Cadastrar os professores" stepGuide={step2}>
                <AddWraper list={teacherList} setList={setTeacherList} type="teacher" title="Lista de professores"></AddWraper>
            </AccordionComponent>
            {/* <AccordionComponent id="Accordion3" step="3" title="Relacionar professores e matéras" stepGuide={step3}></AccordionComponent> */}
        </div>

    )
}

const step1 = "Cadastre todas as matérias que serão ofertadas no ano letivo e precisam ser organizadas.";
const step2 = "Após o cadastro de todas as matérias, é hora de cadastrar todos os professores.";
const step3 = "Agora faremos o relacionamento entre os professores e as matérias, adicionando a carga horária de cada um.";