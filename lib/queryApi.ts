import openai from "./chatgpt";

const query = async (prompt:string,chatId:string, model: string)=> {

    const res = await openai.chat.completions.create({
        model,
        messages: [{ role: "system", content: prompt}],
        temperature:0.9,
        top_p:1,
        max_tokens:500,
        frequency_penalty:0,
        presence_penalty:0

    }).then(res => res.choices?.[0]?.message?.content).catch(err=>`ChatGPT unable to find an answer! (Error: ${err.message})`);

    return res;

}

export default query;