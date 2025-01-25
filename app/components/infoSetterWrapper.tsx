import { InfoSetProps } from "@/types/types";
import Info from "./info";

export default function InfoSetterWrapper(props: InfoSetProps) {
    return (
        <div className="flex flex-col sm:flex-row w-full">
            {
                props.Entry.type === 'subject' ?
                    <Info Entry={props.Entry} EntryTarget={props.EntryTarget} setEntryTargetSubject={props.setEntryTargetSubject}></Info>
                    :
                    <Info Entry={props.Entry} EntryTarget={props.EntryTarget} setEntryTargetTeacher={props.setEntryTargetTeacher}></Info>
            }
        </div>
    )
}