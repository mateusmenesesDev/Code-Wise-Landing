import Link from 'next/link';
import type { ComponentProps } from 'react';

import { fontPoppins } from '~/assets/fonts/poppins';

import { cn } from '~/lib/utils';

type ButtonProps = ComponentProps<'button'>;

const commonClasses = `rounded-md bg-primary p-2 text-white transition-colors hover:bg-primary/75 disabled:bg-primary/40 md:p-4 ${fontPoppins.className} font-semibold text-base`;

export function Button({ className, ...rest }: ButtonProps) {
	return <button {...rest} className={cn(commonClasses, className)} />;
}

type LinkProps = ComponentProps<typeof Link>;

export function ButtonLink({ className, ...rest }: LinkProps) {
	return <Link {...rest} className={cn(commonClasses, className)} />;
}
