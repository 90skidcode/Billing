import { useState, useEffect } from 'react';
import PostApi from '../../services/PostApi';
import DashboardCard081 from '../dashboard/DashboardCard081';
import Header from '../Header';
import Sidebar from '../Sidebar';

function SalesByDay() {
  const [chartData, setChartData] = useState();
  const [chartLabel, setChartLabel] = useState();
  const getMonthData = (month) => {
    let Commonreport = { "list_key": "Commonreport", "range": "Daywise", "month_val": month ? month : document.getElementById('month').value, "year_val": "2022" };
    PostApi(Commonreport).then((e) => {
      var p = e?.responcePostData?.data?.result;
      var data = [];
      var label = [];
      for (var key in p) {
        var l = key.split('-');
        console.log(l);
        label.push(l[2]);
        (p.hasOwnProperty(key)) ? data.push(Number(p[key])) : '';
      }
      setChartData(data);
      setChartLabel(label);
    })
  }

  useEffect(() => {
    getMonthData('01');
  }, [])

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
                <header className="px-5 py-4 border-b border-slate-100 flex justify-between">
                  <h2 className="font-semibold text-slate-800">Sales by Day</h2>
                  <select onChange={() => getMonthData('')} id="month">
                    <option value="1" key="">Jan</option>
                    <option value="2" key="">Feb</option>
                    <option value="3" key="">Mar</option>
                    <option value="4" key="">Apr</option>
                    <option value="5" key="">May</option>
                    <option value="6" key="">June</option>
                    <option value="7" key="">July</option>
                    <option value="8" key="">Aug</option>
                    <option value="9" key="">Sept</option>
                    <option value="10" key="">Oct</option>
                    <option value="11" key="">Nov</option>
                    <option value="12" key="">Dec</option>
                  </select>
                </header>
    <div className='overflow-auto h-[80vh]'>
                <table className="w-full divide-y divide-gold-600 ">
                  <thead className="bg-slate-200 text-slate-500">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">S.No</th>
                      <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {
                      chartData?.map((data, i) => (
                        <tr key={i}>
                          <td className="px-6 py-2 whitespace-nowrap text-slate-500 text-sm ">{++i}</td>
                          <td className="px-6 py-2 whitespace-nowrap text-slate-500 text-sm ">{chartLabel[--i]}</td>
                          <td className="px-6 py-2 whitespace-nowrap text-slate-500 text-sm ">₹ {Number(data).toLocaleString('en-IN')}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                </div>
              </div>
              <div className='col-span-6'>
                <DashboardCard081 />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default SalesByDay;
