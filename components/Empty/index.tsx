import Image from 'next/image';
import { FC } from 'react';

interface EmptyProps {
  visible?: boolean;
  label: string;
}

const Empty: FC<EmptyProps> = (props) => {
  const { visible = true, label } = props;

  if (!visible) return null;

  return (
    <div className="flex h-full flex-col items-center justify-center p-20">
      <div className="relative h-72 w-72">
        <Image src="/empty.png" fill alt="Empty"></Image>
      </div>
      <p className="text-center text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default Empty;
