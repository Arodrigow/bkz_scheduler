'use client'

import AccordionComponent from "./accordion"
import usePersistState from "../utils/usePersistState";
import AddWraper from "./addWraper";
import RelationWraper from "./relationWraper";
import { EntryPropsSubject, EntryPropsTeacher, SetList, subjectObject, teacherObject } from "@/types/types";

export default function RegisterSection() {
    const [subjectList, setSubjectList] = usePersistState<subjectObject[]>([], 'subjectList');
    const [teacherList, setTeacherList] = usePersistState<teacherObject[]>([], 'teacherList');

    const subjectEntry: EntryPropsSubject = {
        list: subjectList,
        setList: setSubjectList as SetList,
        type: "subject",
        title: "Lista de matérias"
    };

    const teacherEntry: EntryPropsTeacher = {
        list: teacherList,
        setList: setTeacherList as SetList,
        type: "teacher",
        title: "Lista de professores"
    };

    return (
        <div className="flex flex-col gap-4 w-full ">
            <AccordionComponent id="Accordion1" step="1" title="Cadastrar as matérias" stepGuide={step1}>
                <AddWraper Entry={subjectEntry}></AddWraper>
            </AccordionComponent>
            <AccordionComponent id="Accordion2" step="2" title="Cadastrar os professores" stepGuide={step2}>
                <AddWraper Entry={teacherEntry}></AddWraper>
            </AccordionComponent>
            {/* <AccordionComponent id="Accordion3" step="3" title="Relacionar professores e matéras" stepGuide={step3}>
                <RelationWraper subjectList={subjectList} teacherList={teacherList}></RelationWraper>
            </AccordionComponent> */}
        </div>

    )
}

const step1 = "Cadastre todas as matérias que serão ofertadas no ano letivo e precisam ser organizadas.";
const step2 = "Após o cadastro de todas as matérias, é hora de cadastrar todos os professores.";
const step3 = "Agora faremos o relacionamento entre os professores e as matérias, adicionando a carga horária de cada um.";