import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
type ItemsProps = {
  active: boolean;
  title?: string;
} & HTMLMotionProps<'span'>;

export default function Items({ title, active, ...props }: ItemsProps) {
  return (
    <motion.span
      {...props}
      className={` ${
        active ? ' text-pink-300 font-semibold' : 'text-pink-700'
      } cursor-pointer h-max hover:text-pink-400`}
    >
      {active && '>'} {title}
    </motion.span>
  );
}
