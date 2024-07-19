import { type ComponentProps } from 'react';
import { fontPoppins } from '~/assets/fonts/poppins';
import { cn } from '~/lib/utils';

type Props = ComponentProps<'button'>;

export default function Button({ className, ...rest }: Props) {
  return (
    <button {...rest} className={cn(`bg-primary transition-colors hover:bg-primary/75 p-2 md:p-4 rounded-md ${fontPoppins.className} text-base font-semibold`, className)} />
  );
}