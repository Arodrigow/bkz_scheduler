import { Dispatch, ReactNode, SetStateAction } from "react"

export type ButtonProps = {
    type: string,
    text: string,
    url?: string
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
    type: 'subject' | 'teacher',
    list: string[],
    setList: (new_state: string[]) => void,
}