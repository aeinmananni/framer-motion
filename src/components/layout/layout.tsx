import { useState } from 'react';
import { ButtonMotion, ItemsMotion } from '../../components';
import type { ItemsType } from '../../models';

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
    <div className="flex flex-col gap-3 w-1/4 h-max   ">
      <h1 className="text-xl text-pink-300 border-b p-2">{title}</h1>
      <div className="flex flex-col gap-3 h-max w-full  overflow-y-auto">
        {items.map(it => (
          <ItemsMotion
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
          <div className="w-full flex item-center gap-2">
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
          </div>
        )}
      </div>
    </div>
  );
}
