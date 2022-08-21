import React, { useState, useEffect, useCallback } from "react";
import svsqr from "../images/svs-qr.png";
import PostApi from "../services/PostApi";
import toast, { Toaster } from 'react-hot-toast';
import { UtilsJson } from "../utils/UtilsJson";


function ProductList({ tempproductList, settempproductList, productList }) {
  const [billingList, setbillingList] = useState([]);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [billNo, setbillNo] = useState('');
  const [invoiceDate, setinvoiceDate] = useState('');
  const [inputUpdate, setinputUpdate] = useState(false);
  const [paymentMode, setpaymentMode] = useState('Cash');
  const [flag, setFlag] = useState(false);
  const [saveFlag, setSaveFlag] = useState(false);



  useEffect(() => {
    setbillingList(billingList);
  }, [inputUpdate]);

  function checkAttribute(value) {
    setCurrentProduct(value);

    if (checkLength(value.pos_products_attribute) !== 1) {
      setSearchModalOpen(true);
      setTimeout(() => {
        document.getElementById("setFocus").focus();
      }, 0);
    } else if (checkLength(value.pos_products_attribute) === 1) {
      let v = value.pos_products_attribute[0];
      setCurrentProduct({ ...value, ['varity_code']: value.pos_products_attribute[0].pos_attribute_code });
      setToCart(value, v?.pos_attribute_name, v?.pos_products_price, v?.pos_attribute_code);
    }
  }

  const checkLength = (attributes) => {
    let attr = attributes.filter(i => Number(i.pos_products_price) > 0)
    return attr.length;
  }

  const setToCart = (value, varity, cost, varity_code) => {
    currentProduct['varity_code'] = varity_code;
    setFlag(true);
    setSearchModalOpen(false);
    let bill = billingList.find(
      (x) => x.code === value?.pos_products_code && x?.varity === varity
    );
    if (typeof bill != "undefined") {
      billingList.find(
        (x) => x.code === value?.pos_products_code && x?.varity === varity
      ).quantity =
        Number(
          billingList.find(
            (x) => x.code === value?.pos_products_code && x?.varity === varity
          ).quantity
        ) + 1;
      setbillingList(billingList);
    } else {
      let a = {
        name: value.pos_products_name,
        varity: varity,
        varity_code: varity_code,
        code: value.pos_products_code,
        category: value.pos_products_category,
        cost: cost,
        quantity: 1,
      };
      setbillingList((billingList) => [...billingList, a]);
    }
    setTimeout(() => {
      document.getElementById("setInputFocus").focus();
    }, 100);
    setinputUpdate(inputUpdate ? false : true);
  };

  const removeProduct = (value) => {
    if (
      confirm(
        "Are you sure want to remove the " + value.name + " from the bill ? "
      )
    ) {
      billingList.splice(billingList.indexOf(value), 1);
      setbillingList(billingList);
      setinputUpdate(inputUpdate ? false : true);
    }
  };

  var date = new Date();
  var dateStr =
    ("00" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    ("00" + date.getDate()).slice(-2) +
    "/" +
    date.getFullYear() +
    " " +
    ("00" + date.getHours()).slice(-2) +
    ":" +
    ("00" + date.getMinutes()).slice(-2);


  const updateValue = (e, item) => {
    const { value } = e.target;
    billingList.find(
      (x) => x.code === item.code && x.varity === item.varity
    ).quantity = Number(value);
    setbillingList(billingList);
    setinputUpdate(inputUpdate ? false : true);
  };

  const calculateTax = (item,value) => {
    let cost = 0;
    value.forEach((element) => {
      cost += Number(element.cost);
    });
    return ((cost / 100) * Number(item.pos_tax_percentage)).toFixed(2);
  };

  const calculateBill = (value) => {
    let cost = 0;
    let tax = JSON.parse(sessionStorage.getItem('tax')).map((item)=>Number(item.pos_tax_percentage)).reduce((partialSum, a) => partialSum + a, 0);
    value.forEach((element) => {
      cost += Number(element.cost) * Number(element.quantity);
    });
    return Math.round(((cost / 100) * tax) + cost);
  };

  const searchProduct = (e) => {
    const { value } = e.target;
    value
      ? settempproductList(
        tempproductList.filter(
          (item) =>
            item.pos_products_name.toLowerCase().indexOf(value) > -1 ||
            item.pos_products_code.toLowerCase().indexOf(value) > -1
        )
      )
      : settempproductList(productList);
  };

  useEffect(() => {
  }, [flag]);

  useEffect(() => {
    document.addEventListener("keydown", keyEventFn, false);
    return () => {
      document.removeEventListener("keydown", keyEventFn, false);
    };
  }, []);
  var keyCode = '';
  const keyEventFn = useCallback((event) => {
    if (event.key === "Enter" && keyCode == 'Enter') {
      //Do whatever when esc is pressed
      document.getElementById('search').focus();
    }
    if (event.key === "F8") {
      //Do whatever when esc is pressed
      document.getElementById('save-print').click();
    }
    keyCode = event.key;
  }, []);
  setInterval(() => {
    keyCode = ''
  }, 700);
  const billCheck = (bill) => {
    if (!bill.length)
      return false;
    var count = 0;
    bill.map((x) => count += x.quantity)
    if (!count)
      return false;
    return true;
  }
  const saveBill = (printFlag) => {
    setSaveFlag(true);
    if (billCheck(billingList)) {
      if (paymentMode) {
        let data = {
          list_key: "AddBill",
          tax_percentage: {},
          tax_amount: {},
          inv_amount: calculateBill(billingList),
          tablefields: [],
          payment_mode: paymentMode
        };      
        JSON.parse(sessionStorage.getItem('tax')).forEach((item)=>{
          data['tax_percentage'][item.pos_tax_name] = item.pos_tax_percentage;
          data['tax_amount'][item.pos_tax_name] = calculateTax(item,billingList);
        });
        billingList.forEach((e) => {
          data.tablefields.push({
            pos_bill_products: e.code,
            pos_bill_quantity: e.quantity,
            pos_bill_attribute: e.varity_code,
            pos_bill_price: Number(e.quantity) * Number(e.cost),
            pos_bill_category: e.category,
            status: "1",
          });
        });
        PostApi(data).then((e) => {
          setbillNo(e.responcePostData.data.invoice_no);
          setinvoiceDate(dateStr);
          if (printFlag) window.print();
          setbillingList([]);
          setpaymentMode('Cash');
          setSaveFlag(false);
          toast.success(`Bill Generated : ${billNo}`);
        });
      } else {
        toast.error("Select the Payment Methode");
        setSaveFlag(false);
      }
    } else {
      toast.error("No products to bill");
      setSaveFlag(false);
    }
  };

  !JSON.parse(sessionStorage.getItem('details')) ? location.href = '/login' : '';

  return (
    <>
      <div className="col-span-full md:col-span-6 shadow-lg rounded-sm border border-slate-200 print:hidden">
        <Toaster position="top-right" reverseOrder={false} />
        <header className="p-1 border-b border-slate-100">

          <input
            type="text"
            name=""
            id="search"
            autoFocus
            placeholder="Search Product Name / Code"
            className="h-8 w-full text-xs uppercase border-slate-200 text-slate-400 bg-slate-50 rounded-sm font-semibold p-2"
            onKeyUp={(e) => searchProduct(e)}
          />

        </header>
        <div className="grow">
          <div className="grow items-center border border-slate-100 text-xs p-2 no-scrollbar overflow-y-auto h-[90vh]">
            <div className="grid grid-cols-12 gap-2">
              {tempproductList.map((e) => (
                <div
                  tabIndex="0"
                  key={Math.random()}
                  className="py-1 border border-slate-400 bg-white border-l-4 cursor-pointer col-span-3 p-2 focus-visible:border-teal-900 focus-visible:outline-none  focus-visible:bg-teal-500 focus-visible:text-white"
                  onKeyPress={(ev) => ev.key === "Enter" && checkAttribute(e)}
                  onClick={() => checkAttribute(e)}
                >
                  <h6 className="w-full text-sm font-bold uppercase">
                    {e.pos_products_name}
                  </h6>
                  <p className="w-full text-xs font-extralight uppercase">
                    {e.pos_products_code}
                  </p>
                  <div className="w-100 justify-between pt-2 hidden">
                    <p className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 m-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>{" "}
                      {e.varity}
                    </p>
                    <p className=" font-medium flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 m-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>{" "}
                      {e.cost}.00
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-full sm:col-span-4 shadow-lg rounded-sm border bg-white border-slate-200 print:block print:border-none print:shadow-none">
        <div className="print:block text-center hidden">
          <h1 className="text-md font-bold"> {UtilsJson.companyname}</h1>
          <h4 className="text-xs">{JSON.parse(sessionStorage.getItem('branch'))[0]?.pos_branch_address_1},</h4>
          <h4 className="text-xs">{JSON.parse(sessionStorage.getItem('branch'))[0]?.pos_branch_address_2},</h4>
          <h4 className="text-xs">{JSON.parse(sessionStorage.getItem('branch'))[0]?.pos_branch_city}</h4>
          <p className="text-xs">Phone : +91 {JSON.parse(sessionStorage.getItem('branch'))[0]?.pos_branch_phone}</p>
        </div>
        <div className="print:block hidden justify-between border-b-2 text-center">
          <p className="text-[10px] font-bold">Bill No : {billNo}</p>
          <p className="text-[10px] font-bold">Date : {invoiceDate}</p>
        </div>
        <div className="items-center border border-slate-100 text-xs p-2 flex flex-col h-[97vh] print:h-auto print:p-0 print:text-[10px] print:border-0 justify-between">
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
                  <th className="p-2 print:border-slate-200 print:hidden">
                    <div className="font-semibold text-center"></div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-xs font-base divide-y divide-slate-100">
                {/* Row  */}
                {billingList
                  ? billingList.map((key, index) => (
                    <tr className=" print:border-b" key={index}>
                      <td className="p-2 print:border-slate-200  print:border-none print:p-0 print:text-[10px]">
                        <div className="flex items-center uppercase">{key.name}</div>
                      </td>
                      <td className="p-2 print:border-slate-200  print:border-none print:p-0 print:text-[10px] lowercase">
                        {key.varity}
                      </td>
                      <td className="p-2 print:border-slate-200  print:border-none print:p-0 print:text-[10px]">
                        <div className="text-center text-black font-bold">

                          <input
                            type="number"
                            name={key.name}
                            data-code={key.code}
                            id={
                              currentProduct.pos_products_code === key.code &&
                                currentProduct.varity_code === key.varity_code
                                ? "setInputFocus"
                                : ""
                            }
                            value={key.quantity}
                            onChange={(e) => updateValue(e, key)}
                            className="h-6 w-10 text-xs text-center uppercase print:border-none border-slate-200 text-slate-400 bg-slate-50 print:bg-slate-400 rounded-sm font-semibold p-2"
                          />
                        </div>
                      </td>
                      <td className="p-2 print:border-slate-200 print:border-none text-left print:p-0 print:text-[10px]">
                        <div className="text-right">
                          Rs.{Number(key.cost * key.quantity).toFixed(2)}
                        </div>
                      </td>
                      <td className="p-2 print:hidden">
                        <div
                          className=" text-red-500 p-1 cursor-pointer rounded-full print:hidden"
                          onClick={() => removeProduct(key)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  ))
                  : ""}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col justify-between text-right w-full">
            {
              JSON.parse(sessionStorage.getItem('tax')).map((item,i) => (
                item.status === '1' ? <div key={i} className="border-t border-slate-200 flex py-2 justify-between">
                  <span>{item.pos_tax_name} ({item.pos_tax_percentage}%)</span>
                  <span>Rs.{calculateTax(item,billingList)}</span>
                </div>
                  : ''
              ))
            }           
            <div className="border-t print:border-b border-slate-200 flex py-2 justify-between">
              <span>Total due (including taxes)</span>
              <span className=" text-green-600 print:text-black text-sm font-bold">
                Rs.{calculateBill(billingList)}
              </span>
            </div>
            <div className="print:flex text-center py-3 flex-col items-center hidden">
              {/* <p className="text-[10px] text-center mt-3">
                Scan to order us on website
              </p>
              <img
                className="text-center my-1"
                src={svsqr}
                width="75"
                height="75"
                alt="svs-qr"
              />
              <p className="text-[10px] text-center my-1 font-bold">
                
              </p> */}
              <p className=" font-bold text-base my-2">
                Thank You Vist Again !!
              </p>
            </div>
            <div className="flex justify-between print:hidden mb-2">
              <button onClick={() => setpaymentMode('Cash')} className={`btn border-slate-200 bg-indigo-300 hover:border-slate-800 text-black w-full ${paymentMode === 'Cash' ? 'border-3 border-slate-800' : ''}`}>
                Cash
              </button>
              <button
                onClick={() => setpaymentMode('Card')}
                className={`btn border-slate-200 hover:border-slate-800 bg-indigo-300 text-black w-full ${paymentMode === 'Card' ? 'border-3 border-slate-800' : ''}`}
              >
                Card
              </button>
              <button onClick={() => setpaymentMode('UPI')} className={`btn border-slate-200 bg-indigo-300 hover:border-slate-800 text-black w-full  ${paymentMode === 'UPI' ? 'border-3 border-slate-800' : ''}`}>
                UPI
              </button>
            </div>
            <div className={`flex justify-between print:hidden ${saveFlag ? 'pointer-events-none' : ''}`}>
              <button
                onClick={() => saveBill(true)} id="save-print"
                className="btn border-slate-200 hover:border-slate-800 bg-yellow-200 text-black w-full"
              >
                Save & Print (F8)
              </button>
              {/* <button onClick={() => saveBill(false)} className="btn border-slate-200 bg-green-300 hover:border-slate-800 text-black w-full">
                Save
              </button> */}
              <button className="btn border-slate-200 hover:border-slate-800 bg-red-300 text-black w-full " onClick={() => setbillingList([])}>
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative z-10 print:hidden ${searchModalOpen ? "" : "hidden"
          }`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="false"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="bg-white px-2 pt-2 pb-2 sm:p-2 sm:pb-2">
                <div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-md leading-6 font-medium text-gray-900 mb-2"
                      id="modal-title"
                    >
                      Variety
                    </h3>
                    <div className="grid grid-cols-12 gap-2">
                      {currentProduct?.pos_products_attribute
                        ? currentProduct?.pos_products_attribute.map((key, value) => (
                          (key.pos_products_price) ?
                            <div
                              tabIndex="0"
                              id={
                                !value
                                  ? "setFocus"
                                  : value ===
                                    currentProduct?.pos_products_attribute.length - 1
                                    ? "lastFocus"
                                    : ""
                              }
                              key={Math.random()}
                              className="py-1 border border-slate-300 border-l-4 cursor-pointer col-span-6 p-2 focus-visible:border-teal-900 focus-visible:outline-none  focus-visible:bg-teal-500 focus-visible:text-white"
                              onKeyPress={(ev) =>
                                ev.key === "Enter" &&
                                setToCart(
                                  currentProduct,
                                  key?.pos_attribute_name,
                                  key?.pos_products_price,
                                  key?.pos_attribute_code
                                )
                              }
                              onClick={() =>
                                setToCart(
                                  currentProduct,
                                  key?.pos_attribute_name,
                                  key?.pos_products_price,
                                  key?.pos_attribute_code
                                )
                              }
                            >
                              <h6 className="w-full text-sm font-bold uppercase" title={currentProduct?.pos_products_name}>
                                {currentProduct?.pos_products_name}
                              </h6>
                              <div className="flex w-100 justify-between mt-2 text-xs border-t border-slate-300">
                                <p className="flex">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 m-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                    />
                                  </svg>{" "}
                                  {key?.pos_attribute_name}
                                </p>
                                <p className=" font-medium flex">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 m-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>{" "}
                                  {key?.pos_products_price}.00
                                </p>
                              </div>
                            </div> : ''
                        ))
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-2 sm:px-1 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => setSearchModalOpen(false)}
                  onKeyPress={(ev) =>
                    ev.key === "Enter" && setSearchModalOpen(false)
                  }
                  className="mt-3 w-full inline-flex justify-center rounded-md border-2 border-red-700 shadow-sm px-2 py-1 bg-red-200 text-base font-medium text-red-700 hover:bg-white-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
