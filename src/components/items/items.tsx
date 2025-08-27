import type { HtmlHTMLAttributes } from 'react';

type ItemsProps = {
  active: boolean;
  title?: string;
} & HtmlHTMLAttributes<HTMLSpanElement>;

export default function Items({ title, active, ...props }: ItemsProps) {
  return (
    <span
      {...props}
      className={` ${
        active ? ' text-pink-300 font-semibold' : 'text-pink-700'
      } cursor-pointer h-max`}
    >
      {active && '>'} {title}
    </span>
  );
}
