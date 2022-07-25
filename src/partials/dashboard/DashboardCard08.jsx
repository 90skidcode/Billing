import React, { useState, useEffect } from 'react';
import PostApi from '../../Services/PostApi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard08() {
  const [chartData, setChartData] = useState();
  useEffect(()=>{
    let Commonreport = { "list_key": "Commonreport", "range": "Monthwise", "year_val": "2022" };
    PostApi(Commonreport).then((e) => {
      var p = e?.responcePostData?.data?.result;
      var data = [];
      for (var key in p) {
        (p.hasOwnProperty(key)) ? data.push(Number(p[key])):'';
      } 
      setChartData(data);
    })
  },[]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: '',
      },
    },
  };
  
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: chartData,
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
      },
      
    ],
  };
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Sales by Month</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <Bar options={options} data={data} />
    </div>
  );
}

export default DashboardCard08;
