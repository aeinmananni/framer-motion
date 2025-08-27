import { ButtonMotion } from '../../components';
import { useNavigate } from 'react-router';
export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="w-1/3  h-1/3 flex flex-col justify-evenly items-center">
      <h1 className="text-2xl text-pink-300  font-semibold">Wellcom To FramerMotion Pizza</h1>
      <ButtonMotion
        onClick={() => navigate('/base')}
        className="border  border-pink-300 w-1/2 p-2 rounded-full text-lg text-pink-300"
      >
        Create your Pizza
      </ButtonMotion>
    </div>
  );
}
