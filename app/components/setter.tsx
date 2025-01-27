import { InfoSetProps } from "@/types/types";
import MainTitleComponent from "./mainTitle";
import ButtonComponent from "./button";
import WorkLoad from "./workload";
import Musts from "./musts";


export default function Setter(props: InfoSetProps) {

    const handler = (type: string) => {
        const workLoad = document.getElementById('workLoadInfo')
        const subjectInfo = document.getElementById('subjectInfo')
        const musts = document.getElementById('mustsInfo')
        const restrictions = document.getElementById('restrictionsInfo')

        if (workLoad && musts && restrictions && subjectInfo) {
            if (type === 'workLoad') {
                workLoad.hidden = false;
                musts.hidden = true;
                restrictions.hidden = true;
            }
            if (type === 'subjectInfo') {
                subjectInfo.hidden = false;
                musts.hidden = true;
                restrictions.hidden = true;
            }
            if (type === 'mustsInfo') {
                workLoad.hidden = true;
                musts.hidden = false;
                restrictions.hidden = true
            }
            if (type === 'restrictions') {
                workLoad.hidden = true;
                musts.hidden = true;
                restrictions.hidden = false
            }
        }

    }


    return (
        <div className="w-full sm:w-3/5 sm:border-l-2 border-school flex flex-col gap-8">
            <MainTitleComponent text="Cadastrar informações"></MainTitleComponent>
            <div className="w-full flex flex-row gap-4 flex-wrap justify-around items-center">
                {
                    props.Entry.type === 'subject' ?
                        <ButtonComponent text="Carga horária" type="choose" onClickHandler={() => handler('workLoad')}></ButtonComponent>
                        :
                        <ButtonComponent text="Disciplinas" type="choose" onClickHandler={() => handler('subjectInfo')}></ButtonComponent>
                }
                <ButtonComponent text="Obrigatoriedades" type="choose" onClickHandler={() => handler('mustsInfo')}></ButtonComponent>
                <ButtonComponent text="Restrições" type="choose" onClickHandler={() => handler('restrictions')}></ButtonComponent>
            </div>
            <div>

                <WorkLoad Entry={props.Entry} EntryTarget={props.EntryTarget} id="workLoadInfo" setEntryTargetSubject={props.setEntryTargetSubject}></WorkLoad>
                <div id="subjectInfo" hidden>subjectInfo</div>
                <Musts Entry={props.Entry} EntryTarget={props.EntryTarget} id="mustsInfo" setEntryTargetSubject={props.setEntryTargetSubject} setEntryTargetTeacher={props.setEntryTargetTeacher}></Musts>
                <div id="restrictionsInfo" hidden>Restrictions</div>

            </div>
        </div>
    )
}