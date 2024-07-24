'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import Button from '~/components/ui/Button';
import LoadingSpinner from '~/components/ui/LoadingSpinner';

import { applicationSchema } from '~/schemas/application.schema';
import type { Application } from '~/types/Application.type';

export default function FormApplication() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isValid }
	} = useForm<Application>({
		resolver: zodResolver(applicationSchema)
	});

	const onSubmit: SubmitHandler<Application> = (data) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-3 pt-4 text-sm"
		>
			<label>
				Name
				<input
					{...register('name')}
					type="text"
					placeholder="Your Name"
					className="mt-1 w-full rounded-md p-2"
				/>
			</label>
			<label>
				Email
				<input
					{...register('email')}
					type="text"
					placeholder="josh@youremail.com"
					className="mt-1 w-full rounded-md p-2"
				/>
			</label>
			<label>
				Phone number
				<input
					{...register('phone')}
					type="text"
					placeholder="Your phone number"
					className="mt-1 w-full rounded-md p-2"
				/>
			</label>
			<label>
				How long have you been studying programming?
				<select
					{...register('experienceTime')}
					className="mt-1 w-full rounded-md bg-white p-2"
				>
					<option disabled selected />
					<option value="0-6 months">Less than 6 months</option>
					<option value="6-12 months">6 months - 1 year</option>
					<option value="1-2 years">1 - 2 years</option>
					<option value="2+ years">More than 2 years</option>
				</select>
			</label>
			<label>
				What are your main stack goal?
				<select
					{...register('stack')}
					className="mt-1 w-full rounded-md bg-white p-2"
				>
					<option disabled selected />
					<option value="frontend">Frontend</option>
					<option value="backend">Backend</option>
					<option value="fullstack">Fullstack</option>
				</select>
			</label>
			<label>
				What is your level?
				<select
					{...register('level')}
					className="mt-1 w-full rounded-md bg-white p-2"
				>
					<option disabled selected />
					<option value="beginner">Beginner</option>
					<option value="intermediate">Intermediate</option>
					<option value="advanced">Advanced</option>
				</select>
			</label>
			<Button disabled={!isValid} type="submit" className="mt-4">
				{!isSubmitting && 'Submit'}
				{isSubmitting && <LoadingSpinner />}
			</Button>
		</form>
	);
}
