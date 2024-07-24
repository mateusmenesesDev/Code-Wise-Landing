import { Resend } from 'resend';
import NewLead from '~/components/email/NewLead';
import { applicationSchema } from '~/schemas/application.schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	const body = await req.json();
	const parsedLead = applicationSchema.safeParse(body);

	if (!parsedLead.success) {
		return Response.json(parsedLead.error, { status: 400 });
	}

	try {
		const { data, error } = await resend.emails.send({
			from: 'contact@mentoriafullstack.com',
			to: ['mateusmenesesdev@gmail.com'],
			subject: 'Mentoria - New lead',
			react: NewLead(parsedLead.data)
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json({ data });
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
