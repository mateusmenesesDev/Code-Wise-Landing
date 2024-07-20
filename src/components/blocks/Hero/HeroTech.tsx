import Image, { type StaticImageData } from 'next/image';
import { cn } from '~/lib/utils';

type Props = {
	className?: string;
	img: StaticImageData;
};

export default function HeroTech({ img, className }: Props) {
	return (
		<div className={cn('h-[4.875rem] w-[4.875rem] bg-white', className)}>
			<Image src={img} alt="Hero Image" className="h-full w-full" />
		</div>
	);
}
