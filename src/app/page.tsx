import Hero from '~/components/blocks/Hero';
import KeyFeatures from '~/components/blocks/KeyFeatures';
import Container from '~/components/ui/Container';

export default function Home() {
	return (
		<main>
			<section className="mt-12 lg:mt-20">
				<Container>
					<Hero />
				</Container>
			</section>
			<section className="my-6 bg-gray-100 py-14 lg:my-8">
				<Container>
					<KeyFeatures />
				</Container>
			</section>
		</main>
	);
}
