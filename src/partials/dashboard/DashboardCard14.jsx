import React, { useState, useEffect } from 'react';
import PostApi from '../../Services/PostApi';

function DashboardCard14({ details }) {
   return (
    <div className="col-span-3 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Summary</h2>
      </header>
      <div className="p-3">
        {/* Card content */}
        {/* "Today" group */}
        <div>
          <ul className="my-1">
            {/* Item */}
            <li className="flex px-2">
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center font-medium text-slate-800 hover:text-slate-900">Cash</div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-green-500">₹ {((details.map((e) => e.pos_invoice_payment === "Cash" ? Number(e.pos_invoice_amount) : 0)).reduce((a, b) => a + b, 0)).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex px-2">
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center font-medium text-slate-800 hover:text-slate-900">Card</div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-green-500">₹ {((details.map((e) => e.pos_invoice_payment === "Card" ? Number(e.pos_invoice_amount) : 0)).reduce((a, b) => a + b, 0)).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex px-2">
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center font-medium text-slate-800 hover:text-slate-900">UPI</div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-green-500">₹ {((details.map((e) => e.pos_invoice_payment === "UPI" ? Number(e.pos_invoice_amount) : 0)).reduce((a, b) => a + b, 0)).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex px-2">
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center font-bold text-xl text-slate-800 hover:text-slate-900">Total</div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-bold text-xl text-green-500">₹ {((details.map((e) => Number(e.pos_invoice_amount))).reduce((a, b) => a + b, 0)).toLocaleString('en-IN')}</span>
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

export default DashboardCard14;
