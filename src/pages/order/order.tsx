import { useFramerMotionStore } from '../../store';

export default function Order() {
  const order = useFramerMotionStore(s => s.order);

  console.log('ORDERS : ', order);
  return (
    <div>
      <h1>Orders</h1>
    </div>
  );
}
