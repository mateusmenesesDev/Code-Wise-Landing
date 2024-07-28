import { testimonials } from '~/constants/testimonials';
import Heading from '../../ui/Heading';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
	return (
		<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
			<div className="space-y-3">
				<Heading>
					What Our<span className="text-primary"> Mentees</span> Say
				</Heading>
				<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
					Hear from our students about their experiences with our mentorship
					program.
				</p>
			</div>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
				{testimonials.map((testimonial) => (
					<TestimonialCard key={testimonial.name} {...testimonial} />
				))}
			</div>
		</div>
	);
}
