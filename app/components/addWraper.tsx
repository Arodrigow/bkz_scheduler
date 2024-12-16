import { EntryProps } from "@/types/types";
import AddEntry from "./addEntry";
import ListComponent from "./list";

export default function AddWraper(props:EntryProps){

    return(
        <div className="flex flex-col sm:flex-row w-full">
            <AddEntry type={props.type} list={props.list} setList={props.setList}></AddEntry>
            <ListComponent list={props.list} title={props.title} setList={props.setList}></ListComponent>
        </div>
    )
}