import type { StaticImageData } from 'next/image';

export type Project = {
	title: string;
	description: string;
	features: string[];
	image: {
		src: StaticImageData;
		alt: string;
	};
};
