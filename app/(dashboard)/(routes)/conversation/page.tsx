'use client';
import Heading from '@/components/Heading';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useChat } from 'ai/react';
import { MessageSquare } from 'lucide-react';
import OpenAI from 'openai';
import { FC, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { formSchema } from './constants';
interface ConversationPageProps {
  children: ReactNode;
}

type RequestMessage =
  OpenAI.Chat.Completions.CreateChatCompletionRequestMessage;

const ConversationPage: FC<ConversationPageProps> = (props) => {
  // const [messages, setMessages] = useState<RequestMessage[]>([]);

  const { messages, input, handleInputChange, handleSubmit, append } = useChat({
    api: '/api/conversation'
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ''
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await append({ role: 'user', content: values.prompt });

    console.log(res);

    // const newMessage = [...messages, userMessage];

    // const res = await axios.post(
    //   '/api/conversation',
    //   {
    //     messages: newMessage
    //   },
    //   {
    //     onDownloadProgress({ event }) {
    //       const xhr = event.target;
    //       const { responseText } = xhr;
    //       let chunk = responseText;
    //       try {
    //         /* 序列化返回的内容 */
    //         const data = JSON.parse(chunk);
    //         /* chatGPT 返回的内容 */
    //         console.log('分段内容', data.text);
    //       } catch (e) {
    //         console.log(e);
    //       }
    //     }
    //   }
    // );

    // setMessages((preState) => [
    //   ...preState,
    //   userMessage,
    //   { role: 'system', content: res.data }
    // ]);
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      ></Heading>
      <div className="px-4 lg:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid w-full grid-cols-12 gap-2 rounded-lg border p-4 px-3 focus-within:shadow-sm md:px-6"
          >
            <FormField
              name="prompt"
              render={({ field }) => {
                return (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        {...field}
                        disabled={isLoading}
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        placeholder="How do I calculate the radius of a circle?"
                      ></Input>
                    </FormControl>
                  </FormItem>
                );
              }}
            ></FormField>
            <Button
              type="submit"
              className="col-span-12 w-full lg:col-span-2"
              disabled={isLoading}
            >
              Generate
            </Button>
          </form>
        </Form>
      </div>
      <div>
        {messages.map((message) => {
          return (
            <div key={message.content}>
              {message.role === 'user' ? 'User: ' : 'AI: '}
              {message.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConversationPage;
