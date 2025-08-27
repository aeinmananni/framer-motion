import { create } from 'zustand';

type OrderType = { base: string; toppings: string[] };
type OrderFunctionType = OrderType | ((c: OrderType) => OrderType);
type StoreType = {
  order: OrderType;
  setOrder: (v: OrderFunctionType) => void;
};

export const useFramerMotionStore = create<StoreType>(_set => ({
  order: {
    base: '',
    toppings: [],
  },
  setOrder: (v: OrderFunctionType) => {
    _set(state => ({
      order: typeof v === 'function' ? v(state.order) : v,
    }));
  },
}));
