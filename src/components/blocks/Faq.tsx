import Heading from '../ui/Heading';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '../ui/accordion';

export default function Faq() {
	return (
		<div>
			<Heading className="mb-8 text-center" level={2}>
				Frequently Asked Questions
			</Heading>
			<Accordion className="m-auto max-w-5xl" type="single" collapsible>
				<AccordionItem value="1">
					<AccordionTrigger>What is this mentorship program?</AccordionTrigger>
					<AccordionContent>
						<p>
							The mentorship is a 1-on-1 mentorship program where you will be
							paired with a senior developer who will guide you through your
							learning journey.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="2">
					<AccordionTrigger>
						Is the mentorship for experience developers?
					</AccordionTrigger>
					<AccordionContent>
						<p>
							No, the mentorship is for developers of all levels. Whether you
							are a beginner or an experienced developer, you will benefit from
							the mentorship.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="3">
					<AccordionTrigger>
						What are the benefits of the mentorship program?
					</AccordionTrigger>
					<AccordionContent>
						<p>
							The mentorship program will help you improve your coding skills,
							learn new technologies, and build real-world projects. You will
							also receive career advice and guidance from your mentor.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="4">
					<AccordionTrigger>
						How long is the mentorship program?
					</AccordionTrigger>
					<AccordionContent>
						<p>
							The mentorship program lasts for whenever you need it. You can
							work with your mentor for as long as you want until you feel
							confident in your skills.
						</p>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
