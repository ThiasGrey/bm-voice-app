import { OpenAI } from '@openai/gpt-3';

const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function convertTextToSpeech(prompt) {
 const response = await openai.complete({
    engine: 'text-davinci-002',
    prompt: prompt,
    max_tokens: 60,
    n: 1,
    loglevel: 'info',
    logprobs: 10,
    temperature: 0.5,
 });

 return response.choices[0].text;
}