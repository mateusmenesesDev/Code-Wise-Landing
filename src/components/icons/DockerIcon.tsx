import Image from 'next/image';
import dockerImage from '/public/icons/docker.png';
import { cn } from '~/lib/utils';

type Props = {
  className?: string;
  priority?: boolean;
};

export default function DockerIcon({ className, priority }: Props) {
  return (
    <Image priority={priority} src={dockerImage} alt='Typescript Icon' className={cn('w-[2.9375rem] h-[2.9375rem]', className)} />
  );
}