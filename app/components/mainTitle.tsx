import { MainTitleProps } from "@/types/types";

export default function MainTitleComponent(props: MainTitleProps){
    return(
        <h1 className="font-bold text-lg">{props.text}</h1>
    )
}