import { InfoSetProps } from "@/types/types";
import Info from "./info";
import Setter from "./setter";

export default function InfoSetterWrapper(props: InfoSetProps) {
    return (
        <div className="flex flex-col sm:flex-row w-full">
            {
                props.Entry.type === 'subject' ?
                    <>
                        <Info Entry={props.Entry} EntryTarget={props.EntryTarget} setEntryTargetSubject={props.setEntryTargetSubject}></Info>
                        <Setter Entry={props.Entry} EntryTarget={props.EntryTarget} setEntryTargetSubject={props.setEntryTargetSubject}></Setter>
                    </>
                    : <>
                        <Info Entry={props.Entry} EntryTarget={props.EntryTarget} setEntryTargetTeacher={props.setEntryTargetTeacher}></Info>
                        <Setter Entry={props.Entry} SubjectEntry={props.SubjectEntry} EntryTarget={props.EntryTarget} setEntryTargetTeacher={props.setEntryTargetTeacher}></Setter>
                    </>
            }
        </div>
    )
}