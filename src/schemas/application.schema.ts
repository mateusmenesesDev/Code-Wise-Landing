import { z } from 'zod';

export const applicationSchema = z.object({
	name: z.string({
		required_error: 'Name is required',
		invalid_type_error: 'Name must be a string'
	}),
	email: z.string().email('Invalid email'),
	phone: z.string().min(7, 'Phone number must be at least 7 characters'),
	stack: z.enum(['frontend', 'backend', 'fullstack']),
	level: z.enum(['beginner', 'intermediate', 'advanced']),
	experienceTime: z.enum(['0-6 months', '6-12 months', '1-2 years', '2+ years'])
});
