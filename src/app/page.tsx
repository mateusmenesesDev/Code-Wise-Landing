import Hero from '~/components/blocks/Hero';
import KeyFeatures from '~/components/blocks/KeyFeatures';
import MentorshipCurriculum from '~/components/blocks/MentorshipCurriculum';
import ProjectShowcase from '~/components/blocks/ProjectShowcase';
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
			<section className="my-6 lg:my-14">
				<Container>
					<MentorshipCurriculum />
				</Container>
			</section>
			<section id="projects" className="my-6 bg-gray-100 py-14 lg:my-8">
				<Container>
					<ProjectShowcase />
				</Container>
			</section>
		</main>
	);
}
