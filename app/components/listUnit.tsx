import { ListUnitProps, subjectObject, teacherObject } from "@/types/types";
import ButtonComponent from "./button";

export default function ListUnit(props: ListUnitProps){
    const onClickHandler = () =>{
        if(props.type === 'subject'){            
            const index = (props.list as subjectObject[]).findIndex((value) => value.title === props.text);
            let aux:Array<subjectObject> = Array.from(props.list as Array<subjectObject>);
            aux.splice(index,1);
            props.setList(aux);
        }

        if(props.type === 'teacher'){            
            const index = (props.list as teacherObject[]).findIndex((value) => value.name === props.text);
            let aux:Array<teacherObject> = Array.from(props.list as Array<teacherObject>);
            aux.splice(index,1);
            props.setList(aux);
        }
    }

    return (
        <div className="flex justify-between gap-4">
            <span className="text-lg font-bold text-school">{props.text}</span>
            <ButtonComponent text="Apagar" type="delete" onClickHandler={onClickHandler}></ButtonComponent>
        </div>
    )
}