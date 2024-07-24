import type { Application } from '~/types/Application.type';

export default function NewLead({
	email,
	experienceTime,
	level,
	name,
	phone,
	stack
}: Application) {
	return (
		<div>
			<h1>New lead from mentorship landing page</h1>
			<p>Name: {name}</p>
			<p>Email: {email}</p>
			<p>Phone: {phone}</p>
			<p>Experience Time: {experienceTime}</p>
			<p>Stack: {stack}</p>
			<p>Level: {level}</p>
		</div>
	);
}
