import Image, { type StaticImageData } from 'next/image';
import { cn } from '~/lib/utils';
import TypescriptImage from '/public/icons/typescript.svg';

type Props = {
	className?: string;
	priority?: boolean;
};

export default function TypescriptIcon({ className, priority }: Props) {
	return (
		<Image
			priority={priority}
			src={TypescriptImage as StaticImageData}
			alt="Typescript Icon"
			className={cn('h-[2.9375rem] w-[2.9375rem]', className)}
		/>
	);
}
