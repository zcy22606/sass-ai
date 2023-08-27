import { UserButton } from '@clerk/nextjs';
import { FC, ReactNode } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileSidebar from '@/components/MobileSidebar';
interface NavbarProps {}

const Navbar: FC<NavbarProps> = (props) => {
  return (
    <div className="flex w-full items-center p-4">
      <MobileSidebar></MobileSidebar>
      <div className="flex w-full  justify-end">
        <UserButton afterSignOutUrl="/"></UserButton>
      </div>
    </div>
  );
};

export default Navbar;
