import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { FC, ReactNode } from 'react'

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="h-full relative">
      <div className="hidden md:flex inset-y-0 md:w-72 md:fixed bg-gray-900 z-80">
        <Sidebar></Sidebar>
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar></Navbar>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
