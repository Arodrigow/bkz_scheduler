import { EntryProps } from "@/types/types";
import AddEntry from "./addEntry";
import ListComponent from "./list";

export default function AddWraper(props:EntryProps){
    return(
        <div className="flex flex-col sm:flex-row w-full">
            <AddEntry Entry={props.Entry}></AddEntry>
            <ListComponent Entry={props.Entry}></ListComponent>
        </div>
    )
}