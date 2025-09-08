import { ImageMotion } from '../custom';
import { motion } from 'framer-motion';
import CircleImage from '../../images/circle_6091562.png';
export default function Header() {
  // initial={{}} => مشخص کنیم از مرحله ابتدایی  از کجا شروع بشه starting-pont
  //animate={{ y: -10 }} => ending-point
  return (
    <div className="z-20 flex w-1/2  h-1/6 border-b border-pink-300/80 p-2 items-end">
      <ImageMotion src={CircleImage} alt="ImageMotion" width={80} height={80} />
      <motion.div initial={{ y: -200 }} animate={{ y: -10 }}>
        <span className="text-pink-300 text-lg font-semibold">Open Motion Pizza</span>
      </motion.div>
    </div>
  );
}
