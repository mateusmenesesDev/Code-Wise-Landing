import type { z } from 'zod';
import type { applicationSchema } from '~/schemas/application.schema';

export type Application = z.infer<typeof applicationSchema>;
