import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import CategoryList from "./CategoryList";
import ProductList from "../pages/ProductList";
import PostApi from "../services/PostApi";

function Pos(props) {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setproductList] = useState([]);
  const [tempproductList, settempproductList] = useState([]);
  localStorage.setItem('sidebar-expanded', false);
  useEffect(() => {    
    let data = { list_key: "Mastertable", mastertables: "pos_category" };
    PostApi(data, '', props).then((e) => {
      setCategoryList(e.responcePostData.data.result.pos_category);
    });
    data = { list_key: "GetProd" };
    PostApi(data, '', props).then((e) => {
      setproductList(e.responcePostData.data.result);
      settempproductList(productList)
    });
  }, []);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1  overflow-y-auto overflow-x-hidden bg-slate-200">
        <main>
          <div className="p-1 w-full max-w-9xl mx-auto">
            {/* Cards */}
            <div className="grid grid-cols-12 gap-2">
              {/* Card (Reasons for Refunds) */}
              <CategoryList
                categoryList={categoryList}
                productList={productList}
                setproductList={setproductList}
                tempproductList={tempproductList} settempproductList={settempproductList}
              />
              <ProductList
                tempproductList={tempproductList} settempproductList={settempproductList} productList={productList} 
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Pos;
