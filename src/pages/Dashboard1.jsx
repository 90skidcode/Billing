import React, { useState, useEffect } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';
import PostApi from '../Services/PostApi';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [branchList, setBranchList] = useState([]);
  useEffect(() => {
    let branch = { list_key: "Mastertable", mastertables: "pos_branch" };
    PostApi(branch).then((e) => {
      setBranchList(e?.responcePostData?.data?.result?.pos_branch || []);
    });
  }, [])

  !JSON.parse(sessionStorage.getItem('details')) ? location.href = '/login' : '';

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Acme Plus) */}
              <DashboardCard01 branchList={branchList} setBranchList={setBranchList} />
              {/* Line chart (Acme Advanced) */}

              {JSON.parse(sessionStorage.getItem('details'))[0].pos_user_branch == 'All' ? <>
                <DashboardCard02 branchList={branchList} setBranchList={setBranchList} />
                <DashboardCard03 branchList={branchList} setBranchList={setBranchList} />
              </>
                : ''}
              <DashboardCard13 />
             
            </div>

          </div>
        </main>



      </div>
    </div>
  );
}

export default Dashboard;