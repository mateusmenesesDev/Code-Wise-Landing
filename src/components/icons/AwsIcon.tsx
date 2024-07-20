import Image from 'next/image';
import { cn } from '~/lib/utils';
import awsImage from '/public/icons/aws.png';

type Props = {
	className?: string;
	priority?: boolean;
};

export default function AwsIcon({ className, priority }: Props) {
	return (
		<Image
			priority={priority}
			src={awsImage}
			alt="Typescript Icon"
			className={cn('h-[2.9375rem] w-[2.9375rem]', className)}
		/>
	);
}
