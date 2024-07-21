import FreeMentorship from '~/components/blocks/FreeMentorship';
import Hero from '~/components/blocks/Hero';
import KeyFeatures from '~/components/blocks/KeyFeatures';
import MentorshipCurriculum from '~/components/blocks/MentorshipCurriculum';
import Pricing from '~/components/blocks/Pricing';
import ProjectShowcase from '~/components/blocks/ProjectShowcase';
import Testimonials from '~/components/blocks/Testimonials';
import Container from '~/components/ui/Container';

export default function Home() {
	return (
		<main>
			<section className="mt-12 lg:mt-20">
				<Container>
					<Hero />
				</Container>
			</section>
			<section id="mentorship" className="my-6 bg-gray-100 py-14 lg:my-8">
				<Container>
					<KeyFeatures />
				</Container>
			</section>
			<section className="my-8 lg:my-14">
				<Container>
					<MentorshipCurriculum />
				</Container>
			</section>
			<section id="projects" className="my-6 bg-gray-100 py-14 lg:my-8">
				<Container>
					<ProjectShowcase />
				</Container>
			</section>
			<section id="testimonials" className="my-12 lg:my-24">
				<Container>
					<Testimonials />
				</Container>
			</section>
			<section id="pricing" className="my-6 bg-gray-100 py-14 lg:my-8">
				<Container>
					<Pricing />
				</Container>
			</section>
			<section id="free-mentorship" className="my-12 lg:my-24">
				<Container>
					<FreeMentorship />
				</Container>
			</section>
		</main>
	);
}
