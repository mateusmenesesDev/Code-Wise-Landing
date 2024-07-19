import Image from 'next/image';
import awsImage from '/public/icons/aws.png';
import { cn } from '~/lib/utils';

type Props = {
  className?: string;
  priority?: boolean;
};

export default function AwsIcon({ className, priority }: Props) {
  return (
    <Image priority={priority} src={awsImage} alt='Typescript Icon' className={cn('w-[2.9375rem] h-[2.9375rem]', className)} />
  );
}