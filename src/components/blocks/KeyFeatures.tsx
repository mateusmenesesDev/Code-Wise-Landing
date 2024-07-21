import Image from 'next/image';

import { CheckIcon } from 'lucide-react';
import developerImage from '/public/images/developer.jpeg';

export default function KeyFeatures() {
	return (
		<section>
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<h2 className="font-bold text-3xl tracking-tighter sm:text-5xl">
						Key Features of the Program
					</h2>
					<p className="max-w-[900px] text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Our fullstack developer mentorship program is designed to provide
						you with the skills, knowledge, and guidance you need to thrive in
						the industry.
					</p>
				</div>
			</div>
			<div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-16">
				<div className="flex flex-col justify-center space-y-4">
					<ul className="grid gap-6">
						<li>
							<div className="grid gap-1">
								<h3 className="font-bold text-xl">1-on-1 Mentorship</h3>
								<p className="text-zinc-600">
									Work closely with an experienced fullstack developer who will
									guide you through the program and provide personalized
									feedback.
								</p>
								<div className="flex items-center gap-2 text-sm text-zinc-600">
									<CheckIcon className="h-4 w-4 fill-primary" />
									Personalized feedback and guidance
								</div>
								<div className="flex items-center gap-2 text-sm text-zinc-600">
									<CheckIcon className="h-4 w-4 fill-primary" />
									Regular check-ins and progress reviews
								</div>
							</div>
						</li>
						<li>
							<div className="grid gap-1">
								<h3 className="font-bold text-xl">Real-World Projects</h3>
								<p className="text-zinc-600">
									Build and deploy real-world web applications, gaining hands-on
									experience with the latest technologies and best practices.
								</p>
								<div className="flex items-center gap-2 text-sm text-zinc-600">
									<CheckIcon className="h-4 w-4 fill-primary" />
									Develop and deploy production-ready apps
								</div>
								<div className="flex items-center gap-2 text-sm text-zinc-600">
									<CheckIcon className="h-4 w-4 fill-primary" />
									Learn industry-standard tools and workflows
								</div>
							</div>
						</li>
						<li>
							<div className="grid gap-1">
								<h3 className="font-bold text-xl">Career Coaching</h3>
								<p className="text-zinc-600">
									Receive guidance on resume building, interview preparation,
									and navigating the job market to land your dream fullstack
									developer role.
								</p>
								<div className="flex items-center gap-2 text-sm text-zinc-600">
									<CheckIcon className="h-4 w-4 fill-primary" />
									Resume and portfolio review
								</div>
								<div className="flex items-center gap-2 text-sm text-zinc-600">
									<CheckIcon className="h-4 w-4 fill-primary" />
									Mock interviews and feedback
								</div>
							</div>
						</li>
					</ul>
				</div>
				<Image
					src={developerImage}
					width="550"
					height="310"
					alt="Developer working on a laptop"
					className="mx-auto rounded-xl object-cover object-center sm:w-full lg:order-last"
				/>
			</div>
		</section>
	);
}
