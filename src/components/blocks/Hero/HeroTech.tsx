import Image, { type StaticImageData } from 'next/image';
import { cn } from '~/lib/utils';

type Props = {
  className?: string;
  img: StaticImageData;
};

export default function HeroTech({ img, className }: Props) {
  return (
    <div className={cn('bg-white w-[4.875rem] h-[4.875rem]', className)}>
      <Image src={img} alt='Hero Image' className='w-full h-full' />
    </div>
  );
}