import { EntryListProps } from "@/types/types";

export default function ListComponent(props:EntryListProps) {
    return (
        <div className="w-full sm:w-1/2">
            {props.list.map((unit, i) =>
                <p key={"unit" + i}>{unit}</p>
            )}
        </div>
    )
}