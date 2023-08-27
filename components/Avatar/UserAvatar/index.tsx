import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@clerk/nextjs';
import { FC } from 'react';
interface UserAvatarProps {}

const UserAvatar: FC<UserAvatarProps> = (props) => {
  const { user } = useUser();
  return (
    <Avatar>
      <AvatarImage src={user?.imageUrl}></AvatarImage>
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
