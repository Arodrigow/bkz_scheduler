import { EntryProps } from "@/types/types";
import AddEntry from "./addEntry";
import ListComponent from "./list";

export default function AddWraper(props:EntryProps){

    return(
        <div className="flex flex-row w-full">
            <AddEntry type={props.type} list={props.list} setList={props.setList}></AddEntry>
            <ListComponent list={props.list}></ListComponent>
        </div>
    )
}