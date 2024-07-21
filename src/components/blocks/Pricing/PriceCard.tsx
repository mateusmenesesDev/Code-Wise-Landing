import { CheckIcon } from 'lucide-react';
import { cn } from '~/lib/utils';
import type { Price } from '~/types/Price.type';

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
				'flex min-h-[31rem] flex-col rounded-xl border-2 p-16 shadow-md',
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
			<span className="mt-6 mb-10 block text-xl lg:text-4xl">${price}</span>
			<button
				type="button"
				className={cn(
					'mt-auto w-[12rem] rounded-lg bg-primary py-4 text-white transition-colors hover:bg-primary/80',
					{
						'bg-white text-black hover:bg-black/40 hover:text-white':
							isHighlighted
					}
				)}
			>
				Apply
			</button>
		</div>
	);
}
