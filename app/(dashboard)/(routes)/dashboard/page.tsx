'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  Video
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';

interface DashboardPageProps {
  children: ReactNode;
}

const tools = [
  {
    label: 'Conversation',
    href: '/conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10'
  },
  {
    label: 'Music Generation',
    href: '/music',
    icon: Music,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10'
  },
  {
    label: 'Image Generation',
    href: '/image',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10'
  },
  {
    label: 'Video Generation',
    href: '/video',
    icon: Video,
    color: 'text-orange-700',
    bgColor: 'bg-orange-700/10'
  },
  {
    label: 'Code Generation',
    href: '/code',
    icon: Code,
    color: 'text-green-700',
    bgColor: 'bg-green-700/10'
  }
];

const DashboardPage: FC<DashboardPageProps> = (props) => {
  const router = useRouter();
  return (
    <div className="">
      <div className="mb-8 space-y-4 text-center">
        <h2 className="text-2xl font-bold md:text-4xl ">
          Explore the power of AI
        </h2>
        <p className="text-sm font-light text-muted-foreground md:text-lg">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="space-y-4 px-4 md:p-20 lg:px-32">
        {tools.map((tool) => {
          return (
            <Card
              onClick={() => {
                router.push(tool.href);
              }}
              key={tool.href}
              className="flex cursor-pointer items-center justify-between border-black/5 p-4 transition hover:shadow-md"
            >
              <div className="flex items-center gap-x-4">
                <div
                  className={cn(
                    'w-fit rounded-md p-2',
                    tool.bgColor,
                    tool.color
                  )}
                >
                  {<tool.icon></tool.icon>}
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <ArrowRight className="h-5 w-5"></ArrowRight>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardPage;
