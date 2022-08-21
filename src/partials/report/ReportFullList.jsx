import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';

function CategoryList() {
  const [BillReport, setBillReport] = useState([]);
  useEffect(() => {
    ((JSON.parse(sessionStorage.getItem('details'))[0].pos_user_type !== '1')) ? setBillReport([
      {
        name: 'Bill Report',
        link: '/report/bill',
        desc: 'Bill report based on Daywise, Weekwise, Monthwise, Yearwise, Range betweent Days & Summary result of all report. Represent with Table.'
      }, {
        name: 'Product Report',
        link: '/report/productreport',
        desc: 'Product report based on Daywise, Weekwise, Monthwise, Yearwise, Range betweent Days. Represent with Table.'
      }]) : setBillReport([
        {
          name: 'Bill Report',
          link: '/report/bill',
          desc: 'Bill report based on Daywise, Weekwise, Monthwise, Yearwise, Range betweent Days & Summary result of all report. Represent with Table.'
        }, {
          name: 'Product Report',
          link: '/report/productreport',
          desc: 'Product report based on Daywise, Weekwise, Monthwise, Yearwise, Range betweent Days. Represent with Table.'
        }, {
          name: 'Sales by Month',
          link: '/report/month',
          desc: 'Overall sales in a month. Represented in Table & Chart.'
        }, {
          name: 'Sales by Day',
          link: '/report/day',
          desc: 'Overall sales in a day. Represented in Table & Chart.'
        }, {
          name: 'Top 10 Count',
          link: '/report/top10count',
          desc: 'Top 10 selling product by count based on month. Represent with Table.'
        }, {
          name: 'Low 10 Count',
          link: '/report/low10count',
          desc: 'Low 10 selling product by count based on month. Represent with Table.'
        }, {
          name: 'Top 10 Amount',
          link: '/report/top10amount',
          desc: 'Top 10 selling product by amount based on month. Represent with Table.'
        }, {
          name: 'Low 10 Amount',
          link: '/report/low10amount',
          desc: 'Low 10 selling product by amount based on month. Represent with Table.'
        }, {
          name: 'Non-Selling Products',
          link: '/report/nonselling',
          desc: 'No sales product till date. Represent with Table.'
        },
      ]);
  }, [])

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1  overflow-y-auto overflow-x-hidden bg-slate-200">
          <main>
            <div className="col-span-full md:col-span-2 bg-white shadow-lg rounded-sm border border-slate-200 print:hidden no-scrollbar overflow-y-auto h-[98vh]">
              <div className="grow">
                <div className="grow items-center border-b border-slate-100 text-xs p-2 grid grid-cols-12 gap-2 ">
                  {BillReport.map((element) => (
                    <NavLink end to={`${element.link}`} className="py-1 m-1 md:h-28 col-span-full md:col-span-3 border col-2 border-slate-400 bg-white border-l-4 cursor-pointer p-2 focus-visible:border-teal-900 focus-visible:outline-none  focus-visible:bg-teal-500 focus-visible:text-white"
                      tabIndex="0"
                      key={Math.random()}
                    >
                      <h4 className="w-full text-sm font-bold uppercase">
                        {element.name}
                      </h4>
                      <p className="w-full text-xs font-extralight">
                        {element.desc}
                      </p>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
