'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from 'lucide-react'
import { Route } from './type'

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
})

interface SidebarProps {}

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    href: '/image',
    color: 'text-pink-700',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/video',
    color: 'text-orange-700',
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: 'text-emerald-500',
  },
  {
    label: 'Code Generation',
    icon: Code,
    href: '/code',
    color: 'text-green-700',
  },
  {
    label: 'Setting',
    icon: Settings,
    href: '/setting',
  },
]

const Sidebar: FC<SidebarProps> = props => {
  const pathname = usePathname()

  return (
    <div className="space-y-4 w-full py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href={'/dashboard'} className="flex items-center pl-3 mb-14">
          <div className="w-8 h-8 relative mr-4">
            <Image src="/logo.png" fill alt="logo"></Image>
          </div>
          <h1 className={cn(`text-2xl font-bold`, montserrat.className)}>Genius</h1>
        </Link>
        <div className="space-y-1">
          {routes.map(route => {
            return (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  `flex p-3 items-center text-sm w-full
                justify-start font-medium cursor-pointer
                hover:text-white hover:bg-white/10 rounded-lg transition
                `,
                  pathname === route.href ? 'text-white bg-white/10' : 'text-zinc-400'
                )}
              >
                <route.icon className={cn('w-5 h-5 mr-3', route.color)}></route.icon>
                <div>{route.label}</div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
