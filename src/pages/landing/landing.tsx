import { ButtonMotion } from '../../components';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
export default function Landing() {
  const navigate = useNavigate();
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="w-1/2  h-1/3 flex flex-col justify-around items-center"
    >
      <motion.h1 animate={{ fontSize: '35px' }} className=" text-pink-300  font-semibold ">
        Wellcom To FramerMotion Pizza
      </motion.h1>
      <motion.button animate={{ scale: 1.4, rotateX: 0, rotateY: 0 }} className="w-full">
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
