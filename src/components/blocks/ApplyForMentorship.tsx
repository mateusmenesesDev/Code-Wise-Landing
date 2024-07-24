import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '~/components/ui/dialog';
import { cn } from '~/lib/utils';
import type { Price } from '~/types/Price.type';
import FormApplication from './Pricing/FormApplication';

type Props = {
	isHighlighted?: boolean;
	price: Price;
};

export function ApplyForMentorship({ isHighlighted, price }: Props) {
	return (
		<Dialog>
			<DialogTrigger asChild>
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
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="mb-1 text-primary text-xl">
						{price.title} Application
					</DialogTitle>
					<DialogDescription>
						You are about to apply for the{' '}
						<span className="font-bold">{price.title}</span> program.
					</DialogDescription>
					<FormApplication />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
