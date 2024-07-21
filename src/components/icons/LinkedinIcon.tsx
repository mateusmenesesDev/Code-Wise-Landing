import Image from 'next/image';
import { cn } from '~/lib/utils';
import linkedinImage from '/public/icons/linkedin.png';

type Props = {
	className?: string;
	priority?: boolean;
};

export default function LinkedinIcon({ className, priority }: Props) {
	return (
		<Image
			priority={priority}
			src={linkedinImage}
			alt="Typescript Icon"
			className={cn('h-[2.9375rem] w-[2.9375rem]', className)}
		/>
	);
}
