import React, { useState, useEffect,useMemo } from 'react';
import LineChart from '../../charts/LineChart02';
import PostApi from '../../Services/PostApi';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard08() {

  const [chartData, setChartData] = useState({});
  useMemo(() => {
    let Commonreport = { "list_key": "Commonreport", "range": "Monthwise", "year_val": "2022" };
    PostApi(Commonreport).then((e) => {
      var p = e?.responcePostData?.data?.result;
      var data = [];
      for (var key in p) {
        if (p.hasOwnProperty(key)) data.push(Number(p[key]));
      }

      setChartData({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Branch1',
            data: data,
            borderColor: tailwindConfig().theme.colors.indigo[500],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
          },
        ],
      })

      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      console.log(chartData, data);
    });
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(chartData);
  }, [])

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Sales Over Time (all stores)</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <LineChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard08;
