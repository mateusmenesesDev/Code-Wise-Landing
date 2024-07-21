import Link from 'next/link';
import LinkedinIcon from '~/components/icons/LinkedinIcon';
import type { Testimonial } from '~/types/Testimonial.type';

export default function TestimonialCard({
	linkedin,
	name,
	quote
}: Testimonial) {
	return (
		<div className="flex flex-col items-center gap-6 space-y-4 rounded-lg bg-base-200 p-6 shadow-lg">
			<div className="space-y-1 text-center">
				<div className="font-medium text-lg text-primary lg:text-2xl">
					{name}
				</div>
				<Link
					href={linkedin}
					target="_blank"
					rel="noreferrer noopener"
					className="flex items-center justify-center text-sm text-zinc-600 hover:underline"
				>
					<LinkedinIcon className="mr-1 h-5 w-5" />
					LinkedIn
				</Link>
			</div>
			<blockquote className="mt-auto text-center text-zinc-600">
				"{quote}"
			</blockquote>
		</div>
	);
}
