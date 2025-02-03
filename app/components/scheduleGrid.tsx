import { gptReturn } from "@/types/types";
import { getWeekDayObjName } from "../utils/getWeekDay";

export default function ScheduleGrid(schedule: gptReturn) {
    const week: Array<'Segunda-feira' | 'Terça-feira' | 'Quarta-feira' | 'Quinta-feira' | 'Sexta-feira'> = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira',];
    const hour: Array<1 | 2 | 3 | 4 | 5 | 6> = [1, 2, 3, 4, 5, 6]

    return (
        <div className="flex flex-col justify-center items-stretch w-full">
            <div className="grid grid-cols-6 gap-2">
                <span className="flex justify-center items-center col-span-1" key={'Scheduleinfospan'}></span>
                {
                    week.map((day, i) =>
                        <span className="flex justify-center items-center col-span-1" key={'ScheduleGridHeader' + day}>{day}</span>
                    )
                }
                {
                    hour.map((h, i) => {
                        return (
                            <div key={'ScheduleRow' + h} className="col-span-6 grid grid-cols-subgrid gap-3 ">
                                <span className="col-span-1 flex justify-center items-center border-b-2 border-school" key={'ScheduleGridTag' + h}>{h}º</span>
                                {
                                    week.map((day, ii) =>
                                        <span className="flex justify-center items-center col-span-1 border-b-2 border-r-2 border-school" key={'ScheduleGridBody' + h + day + ii}>
                                            <ul className="flex flex-col flex-wrap">
                                                {
                                                    schedule[getWeekDayObjName(day)]?.[h].map(
                                                        (subject, i) => {
                                                            return (
                                                                <div key={'ScheduleGrid' + day + 'List' + h + i}>
                                                                    <li key={'ScheduleGrid' + day + 'List' + h + i} className="text-sm">{subject}</li>
                                                                    <br />
                                                                </div>

                                                            )
                                                        }
                                                    )
                                                }
                                            </ul>
                                        </span>
                                    )
                                }
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}