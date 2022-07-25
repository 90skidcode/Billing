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

function DashboardCard081() {
  const [chartData, setChartData] = useState();
  const [chartLabel, setChartLabel] = useState(); 
  const getMonthData = (month) => {
    let Commonreport = {"list_key":"Commonreport","range":"Daywise","month_val":month ? month : document.getElementById('month').value,"year_val":"2022"};
    PostApi(Commonreport).then((e) => {
      var p = e?.responcePostData?.data?.result;
      var data = [];
      var label = [];
      for (var key in p) {
        var l = key.split('-');
        console.log(l);
        label.push(l[2]);
        (p.hasOwnProperty(key)) ? data.push(Number(p[key])):'';
      } 
      setChartData(data);
      setChartLabel(label);
    })
  }

  useEffect(()=>{
    getMonthData('01');
  },[])


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
  
  const labels = chartLabel;
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: chartData,
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
      }      
    ],
  };
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex justify-between">
        <h2 className="font-semibold text-slate-800">Sales by Day</h2>
        <select onChange={()=>getMonthData('')} id="month">
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
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <Bar options={options} data={data}  />
    </div>
  );
}

export default DashboardCard081;
