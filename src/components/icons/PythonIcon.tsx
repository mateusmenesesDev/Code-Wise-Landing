import Image from 'next/image';
import PythonIimage from '/public/icons/python.png';
import { cn } from '~/lib/utils';

type Props = {
  className?: string;
  priority?: boolean;
};

export default function PythonIcon({ className, priority }: Props) {
  return (
    <Image priority={priority} src={PythonIimage} alt='Typescript Icon' className={cn('w-[2.9375rem] h-[2.9375rem]', className)} />
  );
}