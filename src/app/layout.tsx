import '~/styles/globals.css';

import Script from 'next/script';

import { GeistSans } from 'geist/font/sans';

import Footer from '~/components/blocks/Footer';
import { Header } from '~/components/blocks/Header';
import { TRPCReactProvider } from '~/trpc/react';

export const metadata = {
	title: 'Fullstack Mentorship',
	description: 'Mentoria para Desenvolvedores Fullstack',
	icons: [{ rel: 'icon', url: '/favicon.png' }]
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${GeistSans.variable}`}>
			<body className="bg-base">
				<TRPCReactProvider>
					<Header />
					{children}
					<Footer />
				</TRPCReactProvider>
			</body>
			{process.env.NODE_ENV === 'production' && (
				<Script
					defer
					src="https://mentoria-analytics.vercel.app/script.js"
					data-website-id="b78fafaa-5d11-4511-9b8f-1b4a46ac7399"
				/>
			)}
		</html>
	);
}
