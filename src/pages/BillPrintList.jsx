import React from "react";
import svsqr from "../images/svs-qr.png";
import { UtilsJson } from "../utils/UtilsJson";
function BillPrintList({ billDetails }) {
  const calculateGST = (value) => {
    let cost = 0;
    value.forEach((element) => {
      cost += element.pos_bill_price * element.pos_bill_quantity;
    });
    return ((cost / 100) * 2.5).toFixed(2);
  };

  const calculateBill = (value) => {
    let cost = 0;
    value.forEach((element) => {
      cost += element.pos_bill_price * element.pos_bill_quantity;
    });
    return Math.round((cost / 100) * 5 + cost);
  };
  const dateStr = () => {
    var date = new Date();
    return ("00" + (date.getMonth() + 1)).slice(-2) +
      "/" +
      ("00" + date.getDate()).slice(-2) +
      "/" +
      date.getFullYear() +
      " " +
      ("00" + date.getHours()).slice(-2) +
      ":" +
      ("00" + date.getMinutes()).slice(-2);
  }
  return (
    <div className="col-span-full hidden sm:col-span-4 shadow-lg rounded-sm border bg-white border-slate-200 print:block print:border-none print:shadow-none">
      <div className="print:block text-center ">
        <h1 className="text-md font-bold"> {UtilsJson.companyname}</h1>
        <h4 className="text-xs">{JSON.parse(sessionStorage.getItem('branch'))[0]?.pos_branch_address_1},</h4>
          <h4 className="text-xs">{JSON.parse(sessionStorage.getItem('branch'))[0]?.pos_branch_address_2},</h4>
          <h4 className="text-xs">{JSON.parse(sessionStorage.getItem('branch'))[0]?.pos_branch_city}, India.</h4>
          <p className="text-xs">Phone : +91 {JSON.parse(sessionStorage.getItem('branch'))[0]?.pos_branch_phone}</p>
        
      </div>
      <div className="print:block justify-between border-b-2 text-center">
        <p className="text-[10px] font-bold">Bill No :{ billDetails[0]?.pos_invoice_no }</p>
        <p className="text-[10px] font-bold">Date : { dateStr() }</p>
      </div>
      <div className="items-center border border-slate-100 text-xs p-2 flex flex-col  print:h-auto print:p-0 print:text-[10px] print:border-0 justify-between">
        {/* Table */}
        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm print:border-b-2">
              <tr>
                <th className="p-2 print:border-slate-200  print:border-none print:p-0 print:text-[10px]">
                  <div className="font-semibold text-left">Item</div>
                </th>
                <th className="p-2 print:border-slate-200  print:border-none print:p-0 print:text-[10px]">
                  <div className="font-semibold text-left">Varity</div>
                </th>
                <th className="p-2 print:border-slate-200  print:border-none print:p-0 print:text-[10px]">
                  <div className="font-semibold text-center">Quantity</div>
                </th>
                <th className="p-2 print:border-slate-200  print:border-none print:p-0 print:text-[10px]">
                  <div className="font-semibold text-right">Price</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-xs font-base divide-y divide-slate-100">
              {/* Row  */}
              {billDetails
                ? billDetails.map((key, index) => (
                  <tr className=" print:border-b" key={index}>
                    <td className="p-2 print:border-slate-200  print:border-none print:p-0 print:text-[10px]">
                      <div className="flex items-center uppercase">
                        {key.pos_products_name}
                      </div>
                    </td>
                    <td className="p-2 print:border-slate-200  print:border-none print:p-0 print:text-[10px] lowercase">
                      {key.pos_attribute_name}
                    </td>
                    <td className="p-2 print:border-slate-200  print:border-none print:p-0 print:text-[10px]">
                      <div className="text-center text-black font-bold">
                        <input
                          type="number"
                          name={key.name}
                          data-code={key.code}
                          readOnly

                          value={key.pos_bill_quantity}
                          className="h-6 w-10 text-xs text-center uppercase print:border-none border-slate-200 text-slate-400 bg-slate-50 print:bg-slate-400 rounded-sm font-semibold p-2"
                        />
                      </div>
                    </td>
                    <td className="p-2 print:border-slate-200 print:border-none text-left print:p-0 print:text-[10px]">
                      <div className="text-right">
                        Rs.{(key.pos_bill_quantity * key.pos_bill_price).toFixed(2)}
                      </div>
                    </td>
                  </tr>
                ))
                : ""}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col justify-between text-right w-full">
          <div className="border-t border-slate-200 flex py-2 justify-between">
            <span>CGST (2.5%)</span>
            <span>Rs.{calculateGST(billDetails)}</span>
          </div>
          <div className="border-t border-slate-200 flex py-2 justify-between">
            <span>SGST (2.5%)</span>
            <span>Rs.{calculateGST(billDetails)}</span>
          </div>
          <div className="border-t border-b border-slate-200 flex py-2 justify-between">
            <span>Total due (including taxes)</span>
            <span className=" text-green-600 print:text-black text-sm font-bold">
              Rs.{calculateBill(billDetails)}
            </span>
          </div>
          <div className="print:flex text-center py-3 flex-col items-center hidden">
            {/* <p className="text-[10px] text-center mt-3">
              Scan to order us on website
            </p> */}
            {/* <img
              className="text-center my-1"
              src={svsqr}
              width="75"
              height="75"
              alt="svs-qr"
            /> */}
            <p className="text-[10px] text-center my-1 font-bold">
              
            </p>
            <p className=" font-bold text-base my-2">

              Thank You Vist Again !!
            </p>
          </div>
          <div className="flex justify-between print:hidden">

            <button
              onClick={() => setModalPopUpInvoiceFlag('hidden')}
              className="btn border-slate-200 hover:border-slate-300 text-indigo-500 w-full"
            >
              Close
            </button>
            <button
              onClick={() => window.print()}
              className="btn border-slate-200 hover:border-slate-300 text-indigo-500 w-full"
            >
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillPrintList;
