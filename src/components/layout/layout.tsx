import { useState } from 'react';
import { ButtonMotion, ItemsMotion } from '../../components';
import type { ItemsType } from '../../models';
import { motion } from 'framer-motion';
type LayoutProps = {
  title: string;
  items: ItemsType[];
  handelNavigate1?: () => void;
  handelNavigate2?: () => void;
  isMulti?: boolean;
  onChange?: (v: number | number[]) => void;
};

export default function Layout({
  isMulti,
  title,
  items,
  handelNavigate1,
  handelNavigate2,
  onChange,
}: LayoutProps) {
  const [activeId, setActiveId] = useState<number>(0);
  const [activeIds, setActiveIds] = useState<number[]>([]);
  const classButtonMotion = 'p-1 rounded-full border border-pink-700 text-pink-700 w-1/4';

  return (
    <motion.div
      initial={{ x: '100%', opacity: 0.2 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 140 }}
      className="flex flex-col gap-3 w-1/3 h-max"
    >
      <h1 className="text-xl text-pink-300 border-b p-2">{title}</h1>
      <div className="flex flex-col gap-3 h-max w-full  overflow-y-auto overflow-x-hidden">
        {items.map(it => (
          <ItemsMotion
            whileHover={{ x: 6 }}
            transition={{ type: 'spring', stiffness: 600 }}
            onClick={() => {
              if (isMulti) {
                if (!activeIds.includes(it.id)) {
                  const newIds = [...activeIds, it.id];
                  setActiveIds(newIds);
                  onChange?.(newIds);
                }
              } else {
                setActiveId(it.id);
                onChange?.(it.id);
              }
            }}
            key={it.id}
            title={it.title}
            active={isMulti ? activeIds.includes(it.id) : activeId === it.id}
          />
        ))}
        {(activeId > 0 || activeIds.length > 0) && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="w-full flex item-center gap-2 p-3"
          >
            {handelNavigate1 && (
              <ButtonMotion onClick={handelNavigate1} className={classButtonMotion}>
                Back
              </ButtonMotion>
            )}
            {handelNavigate2 && (
              <ButtonMotion onClick={handelNavigate2} className={classButtonMotion}>
                Next
              </ButtonMotion>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
