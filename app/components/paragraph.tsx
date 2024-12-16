import { ParagraphProps } from "@/types/types";

export default function ParagraphComponent(props:ParagraphProps){
    return (
        <p className="mb-8">{props.content}</p>
    )
}