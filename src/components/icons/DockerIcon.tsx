import Image from 'next/image';
import { cn } from '~/lib/utils';
import dockerImage from '/public/icons/docker.png';

type Props = {
	className?: string;
	priority?: boolean;
};

export default function DockerIcon({ className, priority }: Props) {
	return (
		<Image
			priority={priority}
			src={dockerImage}
			alt="Typescript Icon"
			className={cn('h-[2.9375rem] w-[2.9375rem]', className)}
		/>
	);
}
