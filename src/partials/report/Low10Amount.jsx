
import Header from '../Header';
import Sidebar from '../Sidebar';
import {useState} from 'react';
import DashboardCard073 from '../dashboard/DashboardCard073';
function Low10Amount() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-slate-200">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1  overflow-y-auto overflow-x-hidden">
          <main>
            <div className="col-span-full m-2 grid grid-cols-12 gap-2 md:col-span-2 shadow-lg rounded-sm print:hidden no-scrollbar overflow-y-auto h-[98vh]">
              <DashboardCard073/>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Low10Amount;
