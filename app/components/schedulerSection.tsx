'use client'

import { gptReturn } from "@/types/types";
import usePersistState from "../utils/usePersistState";
import MainTitleComponent from "./mainTitle";
import ScheduleGrid from "./scheduleGrid";

export default function SchedulerSection() {

    const [schedule, setSchedule] = usePersistState<gptReturn>({}, 'sbSchedule');

    return (
        <section className="flex flex-col gap-4 w-full" id="GeneratedSchedule">
            <MainTitleComponent text="Horário"></MainTitleComponent>
            <ScheduleGrid
                Segunda={schedule.Segunda}
                Terca={schedule.Terca}
                Quarta={schedule.Quarta}
                Quinta={schedule.Quinta}
                Sexta={schedule.Sexta}
            ></ScheduleGrid>
        </section>
    )
}