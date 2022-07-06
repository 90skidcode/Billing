import React, {useState, useEffect} from "react";

function CategoryList({
  categoryList,
  productList,
  settempproductList,
}) {
  const [filter, setFilter] = useState('');
  useEffect(() => {
    settempproductList(productList)
  }, [productList]);
  const filterCategory = (element) => {
    element == "all"
      ? settempproductList(productList)
      : filterObject(element.pos_category_code);
    element == "all"
      ? setFilter('all')
      : setFilter(element.pos_category_code);
  };

  function filterObject(id) {
    if (id) {
      let obj = productList.filter((o) => o.pos_products_category === id);
      (typeof obj === "undefined") ? settempproductList([]) : settempproductList(obj);
    } else settempproductList([]);
  }

  const searchCategory = (e) => {
    const {name , value } = e.target;
    let obj = productList.filter((o) => o.pos_products_cat === id);
  }

  return (
    <div className="col-span-full md:col-span-2 bg-white shadow-lg rounded-sm border border-slate-200 print:hidden no-scrollbar overflow-y-auto h-[98vh]">
      {/* <header className="p-1 border-b border-slate-100">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Category"
          className="h-8 w-full text-xs uppercase border-slate-200 text-slate-400 bg-slate-50 rounded-sm font-semibold p-2" onKeyUp={(e) => searchCategory(e)}
        />
      </header> */}
      <div className="grow">
        <div className="grow items-center border-b border-slate-100 text-xs p-2">
          <div
              className={`py-1 border-b border-slate-100 cursor-pointer ${(filter == 'all') ? 'font-bold' : '' }`}
            onClick={() => filterCategory("all")}
          >
            {"All"}
          </div>
          {categoryList.map((element) => (
            <div key={Math.random()}
              className={`py-1 border-b border-slate-100 cursor-pointer ${(filter == element.pos_category_code) ? 'font-bold' : '' }`}
              onClick={() => filterCategory(element)}
            >
              {element.pos_category_name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
