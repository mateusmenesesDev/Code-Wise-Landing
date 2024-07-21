import Calendly from '../Calendly';
import Heading from './Heading';

export default function FreeMentorship() {
	return (
		<div>
			<Heading className="text-center">Still not convinced?</Heading>
			<p className="mt-4 mb-6 text-center text-lg text-zinc-600">
				We offer a free mentorship session to help you decide. <br />
				Book a session now!
			</p>
			<Calendly />
		</div>
	);
}
