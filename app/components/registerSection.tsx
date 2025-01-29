'use client'

import AccordionComponent from "./accordion"
import usePersistState from "../utils/usePersistState";
import AddWraper from "./addWraper";
import { EntryPropsSubject, EntryPropsTeacher, gptReturn, SetList, subjectObject, teacherObject } from "@/types/types";
import InfoSetterWrapper from "./infoSetterWrapper";
import ButtonComponent from "./button";
import { getSchedule } from "./request/getSchedule";

export default function RegisterSection() {
    const [subjectList, setSubjectList] = usePersistState<subjectObject[]>([], 'subjectList');
    const [teacherList, setTeacherList] = usePersistState<teacherObject[]>([], 'teacherList');

    const [schedule, setSchedule] = usePersistState<gptReturn>({}, 'sbSchedule');
    
    const subjectEmpty: subjectObject = {
        musts: [],
        restrictions: [],
        title:'',
        workLoad:0
    }

    const teacherEmpty: teacherObject = {
        name:'',
        subjects: [],
        musts: [],
        restrictions: []
    }

    const [subject, setSubject] = usePersistState<subjectObject>(subjectEmpty, 'subject');
    const [teacher, setTeacher] = usePersistState<teacherObject>(teacherEmpty, 'teacher');
    
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
        <section className="flex flex-col gap-4 w-full ">
            <AccordionComponent id="Accordion1" step="1" title="Cadastrar as matérias" stepGuide={step1}>
                <AddWraper Entry={subjectEntry}></AddWraper>
            </AccordionComponent>
            <AccordionComponent id="Accordion2" step="2" title="Informações das matérias" stepGuide={step2}>
                <InfoSetterWrapper Entry={subjectEntry} EntryTarget={subject} setEntryTargetSubject={setSubject}></InfoSetterWrapper>
            </AccordionComponent>
            <AccordionComponent id="Accordion3" step="3" title="Cadastrar os professores" stepGuide={step3}>
                <AddWraper Entry={teacherEntry}></AddWraper>
            </AccordionComponent>
            <AccordionComponent id="Accordion4" step="4" title="Informações dos professores" stepGuide={step4}>
                <InfoSetterWrapper Entry={teacherEntry} SubjectEntry={subjectEntry} EntryTarget={teacher} setEntryTargetTeacher={setTeacher}></InfoSetterWrapper>
            </AccordionComponent>
            <ButtonComponent text="GERAR HORÁRIO" type="choose" onClickHandler={() => getSchedule(teacherList, setSchedule)}></ButtonComponent>
        </section>

    )
}

const step1 = "Cadastre todas as matérias que serão ofertadas no ano letivo e precisam ser organizadas.";
const step2 = "Com as matérias cadastradas, agora deve-se completar o cadastro com as informações das matérias, como carga horária e restrições de horário.";
const step3 = "Após o cadastro de todas as matérias, é hora de cadastrar todos os professores.";
const step4 = "Com os professores cadastradas, agora deve-se completar o cadastro com as informações dos professores, como as materias de cada um, restrições de horário e obrigatoriedades.";
