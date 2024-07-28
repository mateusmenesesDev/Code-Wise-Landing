'use client';

import Link from 'next/link';

import { ButtonLink } from '../ui/Button';
import Container from '../ui/Container';

const menuLinks = [
	{ title: 'The Mentorship', link: '#mentorship' },
	{ title: 'Our Projects', link: '#projects' },
	{ title: 'Testimonials', link: '#testimonials' },
	{ title: 'Pricing', link: '#pricing' },
	{ title: 'Free Mentorship', link: '#free-mentorship' },
	{ title: 'Faq', link: '#faq' }
];

export function Header() {
	return (
		<header className="relative z-50 py-6">
			<Container className="flex items-center justify-between gap-4">
				<span className="flex-1 font-semibold">Fullstack Mentorship</span>
				<nav className="hidden lg:block">
					<ul className="flex gap-4">
						{menuLinks.map((link) => (
							<li key={link.link}>
								<Link
									href={`${link.link}`}
									className="font-medium transition-all hover:opacity-70"
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className="flex flex-1 justify-end">
					<ButtonLink href="#pricing">Schedule my mentorship</ButtonLink>
				</div>
			</Container>
		</header>
	);
}
