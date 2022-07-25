import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './css/style.scss';
import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard1';
import Pos from './pages/Pos';
import TableList from './pages/TableList';
import FormFields from './pages/FormFields';
import LoginPage from './pages/LoginPage';
import BillReport from './partials/report/BillReport';
import ReportFullList from './partials/report/ReportFullList';

import SalesByMonth from './partials/report/SalesByMonth';
import SalesByDay from './partials/report/SalesByDay';
import Top10Count from './partials/report/Top10Count';
import Low10Count from './partials/report/Low10Count';
import Top10Amount from './partials/report/Top10Amount';
import Low10Amount from './partials/report/Low10Amount';
import NonSelling from './partials/report/NonSelling';

function App() {
  const location = useLocation();
  const [pageLoader, setPageLoader] = useState(true);
  const [pageLoaderCounter, setPageLoaderCounter] = useState(1);
  const [pageLoaderCheckCounter, setPageLoaderCheckCounter] = useState(1);
  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);
  return (
    <>
      <div id="loading-screen" className={`w-full h-full fixed top-0 left-0 bg-white opacity-80 z-50 ${pageLoader ? 'hidden' : 'block'}`}>
        <span className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
          <svg role="status" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
        </span>
      </div>
      
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/pos" element={<Pos pageLoader={pageLoader} setPageLoader={setPageLoader} pageLoaderCounter={pageLoaderCounter} setPageLoaderCounter={setPageLoaderCounter} pageLoaderCheckCounter={pageLoaderCheckCounter} setPageLoaderCheckCounter={setPageLoaderCheckCounter} />} />
        <Route exact path="/list/:type" element={<TableList pageLoader={pageLoader} setPageLoader={setPageLoader} pageLoaderCounter={pageLoaderCounter} setPageLoaderCounter={setPageLoaderCounter} pageLoaderCheckCounter={pageLoaderCheckCounter} setPageLoaderCheckCounter={setPageLoaderCheckCounter} />} />
       
        <Route exact path="/report/list" element={<ReportFullList pageLoader={pageLoader} setPageLoader={setPageLoader} pageLoaderCounter={pageLoaderCounter} setPageLoaderCounter={setPageLoaderCounter} pageLoaderCheckCounter={pageLoaderCheckCounter} setPageLoaderCheckCounter={setPageLoaderCheckCounter} />} />
        <Route exact path="/report/month" element={<SalesByMonth pageLoader={pageLoader} setPageLoader={setPageLoader} pageLoaderCounter={pageLoaderCounter} setPageLoaderCounter={setPageLoaderCounter} pageLoaderCheckCounter={pageLoaderCheckCounter} setPageLoaderCheckCounter={setPageLoaderCheckCounter} />} />
        <Route exact path="/report/day" element={<SalesByDay pageLoader={pageLoader} setPageLoader={setPageLoader} pageLoaderCounter={pageLoaderCounter} setPageLoaderCounter={setPageLoaderCounter} pageLoaderCheckCounter={pageLoaderCheckCounter} setPageLoaderCheckCounter={setPageLoaderCheckCounter} />} />
        <Route exact path="/report/top10count" element={<Top10Count pageLoader={pageLoader} setPageLoader={setPageLoader} pageLoaderCounter={pageLoaderCounter} setPageLoaderCounter={setPageLoaderCounter} pageLoaderCheckCounter={pageLoaderCheckCounter} setPageLoaderCheckCounter={setPageLoaderCheckCounter} />} />
        <Route exact path="/report/low10count" element={<Low10Count pageLoader={pageLoader} setPageLoader={setPageLoader} pageLoaderCounter={pageLoaderCounter} setPageLoaderCounter={setPageLoaderCounter} pageLoaderCheckCounter={pageLoaderCheckCounter} setPageLoaderCheckCounter={setPageLoaderCheckCounter} />} />
        <Route exact path="/report/top10amount" element={<Top10Amount pageLoader={pageLoader} setPageLoader={setPageLoader} pageLoaderCounter={pageLoaderCounter} setPageLoaderCounter={setPageLoaderCounter} pageLoaderCheckCounter={pageLoaderCheckCounter} setPageLoaderCheckCounter={setPageLoaderCheckCounter} />} />
        <Route exact path="/report/low10amount" element={<Low10Amount pageLoader={pageLoader} setPageLoader={setPageLoader} pageLoaderCounter={pageLoaderCounter} setPageLoaderCounter={setPageLoaderCounter} pageLoaderCheckCounter={pageLoaderCheckCounter} setPageLoaderCheckCounter={setPageLoaderCheckCounter} />} />
        <Route exact path="/report/nonselling" element={<NonSelling pageLoader={pageLoader} setPageLoader={setPageLoader} pageLoaderCounter={pageLoaderCounter} setPageLoaderCounter={setPageLoaderCounter} pageLoaderCheckCounter={pageLoaderCheckCounter} setPageLoaderCheckCounter={setPageLoaderCheckCounter} />} />  <Route exact path="/report/:type" element={<BillReport pageLoader={pageLoader} setPageLoader={setPageLoader} pageLoaderCounter={pageLoaderCounter} setPageLoaderCounter={setPageLoaderCounter} pageLoaderCheckCounter={pageLoaderCheckCounter} setPageLoaderCheckCounter={setPageLoaderCheckCounter} />} />
       
        <Route exact path="/list/:type/:id" element={<FormFields pageLoader={pageLoader} setPageLoader={setPageLoader} pageLoaderCounter={pageLoaderCounter} setPageLoaderCounter={setPageLoaderCounter} pageLoaderCheckCounter={pageLoaderCheckCounter} setPageLoaderCheckCounter={setPageLoaderCheckCounter} />} />
        <Route path="/" element={<LoginPage pageLoader={pageLoader} setPageLoader={setPageLoader} pageLoaderCounter={pageLoaderCounter} setPageLoaderCounter={setPageLoaderCounter} pageLoaderCheckCounter={pageLoaderCheckCounter} setPageLoaderCheckCounter={setPageLoaderCheckCounter} />} />
        <Route path="/*" element={<LoginPage pageLoader={pageLoader} setPageLoader={setPageLoader} pageLoaderCounter={pageLoaderCounter} setPageLoaderCounter={setPageLoaderCounter} pageLoaderCheckCounter={pageLoaderCheckCounter} setPageLoaderCheckCounter={setPageLoaderCheckCounter} />} />
      </Routes>

    </>
  );
}

export default App;
