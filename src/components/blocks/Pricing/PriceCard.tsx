import { CheckIcon } from 'lucide-react';
import { cn } from '~/lib/utils';
import type { Price } from '~/types/Price.type';
import { ApplyForMentorship } from '../ApplyForMentorship';

type Props = Price & {
	className?: string;
	isHighlighted?: boolean;
};

export default function PriceCard({
	features,
	price,
	title,
	className,
	isHighlighted
}: Props) {
	return (
		<div
			className={cn(
				'flex flex-col rounded-xl border-2 p-16 shadow-md xl:min-h-[31rem]',
				{
					'border-none bg-primary text-white': isHighlighted
				},
				className
			)}
		>
			<h3 className="mb-6 font-semibold text-xl lg:text-4xl">{title}</h3>
			<ul className="flex flex-col gap-4">
				{features.map((feature) => (
					<li key={feature} className="flex gap-2 lg:text-lg">
						<CheckIcon />
						{feature}
					</li>
				))}
			</ul>
			<span className="mt-6 mb-10 block font-semibold text-2xl lg:text-4xl">
				${price}
			</span>
			<ApplyForMentorship
				isHighlighted={isHighlighted}
				price={{ features, price, title }}
			/>
		</div>
	);
}
