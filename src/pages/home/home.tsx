import { HeaderMotion } from '../../components';
import { Outlet } from 'react-router';
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center p-1 gap-2">
      <HeaderMotion />
      <div className="flex justify-center items-center w-full h-full   overflow-y-auto p-2">
        <Outlet />
      </div>
    </div>
  );
}
