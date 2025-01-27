import { SetterProps } from "@/types/types";

export default function WeekGrid({ Entry, EntryTarget, setEntryTargetSubject, setEntryTargetTeacher, id }: SetterProps) {
    const week = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira',];
    const hour = [1, 2, 3, 4, 5, 6]

    return (
        <div className="grid grid-cols-6 gap-2" key={Entry.type+'grid'}>
            <span className="flex justify-center items-center col-span-1" key={Entry.type+'infospan'}></span>
            {
                week.map((day, i) =>
                    <span className="flex justify-center items-center col-span-1" key={Entry.type + 'GridHeader' + day}>{day}</span>
                )
            }
            {
                hour.map((h, i) => {
                    return (
                        <div key={Entry.type + 'Row' + h} className="col-span-6 grid grid-cols-subgrid gap-3">
                            <span className="col-span-1 flex justify-center items-center " key={Entry.type + 'GridTag' + h}>{h}º</span>
                            {week.map((day, ii) =>
                                <button className="col-span-1 border border-black flex justify-center items-center rounded-md" key={Entry.type + 'GridBody'+h +day+ii}></button>
                            )}
                        </div>
                    )
                }
                )
            }
        </div>
    )
}
