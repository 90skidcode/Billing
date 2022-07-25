import { useState, useEffect } from 'react';
import PostApi from '../../services/PostApi';
import DashboardCard08 from '../dashboard/DashboardCard08';
import Header from '../Header';
import Sidebar from '../Sidebar';

function SalesByMonth() {
  const [tableData, settableData] = useState();
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  useEffect(() => {
    let Commonreport = { "list_key": "Commonreport", "range": "Monthwise", "year_val": "2022" };
    PostApi(Commonreport).then((e) => {
      var p = e?.responcePostData?.data?.result;
      var data = [];
      for (var key in p) {
        (p.hasOwnProperty(key)) ? data.push(Number(p[key])) : '';
      }
      settableData(data);
    });
  }, []);
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
              <div className='col-span-6 bg-white'>
                <header className="px-5 py-4 border-b border-slate-100 flex items-center">
                  <h2 className="font-semibold text-slate-800">Sales by Month</h2>
                </header>
                <table className="w-full divide-y divide-gold-600">
                  <thead className="bg-slate-200 text-slate-500">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">S.No</th>
                      <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Month</th>
                      <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {
                      tableData?.map((data, i) => (
                        <tr key={i}>
                          <td className="px-6 py-2 whitespace-nowrap text-slate-500 text-sm ">{++i}</td>
                          <td className="px-6 py-2 whitespace-nowrap text-slate-500 text-sm ">{labels[--i]}</td>
                          <td className="px-6 py-2 whitespace-nowrap text-slate-500 text-sm ">₹ {Number(data).toLocaleString('en-IN')}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              <div className='col-span-6'>
                <DashboardCard08 />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default SalesByMonth;
