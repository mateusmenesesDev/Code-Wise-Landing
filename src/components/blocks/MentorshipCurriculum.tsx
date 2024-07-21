import { CheckIcon } from 'lucide-react';
import Image from 'next/image';
import womanDeveloper from '/public/images/woman-developer.png';

export default function MentorshipCurriculum() {
	return (
		<div>
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<h2 className="font-bold text-3xl tracking-tighter sm:text-5xl">
						Comprehensive <br />{' '}
						<span className="text-primary">Web Develop</span> Curriculum
					</h2>
					<p className="m-auto max-w-[700px] text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Our fullstack developer mentorship program covers a wide range of
						topics to ensure you become a well-rounded developer.
					</p>
				</div>
			</div>
			<div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
				<div className="flex flex-col justify-center space-y-4">
					<ul className="grid gap-6">
						<li>
							<div className="grid gap-1">
								<h3 className="font-bold text-primary text-xl">
									Front-end Development
								</h3>
								<p className="text-zinc-600">
									Master modern front-end javascript and typescript frameworks
									like React, Vue, and Angular, and learn best practices for
									building responsive, accessible, and performant user
									interfaces.
								</p>
								<div className="flex items-center gap-2 text-sm text-zinc-600">
									<CheckIcon className="h-4 w-4 fill-primary" />
									Hands-on experience with popular frameworks
								</div>
								<div className="flex items-center gap-2 text-sm text-zinc-600">
									<CheckIcon className="h-4 w-4 fill-primary" />
									Accessibility and performance optimization
								</div>
							</div>
						</li>
						<li>
							<div className="grid gap-1">
								<h3 className="font-bold text-primary text-xl">
									Back-end Development
								</h3>
								<p className="text-zinc-600">
									Dive into server-side technologies like express and fastify
									from Node.js, fastapi and flaskapi from Python, and Ruby on
									Rails, and learn how to build scalable and secure APIs.
								</p>
								<div className="flex items-center gap-2 text-sm text-zinc-600">
									<CheckIcon className="h-4 w-4 fill-primary" />
									Mastery of server-side technologies
								</div>
								<div className="flex items-center gap-2 text-sm text-zinc-600">
									<CheckIcon className="h-4 w-4 fill-primary" />
									Secure and scalable API development
								</div>
							</div>
						</li>
						<li>
							<div className="grid gap-1">
								<h3 className="font-bold text-primary text-xl">
									Full-stack Integration
								</h3>
								<p className="text-zinc-600">
									Understand how to integrate front-end and back-end components,
									implement authentication and authorization, and deploy your
									applications to the cloud in aws services.
								</p>
								<div className="flex items-center gap-2 text-sm text-zinc-600">
									<CheckIcon className="h-4 w-4 fill-primary" />
									Seamless front-end and back-end integration
								</div>
								<div className="flex items-center gap-2 text-sm text-zinc-600">
									<CheckIcon className="h-4 w-4 fill-primary" />
									Secure authentication and authorization
								</div>
							</div>
						</li>
					</ul>
				</div>
				<Image
					src={womanDeveloper}
					width="550"
					height="310"
					alt="Developer working on a laptop"
					className="mx-auto rounded-xl object-cover object-center sm:w-full lg:order-first"
				/>
			</div>
		</div>
	);
}
