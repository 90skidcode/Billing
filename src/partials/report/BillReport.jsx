import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "regenerator-runtime/runtime";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  TrashIcon,
  PencilAltIcon,
  ClipboardCheckIcon,
  PrinterIcon,
} from "@heroicons/react/outline";

import { TableJsonHeaderList } from "../../JSON/TableJson";
import PostApi from "../../services/PostApi";
import toast, { Toaster } from "react-hot-toast";
import BillList from "../../pages/BillList";
import Header from "../Header";
import Datepicker from "../actions/Datepicker";
import BillReportPrintList from "../../pages/BillReportPrintList";
import DashboardCard14 from "../dashboard/DashboardCard14";
import Sidebar from "../Sidebar";

function GlobalFilter({
  globalFilter,
}) {
  const [value, setValue] = React.useState(globalFilter);
  !JSON.parse(sessionStorage.getItem('details')) ? location.href = '/login' : '';
  return (
    <div className=" text-slate-600">
      {/* Search
      <input
        className="mt-1h-8 shadow-sm h-8 px-3 rounded sm:text-sm border border-slate-300 hover:border-slate-500 outline-none"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          //onChange(e.target.value);
        }}
        placeholder={`${count} records`}
      /> */}
    </div>
  );
}

function BillReport(props) {
  const { type } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [billDetails, setbillDetails] = useState([]);
  const [fullbillDetails, setFullbillDetails] = useState([]);
  const [category, setCategory] = useState([]);
  const [details, setDetails] = useState([]);
  let tabledata = { "list_key": type === 'productreport' ? 'CatAllReport' : "ReportMaster", "range": "Daywise" };
  useEffect(() => {
    setDetails([]);
    PostApi(tabledata, '', props).then((res) => {
      let tableresponce = res.responcePostData.data.result;
      setDetails(tableresponce);
    });
    PostApi({ "list_key": "Mastertable", "mastertables": "pos_category" }, '').then((res) => {
      let tableresponce = res.responcePostData.data.result.pos_category;
      setCategory(tableresponce);
    });
  }, [type]);

  var filterList = [{ name: 'Daywise', value: 'Daywise' }];
  if (JSON.parse(sessionStorage.getItem('details'))[0].pos_user_type === '1')
    filterList = [{ name: 'Daywise', value: 'Daywise' }, { name: 'Weekwise', value: 'Weekwise' }, { name: 'Monthwise', value: 'Monthwise' }, { name: 'Yearwise', value: 'Yearwise' }, { name: 'Between', value: 'Between' }]
  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }

  const getReport = () => {
    let v = document.getElementById('range').value;
    var tabledata = { "list_key": type === 'productreport' ? 'CatAllReport' : "ReportMaster", "range": v };
    if (v === 'Between') {
      let t = document.getElementById('date-range').value;
      t = t.split('to');
      tabledata['from_date'] = formatDate(t[0]);
      tabledata['to_date'] = formatDate(t[1] ? t[1] : t[0]);
    }
    if (type === 'productreport' && document.getElementById('category').value != 'All') {
      tabledata['cat_id'] = document.getElementById('category').value;
    }
    setDetails([]);
    PostApi(tabledata, '', props).then((res) => {
      let tableresponce = res.responcePostData.data.result;
      setDetails(tableresponce);
    });
  }

  const [ModalPopUpFlag, setModalPopUpFlag] = useState("hidden");
  const [ModalPopUpInvoiceFlag, setModalPopUpInvoiceFlag] = useState("hidden");
  const [deleteCurrent, setDeleteCurrent] = useState();
  const [flag, setFlag] = useState(false);
  function ClosePopUp() {
    setModalPopUpFlag("hidden");
    setDeleteCurrent([]);
  }

  const data = details;
  const columns = TableJsonHeaderList[type];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  function DeleteData(params, flag) {
    setModalPopUpFlag("");
    setDeleteCurrent(params);
  }

  function DeleteRequest() {
    const deleteId =
      type == "bill"
        ? deleteCurrent?.original?.pos_invoice_id
        : deleteCurrent?.original[`pos_${type}_code`];
    const conditionKey =
      type == "bill" ? "pos_invoice_id" : "pos_" + type + "_code";
    let deleteData = {
      list_key: "UpdateMaster",
      tablename: "pos_invoice",
      tablefields: { status: "0" },
      condition: { [conditionKey]: deleteId },
    };
    PostApi(deleteData, '', props)
      .then(() => {
        toast.success("Deleted Successfully");
        PostApi(tabledata, '', props).then((res) => {
          let tableresponce = res.responcePostData.data.result;
          setDetails(tableresponce);
        });
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        ClosePopUp();
      });
  }



  function DeleteModal() {
    return (
      <div
        className={`min-w-screen h-screen animated fadeIn faster  fixed bg-slate-400 bg-opacity-75  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover ${ModalPopUpFlag}`}
      >
        <div className="flex">
          <div className="bg-white rounded-xl shadow-lg justify-center">
            <div className="text-center p-5 flex-auto justify-center">
              <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
              <p className="text-sm text-gray-500 px-8">
                Do you really want to delete? This process cannot be undone.sss
              </p>
            </div>
            <div className="p-3 mt-2 text-center space-x-4 md:block">
              <button
                onClick={() => ClosePopUp()}
                className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => DeleteRequest()}
                className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function ViewInvoice() {
    return (
      <div
        className={`min-w-screen h-screen animated fadeIn faster  fixed bg-slate-400 bg-opacity-75  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover ${ModalPopUpInvoiceFlag}`}
      >
        <div className="flex">
          <div className="bg-white rounded-xl shadow-lg justify-center">
            <BillList
              setModalPopUpInvoiceFlag={setModalPopUpInvoiceFlag}
              billDetails={billDetails}
            ></BillList>
          </div>
        </div>
      </div>
    );
  }

  function PrintInvoice(orderId, flag) {
    PostApi({ list_key: "GetReports", pos_invoice_no: orderId }, '', props).then(
      (data) => {
        setbillDetails(data.responcePostData.data.result[0].bill_details);
        setFullbillDetails(data.responcePostData.data.result);
        setTimeout(() => {
          if (flag) window.print();
          else setModalPopUpInvoiceFlag("");
        }, 300);
      }
    );
  }
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex overflow-y-hidden">
      <Toaster position="top-right" reverseOrder={false} />
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 no-scrollbar overflow-y-auto overflow-x-hidden bg-slate-200  ">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className=" no-scrollbar overflow-y-auto h-[90vh]">
          <div className="p-1 w-full max-w-9xl mx-auto ">
            <div className="col-span-12 sm:col-span-10 print:hidden m-5">
              <div className="flex justify-between flex-wrap">
                <div className="text-primary-900 text-3xl font-bold capitalize">
                  <h1>{type === 'productreport' ? 'Product Report' : type} ✨ </h1>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-6">
                <div className={`bg-white shadow-lg rounded-sm border border-gray-200 mt-0 overflow-auto ${type === 'productreport' ? 'col-span-12' : 'col-span-9'}`}>
                  <header className="px-5 py-4 border-b border-gray-100 p-4 flex flex-wrap justify-between ">
                    <h2 className="text-gray-800 text-base font-semibold justify-items-start capitalize">
                      {type === 'productreport' ? 'Product Report' : 'All ' + type}
                      <span className="text-base font-semibold text-slate-500">
                        {" - " + data.length}
                      </span>
                    </h2>
                    <GlobalFilter
                      preGlobalFilteredRows={preGlobalFilteredRows}
                      globalFilter={state.globalFilter}
                      setGlobalFilter={setGlobalFilter}
                    />
                    {/* Right: Actions */}
                    <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                      {/* Category Filter */ type === 'productreport' ?
                        <select className="form-input pl-2 text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300" name="category" id="category" >
                          <option value="All" key="All">All</option>
                          {
                            category.map((e) => (
                              <option value={e.pos_category_code} key={e.pos_category_code}>{e.pos_category_name}</option>
                            ))
                          }
                        </select> : ''
                      }
                      {/* Filter button */}
                      <select className="form-input pl-2 text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300" name="range" id="range" onChange={(e) => { (e.target.value == 'Between') ? setFlag(true) : setFlag(false) }}>
                        {
                          filterList.map((e) => (
                            <option value={e.value} key={e.value}>{e.name}</option>
                          ))
                        }
                      </select>
                      {/* Datepicker built with flatpickr */  (JSON.parse(sessionStorage.getItem('details'))[0].pos_user_type === '1' && flag) ?
                        <Datepicker /> : ''}
                      {/* Add view button */}
                      <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" onClick={() => getReport()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                        <span className="hidden xs:block ml-2">Filter</span>
                      </button>
                    </div>
                  </header>

                  <table
                    className="w-full divide-y divide-gold-600"
                    {...getTableProps()}
                  >
                    <thead className="bg-slate-200 text-slate-500">
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th
                              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                              {...column.getHeaderProps(
                                column.getSortByToggleProps()
                              )}
                            >
                              {column.render("Header")}
                              <span>
                                {column.isSorted
                                  ? column.isSortedDesc
                                    ? " 🔽"
                                    : " 🔼"
                                  : ""}
                              </span>
                            </th>
                          ))}
                          {type !== 'productreport' ?
                            <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                              Action
                            </th> : ''
                          }
                        </tr>
                      ))}
                    </thead>
                    <tbody
                      className="bg-white divide-y divide-gray-200"
                      {...getTableBodyProps()}
                    >
                      {page.map((row) => {
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                              return (
                                <td
                                  className="px-6 py-2 whitespace-nowrap text-slate-500 text-sm "
                                  {...cell.getCellProps([
                                    {
                                      className: cell.column.className,
                                      style: cell.column.style,
                                    },
                                  ])}
                                >
                                  {cell.render("Cell")}
                                </td>
                              );
                            })}

                            {type !== "productreport" ? <td className="px-6 py-2 whitespace-nowrap text-slate-500 text-sm  flex flex-row">
                              {type === "bill" ? row.original.status === '1' ? (
                                <>
                                  <ClipboardCheckIcon
                                    height={15}
                                    className=" text-blue-500 cursor-pointer text-left mr-2"
                                    xlinkTitle="invoice"
                                    onClick={() =>
                                      PrintInvoice(
                                        row.original.pos_invoice_no,
                                        false
                                      )
                                    }
                                  ></ClipboardCheckIcon>
                                  <PrinterIcon
                                    height={15}
                                    className=" text-blue-500 cursor-pointer text-left mr-2"
                                    xlinkTitle="invoice"
                                    onClick={() =>
                                      PrintInvoice(
                                        row.original.pos_invoice_no,
                                        true
                                      )
                                    }
                                  ></PrinterIcon>
                                  {(document.getElementById('range').value == 'Daywise') ? <TrashIcon
                                    height={15}
                                    className=" text-red-500 cursor-pointer text-left"
                                    onClick={() => {
                                      DeleteData(row, true);
                                    }}
                                    value={""}
                                  ></TrashIcon> : ''}
                                </>
                              ) : '' : (
                                <>
                                  <div
                                    id={Math.random()}
                                    onClick={() =>
                                      navigate(
                                        "/list/" +
                                        type +
                                        "/" +
                                        row?.original["pos_" + type + "_code"]
                                      )
                                    }
                                  >
                                    <PencilAltIcon
                                      height={15}
                                      className=" text-blue-500 cursor-pointer text-left mx-2"
                                    ></PencilAltIcon>
                                  </div>
                                  <TrashIcon
                                    height={15}
                                    className=" text-red-500 cursor-pointer text-left"
                                    onClick={() => {
                                      DeleteData(row, false);
                                    }}
                                    value={""}
                                  ></TrashIcon>
                                </>
                              )}
                            </td> : ''
                            }
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    <div className="flex-1 flex justify-between sm:hidden">
                      <div
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Previous
                      </div>
                      <div
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                        href="#"
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Next
                      </div>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700">
                          Showing Page
                          <span className="font-medium">{pageIndex + 1}</span> of{" "}
                          <span className="font-medium">
                            {pageOptions.length}
                          </span>
                        </p>
                      </div>
                      <div>
                        <nav
                          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                          aria-label="Pagination"
                        >
                          <div
                            onClick={() => gotoPage(0)}
                            disabled={!canPreviousPage}
                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Previous</span>

                            <ChevronDoubleLeftIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                          <div
                            onClick={() => previousPage()}
                            disabled={!canPreviousPage}
                            href="#"
                            className="relative inline-flex items-center px-2 py-2  border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                          <div
                            onClick={() => nextPage()}
                            disabled={!canNextPage}
                            href="#"
                            className="relative inline-flex items-center px-2 py-2  border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                          <div
                            onClick={() => gotoPage(pageCount - 1)}
                            disabled={!canNextPage}
                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Next</span>
                            <ChevronDoubleRightIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                {type === 'productreport' ? '' :
                  <DashboardCard14 details={details} />
                }
              </div>
            </div>
            <DeleteModal></DeleteModal>
            <BillReportPrintList
              fullbillDetails={fullbillDetails}
              billDetails={billDetails}
            ></BillReportPrintList>
          </div>
        </main>
      </div>
      <ViewInvoice></ViewInvoice>
    </div>
  );
}

export default BillReport;
