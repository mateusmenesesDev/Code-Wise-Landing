import Image from 'next/image';
import fastApiImage from '/public/icons/fastapi.png';
import { cn } from '~/lib/utils';

type Props = {
  className?: string;
  priority?: boolean;
};

export default function FastApiIcon({ className, priority }: Props) {
  return (
    <Image priority={priority} src={fastApiImage} alt='Typescript Icon' className={cn('w-[2.9375rem] h-[2.9375rem]', className)} />
  );
}