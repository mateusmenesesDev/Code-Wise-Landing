import { projects } from '~/constants/projects';
import Project from './Project';

export default function ProjectShowcase() {
	return (
		<div>
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<h2 className="font-bold text-3xl tracking-tighter sm:text-5xl">
						Project Showcase
					</h2>
					<p className="max-w-[900px] text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						During the mentorship program, you will have the opportunity to work
						on a variety of real-world projects that showcase your fullstack
						development skills. Here are a few examples of the projects you may
						build:
					</p>
				</div>
			</div>
			<div className="mx-auto max-w-7xl pt-12">
				<div className="grid gap-14 lg:gap-24">
					{projects.map((project) => (
						<Project key={project.title} {...project} />
					))}
				</div>
			</div>
		</div>
	);
}
