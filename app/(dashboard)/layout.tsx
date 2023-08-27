import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { FC, ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="relative h-full">
      <div className="z-80 inset-y-0 hidden bg-gray-900 md:fixed md:flex md:w-72">
        <Sidebar></Sidebar>
      </div>
      <main className="pb-10 md:pl-72">
        <Navbar></Navbar>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
