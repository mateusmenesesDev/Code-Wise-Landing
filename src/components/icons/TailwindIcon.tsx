import Image from 'next/image';
import { cn } from '~/lib/utils';
import tailwindImage from '/public/icons/tailwind.png';

type Props = {
	className?: string;
	priority?: boolean;
};

export default function TailwindIcon({ className, priority }: Props) {
	return (
		<Image
			priority={priority}
			src={tailwindImage}
			alt="Typescript Icon"
			className={cn('h-[2.9375rem] w-[2.9375rem]', className)}
		/>
	);
}
