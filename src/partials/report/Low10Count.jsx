import DashboardCard07 from '../dashboard/DashboardCard07';
import Header from '../Header';
import Sidebar from '../Sidebar';
import {useState} from 'react';
import DashboardCard071 from '../dashboard/DashboardCard071';
function Low10Count() {
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
              <DashboardCard071/>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Low10Count;
