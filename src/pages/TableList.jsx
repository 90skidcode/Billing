import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
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

import { TableJsonHeaderList } from "../JSON/TableJson";
import Sidebar from "../partials/Sidebar";
import PostApi from "../Services/PostApi";
import toast, { Toaster } from "react-hot-toast";
import BillList from "./BillList";
import Header from "../partials/Header";
import BillPrintList from "./BillPrintList";

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  !JSON.parse(sessionStorage.getItem('details')) ? location.href = '/login' : '';
  return (
    <div className=" text-slate-600">
      Search
      <input
        className="mt-1h-8 shadow-sm h-8 px-3 rounded sm:text-sm border border-slate-300 hover:border-slate-500 outline-none"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          //onChange(e.target.value);
        }}
        placeholder={`${count} records`}
      />
    </div>
  );
}

function TableList(props) {
  const { type } = useParams();
  const navigate = useNavigate();
  const [billDetails, setbillDetails] = useState([]);
  const [details, setDetails] = useState([]);
  let tabledata = { list_key: "Mastertable", mastertables: "pos_" + type };
  useEffect(() => {
    setDetails([]);
    PostApi(tabledata,'',props).then((res) => {
      let tableresponce = res.responcePostData.data.result["pos_" + type];
      setDetails(tableresponce);
    });
  }, [type]);

  const [ModalPopUpFlag, setModalPopUpFlag] = useState("hidden");
  const [ModalPopUpInvoiceFlag, setModalPopUpInvoiceFlag] = useState("hidden");
  const [deleteCurrent, setDeleteCurrent] = useState();
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
      type == "invoice"
        ? deleteCurrent?.original?.pos_invoice_no
        : deleteCurrent?.original[`pos_${type}_code`];
    const conditionKey =
      type == "invoice" ? "pos_invoice_no" : "pos_" + type + "_code";
    let deleteData = {
      list_key: "UpdateMaster",
      tablename: "pos_" + type,
      tablefields: { status: "0" },
      condition: { [conditionKey]: deleteId },
    };
    PostApi(deleteData,'',props)
      .then(() => {
        toast.success("Deleted Successfully");
        PostApi(tabledata).then((res) => {
          let tableresponce = res.responcePostData.data.result["pos_" + type];
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
                Do you really want to delete? This process cannot be undone.
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
    PostApi({ list_key: "GetReports", pos_invoice_no: orderId },'',props).then(
      (data) => {
        setbillDetails(data.responcePostData.data.result);
        if (flag) window.print();
        else setModalPopUpInvoiceFlag("");
      }
    );
  }
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Toaster position="top-right" reverseOrder={false} />
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-slate-200  ">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="p-1 w-full max-w-9xl mx-auto">
            <div className="col-span-12 sm:col-span-10 print:hidden m-5">
              <div className="flex justify-between flex-wrap">
                <div className="text-primary-900 text-3xl font-bold capitalize">
                  <h1>{type} ✨ </h1>
                </div>
                {type === "settings" || type === "order" || type ==='invoice' ? (
                  ""
                ) : (
                  <NavLink key={Math.random()} to={"new"}>
                    <button className="px-6  py-2.5  bg-blue-600  text-white  font-medium  text-xs  leading-tight  uppercase  shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg  transition  duration-150  ease-in-out">
                      Add New
                    </button>
                  </NavLink>
                )}
              </div>
              <div className="bg-white shadow-lg rounded-sm border border-gray-200 mt-5 overflow-auto">
                <header className="px-5 py-4 border-b border-gray-100 p-4 flex flex-wrap justify-between ">
                  <h2 className="text-gray-800 text-base font-semibold justify-items-start capitalize">
                    All {type}
                    <span className="text-base font-semibold text-slate-500">
                      {" - " + data.length}
                    </span>
                  </h2>
                  <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                  />
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
                        <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                          Action
                        </th>
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

                          <td className="px-6 py-2 whitespace-nowrap text-slate-500 text-sm  flex flex-row">
                            {type === "invoice" ? (
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
                                <TrashIcon
                                  height={15}
                                  className=" text-red-500 cursor-pointer text-left"
                                  onClick={() => {
                                    DeleteData(row, true);
                                  }}
                                  value={""}
                                ></TrashIcon>
                              </>
                            ) : (
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
                          </td>
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
                        Showing Page{" "}
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
            </div>
            <DeleteModal></DeleteModal>
            <BillPrintList
              setModalPopUpInvoiceFlag={setModalPopUpInvoiceFlag}
              billDetails={billDetails}
            ></BillPrintList>
          </div>
        </main>
      </div>
      <ViewInvoice></ViewInvoice>
    </div>
  );
}

export default TableList;
