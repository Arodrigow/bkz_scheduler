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
    list: subjectObject[] ,
    setList: SetList
}

export type EntryListPropsTeacher= {
    type: 'teacher',
    title?: string
    list: teacherObject[] ,
    setList: SetList,
}

export type ListUnitProps = {
    type: 'teacher' | 'subject',
    text: string,
    list: subjectObject[] | teacherObject[],
    setList: SetList    
}
export type SetList = <T extends subjectObject[] | teacherObject[]>(new_state: T) => void;


export type needsObject = {
    dayOfWeek: 1 | 2 | 3 | 4 | 5,
    hour: 1 | 2 | 3 | 4 | 5 | 6
}

export type restrictionObject = {
    dayOfWeek: 1 | 2 | 3 | 4 | 5,
    hour: 1 | 2 | 3 | 4 | 5 | 6
}

export type subjectObject = {
    title: string,
    workLoad: number,
    restrictions: Array<restrictionObject>,
    musts: Array<restrictionObject>
}

export type teacherObject = {
    name: string,
    subjects: Array<subjectObject>,
    restrictions: Array<restrictionObject>
    musts: Array<restrictionObject>
}