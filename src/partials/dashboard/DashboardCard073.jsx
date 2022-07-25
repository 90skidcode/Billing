import React, { useEffect, useState } from 'react';
import PostApi from '../../Services/PostApi';

function DashboardCard073() {
  const [data, setData] = useState([]);
  var sno = 1;
  useEffect(() => {
    let data = {"list_key":"ProductpriceLow"};
    PostApi(data).then((res) => {
      let tableresponce = res.responcePostData.data.result;
      setData(tableresponce);
    });
  }, []);

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800 text-sm">Low selling product by Amount</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
              <th className="p-2">
                  <div className="font-semibold text-left">S.No</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Product</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-right">Amount</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-right">Count</div>
                </th>

              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */

                data?.map(item => (
                  <tr key={Math.random()}>
                     <td className="p-2">
                      <div className="text-left text-xs">{sno++}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-left text-xs">{item.pos_products_name}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-right  text-xs text-red-500">₹ {Number(item.amount).toLocaleString('en-IN')}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-right ">{item.prod_count}</div>
                    </td>
                  </tr>
                ))}

            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default DashboardCard073;
