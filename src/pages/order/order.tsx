import { useFramerMotionStore } from '../../store';
import { motion } from 'framer-motion';
export default function Order() {
  const order = useFramerMotionStore(s => s.order);

  console.log('ORDERS : ', order);
  // [ "peppers", "olives", "extra cheese" ]

  const formatToppings = (toppings: string[]) => {
    if (toppings.length === 0) return 'no extra toppings';
    if (toppings.length === 1) return toppings[0];
    const result = toppings.slice(0, -1).join(' , ') + ' and ' + toppings[toppings.length - 1];
    return result;
  };
  const formatting = formatToppings(order.toppings);

  console.log(formatting);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-8 items-center"
    >
      <h1 className="text-3xl text-white">Thank you for your order :)</h1>
      <h1 className="font-semibold text-white text-justify w-1/2">
        {`You’ve chosen a delicious ${order.base} pizza topped with fresh ${formatting} – a perfect combination we’re excited to prepare for you!`}
      </h1>
    </motion.div>
  );
}
