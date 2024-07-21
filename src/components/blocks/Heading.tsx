import { createElement } from 'react';
import { cn } from '~/lib/utils';

type Props = {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	style?: 1 | 2 | 3 | 4 | 5 | 6;
	className?: string;
	children: React.ReactNode;
};

export default function Heading({
	level = 2,
	style,
	className,
	children
}: Props) {
	if (!style) style = level;
	const HeadingTag = `h${level}`;

	return createElement(HeadingTag, {
		className: cn(
			'font-bold tracking-tighter',
			{
				'text-5xl': style === 1,
				'text-3xl sm:text-5xl': style === 2,
				'text-xl': style === 3
			},
			className
		),
		children
	});
}
