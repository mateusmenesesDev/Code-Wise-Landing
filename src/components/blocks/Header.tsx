'use client';

import Link from 'next/link';

import Button from '../ui/Button';
import Container from '../ui/Container';

const menuLinks = [
	{ title: 'The Mentorship', link: '#mentorship' },
	{ title: 'Our Projects', link: '#projects' },
	{ title: 'The Mentor', link: '#mentor' },
	{ title: 'Testimonials', link: '#testimonials' },
	{ title: 'Pricing', link: '#pricing' }
];

export function Header() {
	return (
		<header className="relative z-50 py-6">
			<Container className="flex items-center justify-between gap-4">
				<span className="flex-1 font-semibold">Mentoria fullstack</span>
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
					<Button>Schedule my mentorship</Button>
				</div>
			</Container>
		</header>
	);
}
