import React, {useState,useEffect} from 'react';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-03.svg';
import EditMenu from '../EditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';
import PostApi from '../../Services/PostApi';
function DashboardCard03(props) {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
      '06-01-2021', '07-01-2021', '08-01-2021',
      '09-01-2021', '10-01-2021', '11-01-2021',
      '12-01-2021', '01-01-2022', '02-01-2022',
      '03-01-2022', '04-01-2022', '05-01-2022',
      '06-01-2022', '07-01-2022', '08-01-2022',
      '09-01-2022', '10-01-2022', '11-01-2022',
      '12-01-2022', '01-01-2023',
    ],
    datasets: [
      // Indigo line
      {
        data: [
          540, 466, 540, 466, 385, 432, 334,
          334, 289, 289, 200, 289, 222, 289,
          289, 403, 554, 304, 289, 270, 134,
          270, 829, 344, 388, 364,
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
      // Gray line
      {
        data: [
          689, 562, 477, 477, 477, 477, 458,
          314, 430, 378, 430, 498, 642, 350,
          145, 145, 354, 260, 188, 188, 300,
          300, 282, 364, 660, 554,
        ],
        borderColor: tailwindConfig().theme.colors.slate[300],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
        clip: 20,
      },
    ],
  };

  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(0);
  useEffect(() => {
    let data = { "list_key": "GetDashCard", "sum_by": "price", "type": "sum", "range": "Monthwise", "branch": JSON.parse(sessionStorage.getItem('details'))[0].pos_user_branch, "product": "" };
    PostApi(data).then((res) => {
      let tableresponce = res.responcePostData.data.result[0].bill_result;
      setCount(tableresponce);
    });
  }, []);
  const filterby = (type) => {
    let data = { "list_key": "GetDashCard", "sum_by": "price", "type": "sum", "range": "Monthwise", "branch": type};
    PostApi(data).then((res) => {
      let tableresponce = res.responcePostData.data.result[0]?.bill_result || 0;
      setCount(tableresponce);
      setFlag(flag ? false : true);
    });
  }

  useEffect(() => {
  }, [flag])
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 03" />
          {/* Menu button */
            JSON.parse(sessionStorage.getItem('details'))[0].pos_user_branch == 'All' ?
            <EditMenu className="relative inline-flex">
              <li  className=' cursor-pointer'>
                <p className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" onClick={()=>filterby('All')}>All</p>
              </li>
              {
                props.branchList.map((e) => (
                  <li  className=' cursor-pointer' key={e.pos_branch_code}>
                    <p className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" onClick={()=>filterby(e.pos_branch_code)}>{e.pos_branch_code}</p>
                  </li>
                ))
              }
            </EditMenu>
            : ''
        }
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Monthly</h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div>
        <div className="flex items-start">
        <div className="text-3xl font-bold text-slate-800 mr-2">₹{Math.round(Number(count) ? Number(Number(count)): 0).toLocaleString('en-IN')}</div>
          {/* <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div> */}
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        {/* <LineChart data={chartData} width={389} height={128} /> */}
      </div>
    </div>
  );
}

export default DashboardCard03;
