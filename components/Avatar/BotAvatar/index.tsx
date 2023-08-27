import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@clerk/nextjs';
import { FC } from 'react';
interface BotAvatarProps {}

const BotAvatar: FC<BotAvatarProps> = (props) => {
  const { user } = useUser();
  return (
    <Avatar>
      <AvatarImage className="p-1" src="/logo.png"></AvatarImage>
    </Avatar>
  );
};

export default BotAvatar;
