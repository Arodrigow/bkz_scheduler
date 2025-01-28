import { chatGPT } from "@/app/utils/chatGPT";
import { teacherObject } from "@/types/types";

export const getSchedule = (data: teacherObject[]) => {
    chatGPT(data);
}