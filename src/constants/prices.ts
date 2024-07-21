import type { Price } from '~/types/Price.type';

export const prices: Price[] = [
	{
		title: 'Mock interviews',
		price: 149.99,
		features: [
			'One 30min HR Interview per week',
			'One 30min Technical Interview per week',
			'One Technical Project Analysis per month'
		]
	},
	{
		title: 'Mentorship',
		price: 249.99,
		features: [
			'One meet 1-on-1 per week',
			'10m Daily meeting',
			'Software House daily simulation',
			'Full project development',
			'Project management',
			'Team management',
			'Code review'
		]
	},
	{
		title: 'Full Package',
		price: 349.99,
		features: ['All Mock Interviews', 'All Mentorship']
	}
];
