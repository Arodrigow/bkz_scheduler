import { ParagraphProps } from "@/types/types";

export default function ParagraphComponent(props:ParagraphProps){
    return (
        <p>{props.content}</p>
    )
}