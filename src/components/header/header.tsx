import { ImageMotion } from '../custom';
import { motion } from 'framer-motion';
import CircleImage from '../../images/circle_6091562.png';
export default function Header() {
  // initial={{}} => مشخص کنیم از مرحله ابتدایی  از کجا شروع بشه starting-pont
  //animate={{ y: -10 }} => ending-point
  /**
   *  transition:{{type:"spring"}}
   *  type :
   *        ما حالت های مختلفی برای نمایش المان هاداریم
   *        spring بعضی از ان ها بصورت پیشفرض روی حالت
   *        قرار دارند
   *        1- spring :
   *                    یک حالت فنری نرم برای المان تنظیم میکند
   *                    ما زمانی که روی این حالت تنظیم میکنیم
   *                    میتوانیم از یک سری قابلیت ها مربوط به همین
   *                    تایپ استفاده کنیم
   *           مثال :{
   *                    stiffness:
   *                            میزان سختی نمایش حالت فنری
   *                            هرچی مقدارکمترباشد حالت نرم
   *                             خواهد شد
   *
   *
   *                 }
   *
   *
   *
   *        2- toween :
   *                    حالت فنری را ازبین میبرد و درهمان جایی
   *                    که تنظیم شده قرار میگیرد
   *                    حالت پیشفرض روی صد تنظیم شده است
   *
   *
   */
  return (
    <div className="z-20 flex w-1/2  h-1/6  p-2 items-end">
      <ImageMotion src={CircleImage} alt="ImageMotion" width={80} height={80} />
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: -10 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="text-pink-300 text-lg font-semibold border-b border-pink-300/80 w-full p-1"
      >
        Open Motion Pizza
      </motion.div>
    </div>
  );
}
