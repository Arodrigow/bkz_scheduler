import { ReactNode } from "react"

export type ButtonProps = {
    type: string,
    text: string,
    url?: string,
    onClickHandler?: () => void
}

export type MainTitleProps = {
    text: string
}

export type AccordionProps = {
    id: string,
    step: string,
    title: string,
    stepGuide: string,
    children: ReactNode
}

export type ParagraphProps = {
    content: string
}

export type EntryProps = {
    Entry: EntryPropsTeacher | EntryPropsSubject,
}

export type EntryPropsTeacher = {
    type: 'teacher',
    list: teacherObject[],
    setList: SetList,
    title?: string
}
export type EntryPropsSubject = {
    type: 'subject',
    list: subjectObject[],
    setList: SetList,
    title?: string
}

export type EntryListProps = {
    EntryList: EntryListPropsSubject | EntryListPropsTeacher
}

export type EntryListPropsSubject = {
    type: 'subject',
    title?: string
    list: subjectObject[],
    setList: SetList
}

export type EntryListPropsTeacher = {
    type: 'teacher',
    title?: string
    list: teacherObject[],
    setList: SetList,
}

export type ListUnitProps = {
    type: 'teacher' | 'subject',
    text: string,
    list: subjectObject[] | teacherObject[],
    setList: SetList
}
export type SetList = <T extends subjectObject[] | teacherObject[]>(new_state: T) => void;

export type restrictionObject = {
    dayOfWeek: 'Segunda-feira' | 'Terça-feira' | 'Quarta-feira' | 'Quinta-feira' | 'Sexta-feira',
    hour: 1 | 2 | 3 | 4 | 5 | 6
}

export type subjectObject = {
    title: string,
    workLoad: number,
    classes: Array<string>;
    restrictions: Array<restrictionObject>,
    musts: Array<restrictionObject>
}

export type teacherObject = {
    name: string,
    subjects: Array<subjectObject>,
    restrictions: Array<restrictionObject>
    musts: Array<restrictionObject>
}

export type SetterProps = {
    id: string,    
    gridType?: 'must' | 'restriction',
    Entry: EntryPropsTeacher | EntryPropsSubject,
    SubjectEntry?: EntryPropsSubject,
    EntryTarget: subjectObject | teacherObject,
    setEntryTargetSubject?: ((newState: subjectObject) => void),
    setEntryTargetTeacher?: ((newState: teacherObject) => void),
}


export type InfoSetProps = {
    Entry: EntryPropsTeacher | EntryPropsSubject,
    SubjectEntry?: EntryPropsSubject,
    EntryTarget: subjectObject | teacherObject,
    setEntryTargetSubject?: ((newState: subjectObject) => void),
    setEntryTargetTeacher?: ((newState: teacherObject) => void),
}

export type gptReturn = {
    Segunda?:{
        1:Array<string>,
        2:Array<string>,
        3:Array<string>,
        4:Array<string>,
        5:Array<string>,
        6:Array<string>
    };
    Terca?: {
        1:Array<string>,
        2:Array<string>,
        3:Array<string>,
        4:Array<string>,
        5:Array<string>,
        6:Array<string>
    };
    Quarta?: {
        1:Array<string>,
        2:Array<string>,
        3:Array<string>,
        4:Array<string>,
        5:Array<string>,
        6:Array<string>
    };
    Quinta?: {
        1:Array<string>,
        2:Array<string>,
        3:Array<string>,
        4:Array<string>,
        5:Array<string>,
        6:Array<string>
    };
    Sexta?: {
        1:Array<string>,
        2:Array<string>,
        3:Array<string>,
        4:Array<string>,
        5:Array<string>,
        6:Array<string>
    };
    Other?: string;
}