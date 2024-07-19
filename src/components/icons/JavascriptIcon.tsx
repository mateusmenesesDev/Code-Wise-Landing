import Image from 'next/image';
import javascriptIimage from '/public/icons/javascript.png';
import { cn } from '~/lib/utils';

type Props = {
  className?: string;
  priority?: boolean;
};

export default function JavascriptIcon({ className, priority }: Props) {
  return (
    <Image priority={priority} src={javascriptIimage} alt='Typescript Icon' className={cn('w-[2.9375rem] h-[2.9375rem]', className)} />
  );
}