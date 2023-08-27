import { auth } from '@clerk/nextjs';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://api.chatanywhere.cn/v1'
  // httpAgent: new HttpsProxyAgent('http://127.0.0.1:7890')
});

const instructionMessage: OpenAI.Chat.Completions.CreateChatCompletionRequestMessage =
  {
    role: 'system',
    content: '你必须回答我能够在react-markdown中正常渲染的格式化数据'
  };

export async function POST(req: Request, res: Response) {
  try {
    const { userId } = auth();
    const { messages } = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse('OpenAI API Key not configured.', {
        status: 500
      });
    }

    if (!messages) {
      return new NextResponse('Messages are required!', { status: 400 });
    }

    // console.log(res., '----------');

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [instructionMessage, ...messages],
      stream: true,
      // max_tokens: 500,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 1
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
    const res = new StreamingTextResponse(stream);
    // Respond with the stream
    return res;
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
