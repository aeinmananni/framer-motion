import { ImageMotion } from '../custom';
import CircleImage from '../../images/circle_6091562.png';
export default function Header() {
  return (
    <div className="z-20 flex w-1/2  h-1/6 border-b border-pink-300/80 p-2 items-end">
      <ImageMotion src={CircleImage} alt="ImageMotion" width={80} height={80} />
      <span className="text-pink-300 text-lg font-semibold">Open Motion Pizza</span>
    </div>
  );
}
