import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { FC, ReactNode } from 'react';

interface MusicPageProps {
  children: ReactNode;
}

const MusicPage: FC<MusicPageProps> = (props) => {
  return (
    <div>
      <div> Music </div>
    </div>
  );
};

export default MusicPage;
