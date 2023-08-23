import dotenv from 'dotenv-safe'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.CHATGPT_KEY
});

const openai = new OpenAIApi(configuration);

try {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": "Você é um assistente útil"
            },
            {
                "role": "user",
                "content": "Liste o nome de 5 times de futebol do Brasil"
            }
        ],
        temperature: 1,
        max_tokens: 256,
    });
    console.log(response.data.choices[0].message.content)
} catch (error) {
    console.log(error)
}

