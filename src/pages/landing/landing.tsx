import { ButtonMotion } from '../../components';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

/**
 * مشخص کنیم endig-tag و  starting-tag ما میتوانیم برای انییشن خود یک
 * یعنی انیمیشن ما از جایی شروع بشه و در نقطه ای کا میخوایم تموم بشه
 *
 * @returns
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
      <motion.button animate={{}} className="w-full">
        <ButtonMotion
          onClick={() => navigate('/base')}
          className="border  border-pink-300 w-1/2 p-2 rounded-full text-lg text-pink-300"
        >
          Create your Pizza
        </ButtonMotion>
      </motion.button>
    </motion.div>
  );
}
