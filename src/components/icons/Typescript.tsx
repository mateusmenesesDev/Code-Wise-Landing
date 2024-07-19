import Image, { type StaticImageData } from 'next/image';
import TypescriptImage from '/public/icons/typescript.svg';
import { cn } from '~/lib/utils';

type Props = {
  className?: string;
  priority?: boolean;
};

export default function TypescriptIcon({ className, priority }: Props) {
  return (
    <Image priority={priority} src={TypescriptImage as StaticImageData} alt='Typescript Icon' className={cn('w-[2.9375rem] h-[2.9375rem]', className)} />
  );
}