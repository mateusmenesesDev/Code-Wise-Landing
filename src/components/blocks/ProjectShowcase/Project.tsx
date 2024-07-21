import { CheckIcon } from 'lucide-react';
import Image from 'next/image';
import type { Project as TProject } from '~/types/Project.type';

export default function Project({
	title,
	description,
	features,
	image
}: TProject) {
	return (
		<div className="flex flex-col justify-between gap-6 md:flex-row lg:gap-12 ">
			<div className="flex-1">
				<h3 className="font-bold text-pr text-xl lg:text-2xl">{title}</h3>
				<p className="mt-2 text-zinc-600">{description}</p>
				<div className="mt-4 flex flex-col gap-2">
					{features.map((feature) => (
						<div
							key={feature}
							className="flex items-center gap-2 text-sm text-zinc-600"
						>
							<CheckIcon className="h-4 w-4 fill-primary" />
							{feature}
						</div>
					))}
				</div>
			</div>
			<Image
				src={image.src}
				alt={image.alt}
				className="mx-auto w-fit overflow-hidden rounded-xl border object-cover object-top shadow-2xl sm:w-full md:aspect-video md:max-w-[350px] md:object-left-top lg:w-[300px] lg:max-w-none lg:flex-1"
			/>
		</div>
	);
}
