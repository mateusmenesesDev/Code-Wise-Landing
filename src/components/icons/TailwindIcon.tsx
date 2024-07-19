import Image from 'next/image';
import tailwindImage from '/public/icons/tailwind.png';
import { cn } from '~/lib/utils';

type Props = {
  className?: string;
  priority?: boolean;
};

export default function TailwindIcon({ className, priority }: Props) {
  return (
    <Image priority={priority} src={tailwindImage} alt='Typescript Icon' className={cn('w-[2.9375rem] h-[2.9375rem]', className)} />
  );
}