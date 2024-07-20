import Image from 'next/image';
import { cn } from '~/lib/utils';
import PythonIimage from '/public/icons/python.png';

type Props = {
	className?: string;
	priority?: boolean;
};

export default function PythonIcon({ className, priority }: Props) {
	return (
		<Image
			priority={priority}
			src={PythonIimage}
			alt="Typescript Icon"
			className={cn('h-[2.9375rem] w-[2.9375rem]', className)}
		/>
	);
}
