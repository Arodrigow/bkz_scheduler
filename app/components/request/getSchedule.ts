import { chatGPT } from "@/app/utils/chatGPT";
import { gptReturn, teacherObject } from "@/types/types";

export const getSchedule = async (data: teacherObject[], setSchedule: ((newState: gptReturn) => void)) => {
    const res = await chatGPT(data);
    setSchedule(res);
}