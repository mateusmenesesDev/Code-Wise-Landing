import { cn } from '~/lib/utils';

type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function Container({ children, className }: Props) {
	return (
		<div
			className={cn(
				'm-auto max-w-screen-2xl px-6 lg:px-20 2xl:px-0',
				className
			)}
		>
			{children}
		</div>
	);
}
