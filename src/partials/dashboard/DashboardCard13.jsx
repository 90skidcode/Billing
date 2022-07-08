import React, {useState,useEffect} from 'react';
import PostApi from '../../Services/PostApi';

function DashboardCard13() {

  const [list, setList] = useState([]);
  const [listTotal, setListTotal] = useState(0);
  useEffect(() => {
    let data = {"list_key":"PaymentCard","range":"Daywise" };
    PostApi(data).then((res) => {
      let tableresponce = res.responcePostData.data.result;
      setList(tableresponce);
    });
  }, []); 
 
  return (
    <div className="col-span-full xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Income</h2>
      </header>
      <div className="p-3">
        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2">Today</header>
          <ul className="my-1">
            {/* Item */
            list.map((e)=>(
            <li className="flex px-2">              
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center font-medium text-slate-800 hover:text-slate-900">{e.pos_invoice_payment}</div>
                  <div className="shrink-0 self-start ml-2">
                  <span className="font-medium text-green-500">₹ { Math.round(Number(e.invoice_amount)).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </li>
            ))}
            <li className="flex px-2">              
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center font-bold text-xl text-slate-800 hover:text-slate-900">Total</div>
                  <div className="shrink-0 self-start ml-2">
                  <span className="font-bold text-xl text-green-500">₹ { ((list.map((e)=> Number(e.invoice_amount))).reduce((a, b) => a + b, 0)).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard13;
