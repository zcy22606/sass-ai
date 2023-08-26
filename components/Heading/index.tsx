import { LucideIcon } from 'lucide-react';
import { FC, ReactNode } from 'react';

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
}

const Heading: FC<HeadingProps> = (props) => {
  const { title, description, icon, iconColor, bgColor } = props;
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Heading;
