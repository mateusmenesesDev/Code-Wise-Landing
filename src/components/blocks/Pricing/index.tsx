import { prices } from '~/constants/prices';
import Heading from '../Heading';
import PriceCard from './PriceCard';

export default function Pricing() {
	return (
		<div>
			<Heading className="mb-12 text-center">Choose your plan</Heading>
			<div className="flex items-center gap-4">
				{prices.map((price, i) => (
					<PriceCard
						key={price.title}
						{...price}
						className="flex-1"
						isHighlighted={i === 1}
					/>
				))}
			</div>
		</div>
	);
}
