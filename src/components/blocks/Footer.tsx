import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import LinkedinIcon from '../icons/LinkedinIcon';
import Container from '../ui/Container';

export default function Footer() {
	return (
		<footer className="bg-base-200 py-4 lg:py-12">
			<Container className="flex items-center justify-between gap-4">
				<p className="text-xl">Developed by Matthew</p>
				<div className="flex flex-col items-end">
					<Link
						target="_blank"
						rel="noreferrer noopener"
						href="https://www.linkedin.com/in/mateus-meneses/"
						className="flex items-center gap-2"
					>
						Linkedin
						<LinkedinIcon className="h-4 w-4" />
					</Link>
					<span className="flex items-center gap-2">
						5579999320778
						<Phone className="h-4 w-4" />
					</span>
					<Link
						href="mailto:mateusmenesesdev@gmail.com"
						target="_blank"
						rel="noreferrer noopener"
						className="flex items-center gap-2"
					>
						<span>mateusmenesesdev@gmail.com</span>
						<Mail className="h-4 w-4" />
					</Link>
				</div>
			</Container>
		</footer>
	);
}
