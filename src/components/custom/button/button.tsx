import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = { children: React.ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`active:scale-90 transition-all duration-300 shadow-md ${props.className}`}
    >
      {children}
    </button>
  );
}
