'use client';
import { FC, ReactNode, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from '@/components/Sidebar';

interface MobileSidebarProps {
  // children: ReactNode
}

const MobileSidebar: FC<MobileSidebarProps> = (props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <Button className="md:hidden" variant="ghost" size="icon">
          <Menu></Menu>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar></Sidebar>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
