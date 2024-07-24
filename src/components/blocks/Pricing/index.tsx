import { prices } from '~/constants/prices';
import Heading from '../Heading';
import PriceCard from './PriceCard';

export default function Pricing() {
	return (
		<div>
			<Heading className="mb-12 text-center">Choose your plan</Heading>
			<div className="flex flex-col flex-wrap gap-4 lg:flex-row xl:items-center">
				{prices.map((price, i) => (
					<PriceCard
						key={price.title}
						features={price.features}
						title={price.title}
						price={price.price}
						className="flex-1"
						isHighlighted={i === 1}
					/>
				))}
			</div>
		</div>
	);
}
