import { BASE_ITEMS } from './data';
import { LayoutMotion } from '../../components';
import { useNavigate } from 'react-router';
import { useFramerMotionStore } from '../../store';
export default function Base() {
  const setOrder = useFramerMotionStore(s => s.setOrder);
  const navigate = useNavigate();

  return (
    <>
      <LayoutMotion
        title={'Step 1: Choose Your Base'}
        items={BASE_ITEMS}
        handelNavigate1={() => navigate('/')}
        handelNavigate2={() => navigate('/toppings')}
        onChange={v => {
          setOrder(prev => ({ ...prev, base: BASE_ITEMS[v as number]?.title }));
        }}
      />
    </>
  );
}
