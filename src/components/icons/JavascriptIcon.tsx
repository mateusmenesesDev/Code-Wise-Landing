import Image from 'next/image';
import { cn } from '~/lib/utils';
import javascriptIimage from '/public/icons/javascript.png';

type Props = {
	className?: string;
	priority?: boolean;
};

export default function JavascriptIcon({ className, priority }: Props) {
	return (
		<Image
			priority={priority}
			src={javascriptIimage}
			alt="Typescript Icon"
			className={cn('h-[2.9375rem] w-[2.9375rem]', className)}
		/>
	);
}
