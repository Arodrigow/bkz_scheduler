import { SetterProps, subjectObject, teacherObject } from "@/types/types";

export default function WeekGrid({ Entry, EntryTarget, setEntryTargetSubject, setEntryTargetTeacher, id, gridType }: SetterProps) {
    const week: Array<'Segunda-feira' | 'Terça-feira' | 'Quarta-feira' | 'Quinta-feira' | 'Sexta-feira'> = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira',];
    const hour: Array<1 | 2 | 3 | 4 | 5 | 6> = [1, 2, 3, 4, 5, 6]

    const onClickHandler = (id: string, day: 'Segunda-feira' | 'Terça-feira' | 'Quarta-feira' | 'Quinta-feira' | 'Sexta-feira', hour: 1 | 2 | 3 | 4 | 5 | 6) => {
        let el = (document.getElementById(id) as HTMLElement)
        if (setEntryTargetSubject) {
            const index = (Entry.list as subjectObject[]).findIndex((value) => value.title === (EntryTarget as subjectObject).title)
            let aux: Array<subjectObject> = Array.from(Entry.list as Array<subjectObject>);

            if (gridType === 'must') {

                const auxIndex = aux[index].musts.findIndex((value) => value.dayOfWeek === day && value.hour === hour)

                auxIndex === -1 ? aux[index].musts.push({ dayOfWeek: day, hour }) : aux[index].musts.splice(auxIndex, 1)

                setEntryTargetSubject({
                    musts: aux[index].musts,
                    title: (EntryTarget as subjectObject).title,
                    restrictions: EntryTarget.restrictions,
                    workLoad: (EntryTarget as subjectObject).workLoad
                })

                Entry.setList(aux);
                console.log(el.style.backgroundColor)
                el.style.backgroundColor === 'rgb(98, 191, 17)' || el.style.backgroundColor === '' ? el.style.backgroundColor = '#ffffff' : el.style.backgroundColor = '#62bf11'
            }
            if (gridType === 'restriction') {

                const auxIndex = aux[index].musts.findIndex((value) => value.dayOfWeek === day && value.hour === hour)

                auxIndex === -1 ? aux[index].musts.push({ dayOfWeek: day, hour }) : aux[index].musts.splice(auxIndex, 1);

                setEntryTargetSubject({
                    musts: EntryTarget.musts,
                    title: (EntryTarget as subjectObject).title,
                    restrictions: aux[index].restrictions,
                    workLoad: (EntryTarget as subjectObject).workLoad
                })

                Entry.setList(aux);

                el.style.backgroundColor === 'rgb(237, 45, 45)' || el.style.backgroundColor === '' ? el.style.backgroundColor = '#ffffff' : el.style.backgroundColor = '#ed2d2d'
            }
        }

        if (setEntryTargetTeacher) {
            const index = (Entry.list as teacherObject[]).findIndex((value) => value.name === (EntryTarget as teacherObject).name)
            let aux: Array<teacherObject> = Array.from(Entry.list as Array<teacherObject>);

            if (gridType === 'must') {

                const auxIndex = aux[index].musts.findIndex((value) => value.dayOfWeek === day && value.hour === hour)

                auxIndex === -1 ? aux[index].musts.push({ dayOfWeek: day, hour }) : aux[index].musts.splice(auxIndex, 1);

                setEntryTargetTeacher({
                    musts: aux[index].musts,
                    name: (EntryTarget as teacherObject).name,
                    restrictions: EntryTarget.restrictions,
                    subjects: (EntryTarget as teacherObject).subjects
                })

                Entry.setList(aux);

                el.style.backgroundColor === 'rgb(98, 191, 17)' || el.style.backgroundColor === '' ? el.style.backgroundColor = '#ffffff' : el.style.backgroundColor = '#62bf11'
            }
            if (gridType === 'restriction') {

                const auxIndex = aux[index].restrictions.findIndex((value) => value.dayOfWeek === day && value.hour === hour);

                auxIndex === -1 ? aux[index].restrictions.push({ dayOfWeek: day, hour }) : aux[index].restrictions.splice(auxIndex, 1);

                setEntryTargetTeacher({
                    musts: EntryTarget.musts,
                    name: (EntryTarget as teacherObject).name,
                    restrictions: aux[index].restrictions,
                    subjects: (EntryTarget as teacherObject).subjects
                })

                Entry.setList(aux);

                el.style.backgroundColor === 'rgb(237, 45, 45)' || el.style.backgroundColor === '' ? el.style.backgroundColor = '#ffffff' : el.style.backgroundColor = '#ed2d2d'
            }
        }


    }

    const isMarked = (day: 'Segunda-feira' | 'Terça-feira' | 'Quarta-feira' | 'Quinta-feira' | 'Sexta-feira', hour: 1 | 2 | 3 | 4 | 5 | 6): boolean => {
        if (gridType === 'must') {
            const index = EntryTarget.musts.findIndex((value) => value.dayOfWeek === day && value.hour === hour)
            if (index === -1)
                return false;
            else
                return true;
        }

        if (gridType === 'restriction') {
            const index = EntryTarget.restrictions.findIndex((value) => value.dayOfWeek === day && value.hour === hour)
            if (index === -1)
                return false;
            else
                return true;
        }

        return false;
    }

    return (
        <div className="grid grid-cols-6 gap-2" key={Entry.type + 'grid'}>
            <span className="flex justify-center items-center col-span-1" key={Entry.type + 'infospan'}></span>
            {
                week.map((day, i) =>
                    <span className="flex justify-center items-center col-span-1" key={Entry.type + 'GridHeader' + day}>{day}</span>
                )
            }
            {
                hour.map((h, i) => {
                    return (
                        <div key={Entry.type + 'Row' + h} className="col-span-6 grid grid-cols-subgrid gap-3">
                            <span className="col-span-1 flex justify-center items-center h-12" key={Entry.type + 'GridTag' + h}>{h}º</span>
                            {week.map((day, ii) =>
                                <button
                                    className={
                                        `col-span-1 border border-school shadow-md flex justify-center items-center rounded-md
                                        ${isMarked(day, h) && gridType === 'must' ? 'bg-mustMarkerd' : gridType === 'restriction'? 'bg-restrictionMarked' : 'bg-white'}
                                        `
                                    }
                                    key={Entry.type + 'GridBody' + h + day + ii}
                                    id={Entry.type + 'GridBody' + h + day + ii}
                                    onClick={() => { onClickHandler(Entry.type + 'GridBody' + h + day + ii, day, h) }}
                                ></button>
                            )}
                        </div>
                    )
                }
                )
            }
        </div>
    )
} 