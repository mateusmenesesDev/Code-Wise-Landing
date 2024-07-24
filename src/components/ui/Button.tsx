import type { ComponentProps } from 'react';

import { fontPoppins } from '~/assets/fonts/poppins';

import { cn } from '~/lib/utils';

type Props = ComponentProps<'button'>;

export default function Button({ className, ...rest }: Props) {
	return (
		<button
			{...rest}
			className={cn(
				`rounded-md bg-primary p-2 text-white transition-colors hover:bg-primary/75 disabled:bg-primary/40 md:p-4 ${fontPoppins.className} font-semibold text-base`,
				className
			)}
		/>
	);
}
