import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

/**
 * مشخص کنیم endig-tag و  starting-tag ما میتوانیم برای انییشن خود یک
 * یعنی انیمیشن ما از جایی شروع بشه و در نقطه ای کا میخوایم تموم بشه
 * ----------------------------------------------------
 * whileHover :
 *              میتوانیم با قرار دادن این قابلیت
 *              هاور روی المان های خودمان را کنترل کنیم
 *
 *
 */

export default function Landing() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
      className="w-1/2  h-1/3 flex flex-col justify-around items-center"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className=" text-pink-300  font-semibold text-2xl"
      >
        Wellcom To FramerMotion Pizza
      </motion.h1>
      <motion.button
        onClick={() => navigate('/base')}
        whileHover={{
          scale: 1.1,
          textShadow: '0px 0px 8px rgb(255,255,255)',
          boxShadow: '0px 0px 8px rgb(255,255,255)',
        }}
        className="border  border-pink-300 w-1/2 p-2 rounded-full text-lg text-pink-300 "
      >
        Create your Pizza
      </motion.button>
    </motion.div>
  );
}
