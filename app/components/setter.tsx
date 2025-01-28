import { InfoSetProps } from "@/types/types";
import MainTitleComponent from "./mainTitle";
import ButtonComponent from "./button";
import WorkLoad from "./workload";
import Musts from "./musts";
import Restrictions from "./restrictions";
import TeacherSubjects from "./teacherSubjects";


export default function Setter(props: InfoSetProps) {
    const mustId = props.Entry.type === 'subject' ? Ids.subjectMustsInfoId : Ids.teacherMustsInfoId
    const restrictionId = props.Entry.type === 'subject' ? Ids.subjectRestrictionsInfoId : Ids.teacherRestrictionsInfoId

    const handler = (type: string) => {
        const workLoad = document.getElementById(Ids.subjectWorkLoadId)
        const subjectInfo = document.getElementById(Ids.teacherSubjectId)
        const musts = document.getElementById(mustId)
        const restrictions = document.getElementById(restrictionId)

        if (workLoad && musts && restrictions && subjectInfo) {
            if (type === Ids.subjectWorkLoadId) {
                workLoad.hidden = false;
                musts.hidden = true;
                restrictions.hidden = true;
            }
            if (type === Ids.teacherSubjectId) {
                subjectInfo.hidden = false;
                musts.hidden = true;
                restrictions.hidden = true;
            }
            if (type === mustId) {
                workLoad.hidden = true;
                musts.hidden = false;
                restrictions.hidden = true;
                subjectInfo.hidden = true;
            }
            if (type === restrictionId) {
                workLoad.hidden = true;
                musts.hidden = true;
                restrictions.hidden = false;
                subjectInfo.hidden = true;
            }
        }

    }


    return (
        <div className="w-full sm:w-3/5 sm:border-l-2 border-school flex flex-col gap-8">
            <MainTitleComponent text="Cadastrar informações"></MainTitleComponent>
            <div className="w-full flex flex-row gap-4 flex-wrap justify-around items-center">
                {
                    props.Entry.type === 'subject' ?
                        <ButtonComponent text="Carga horária" type="choose" onClickHandler={() => handler(Ids.subjectWorkLoadId)}></ButtonComponent>
                        :
                        <ButtonComponent text="Matérias" type="choose" onClickHandler={() => handler(Ids.teacherSubjectId)}></ButtonComponent>
                }
                <ButtonComponent text="Obrigatoriedades" type="choose" onClickHandler={() => handler(mustId)}></ButtonComponent>
                <ButtonComponent text="Restrições" type="choose" onClickHandler={() => handler(restrictionId)}></ButtonComponent>
            </div>
            <div>
                {
                    props.Entry.type === 'subject' ?
                        <WorkLoad
                            Entry={props.Entry}
                            EntryTarget={props.EntryTarget}
                            id={Ids.subjectWorkLoadId}
                            setEntryTargetSubject={props.setEntryTargetSubject}
                        ></WorkLoad>
                        :
                        <TeacherSubjects
                            Entry={props.Entry}
                            SubjectEntry={props.SubjectEntry}
                            EntryTarget={props.EntryTarget}
                            id={Ids.teacherSubjectId}
                            setEntryTargetTeacher={props.setEntryTargetTeacher}
                        ></TeacherSubjects>
                }

                <Musts
                    Entry={props.Entry}
                    EntryTarget={props.EntryTarget}
                    id={mustId}
                    setEntryTargetSubject={props.setEntryTargetSubject}
                    setEntryTargetTeacher={props.setEntryTargetTeacher}
                ></Musts>

                <Restrictions
                    Entry={props.Entry}
                    EntryTarget={props.EntryTarget}
                    id={restrictionId}
                    setEntryTargetSubject={props.setEntryTargetSubject}
                    setEntryTargetTeacher={props.setEntryTargetTeacher}
                ></Restrictions>
            </div>
        </div >
    )
}

const Ids = {
    subjectWorkLoadId: 'workLoadInfo',
    teacherSubjectId: 'subjectInfo',
    subjectMustsInfoId: 'subjectMustsInfoId',
    teacherMustsInfoId: 'teachertMustsInfoId',
    subjectRestrictionsInfoId: 'subjectRestrictionsInfoId',
    teacherRestrictionsInfoId: 'teacherRestrictionsInfoId',
}