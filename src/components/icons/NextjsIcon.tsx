import Image, { type StaticImageData } from 'next/image';
import NextjsIimage from '/public/icons/nextjs.svg';
import { cn } from '~/lib/utils';

type Props = {
  className?: string;
  priority?: boolean;
};

export default function NextjsIcon({ className, priority }: Props) {
  return (
    <Image priority={priority} src={NextjsIimage as StaticImageData} alt='Typescript Icon' className={cn('w-[2.9375rem] h-[2.9375rem]', className)} />
  );
}