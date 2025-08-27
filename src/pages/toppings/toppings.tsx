import { LayoutMotion } from '../../components';
import { useNavigate } from 'react-router';
import { TOPPINGSE_ITEMS } from '../base/data';
import { useFramerMotionStore } from '../../store';

export default function Toppings() {
  const setOrder = useFramerMotionStore(s => s.setOrder);
  const navigate = useNavigate();
  return (
    <>
      <LayoutMotion
        title={'Step 2: Choose Your Toppings'}
        items={TOPPINGSE_ITEMS}
        handelNavigate1={() => navigate('/base')}
        handelNavigate2={() => navigate('/order')}
        isMulti={true}
        onChange={v => {
          TOPPINGSE_ITEMS.filter(it => (v as number[]).includes(it.id)).map(it =>
            setOrder(prev => ({
              ...prev,
              toppings: !prev?.toppings?.includes(it.title)
                ? [...prev.toppings, it.title]
                : prev.toppings,
            }))
          );
        }}
      />
    </>
  );
}
