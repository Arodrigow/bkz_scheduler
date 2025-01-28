import { teacherObject } from "@/types/types";
import OpenAI from "openai";
import { gptSystemRole, gptUserRole } from "./gptConsts";

export const chatGPT = async (data: teacherObject[]) => {
    const token = process.env.NEXT_PUBLIC_GITHUB_PRIVATE_KEY;
    console.log(process.env.NEXT_PUBLIC_GITHUB_PRIVATE_KEY);
    const endpoint = "https://models.inference.ai.azure.com";
    const modelName = "gpt-4o";

    const client = new OpenAI({ baseURL: endpoint, apiKey: token, dangerouslyAllowBrowser: true });

    const response = await client.chat.completions.create({
        messages: [
            { role: "system", content: gptSystemRole },
            { role: "user", content: gptUserRole+data }
        ],
        temperature: 1.0,
        top_p: 1.0,
        max_tokens: 1000,
        model: modelName
    });

    console.log(response.choices[0].message.content);


}