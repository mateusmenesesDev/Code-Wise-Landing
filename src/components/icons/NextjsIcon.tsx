import Image, { type StaticImageData } from 'next/image';
import { cn } from '~/lib/utils';
import NextjsIimage from '/public/icons/nextjs.svg';

type Props = {
	className?: string;
	priority?: boolean;
};

export default function NextjsIcon({ className, priority }: Props) {
	return (
		<Image
			priority={priority}
			src={NextjsIimage as StaticImageData}
			alt="Typescript Icon"
			className={cn('h-[2.9375rem] w-[2.9375rem]', className)}
		/>
	);
}
