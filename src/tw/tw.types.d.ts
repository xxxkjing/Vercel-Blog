import type { ComponentProps as ReactComponentProps } from 'react';
import type { Tailwindest } from 'tailwindest';

export type TailwindClass = Tailwindest<{
  color: 'accent' | 'text-primary';
}>;

export type ComponentProps<T> = ReactComponentProps<T> & {
  className?: TailwindClass | string;
};
