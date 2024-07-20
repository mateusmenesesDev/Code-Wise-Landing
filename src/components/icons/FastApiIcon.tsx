import Image from 'next/image';
import { cn } from '~/lib/utils';
import fastApiImage from '/public/icons/fastapi.png';

type Props = {
	className?: string;
	priority?: boolean;
};

export default function FastApiIcon({ className, priority }: Props) {
	return (
		<Image
			priority={priority}
			src={fastApiImage}
			alt="Typescript Icon"
			className={cn('h-[2.9375rem] w-[2.9375rem]', className)}
		/>
	);
}
