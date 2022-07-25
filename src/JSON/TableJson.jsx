import { UtilsJson } from "../utils/UtilsJson";
export const TableJsonHeaderList = {
  category: [
    {
      Header: "Name",
      accessor: "pos_category_name",
      className: "px-6 py-2 whitespace-nowrap text-slate-900 text-sm",
    },
    {
      Header: "Code",
      accessor: "pos_category_code",
    },
    {
      Header: "Visible",
      accessor: "status",
      Cell: ({ cell }) =>
      cell.row.values.status === '1' ? (
          <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-green-600 rounded-full">
            Visible
          </span>
        ) : (
          <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            Deleted 
          </span>
        ),
    }
  
  ],
  
  products: [
    {
      Header: "Name",
      accessor: "pos_products_name",
      className:
        "px-6 py-2 whitespace-nowrap text-slate-900 text-sm cursor-pointer",
    },
    {
      Header: "Code",
      accessor: "pos_products_code",
    },
    // {
    //   Header: "Price",
    //   accessor: "product_price",
    //   Cell: ({ cell }) => ( 'Rs.'+ Number(cell.row.values.product_price).toFixed(2) )
    // },
    // {
    //   Header: "Sale Price",
    //   accessor: "product_sales_price",
    //   Cell: ({ cell }) => ( 'Rs.'+ Number(cell.row.values.product_sales_price).toFixed(2))
    // },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ cell }) =>
      cell.row.values.status === '1' ? (
          <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-green-600 rounded-full">
            Active
          </span>
        ) : (
          <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            In Active
          </span>
        ),
    },
  ], 
  
  attribute : [ {
    Header: "Name",
    accessor: "pos_attribute_name",
    className:
      "px-6 py-2 whitespace-nowrap text-slate-900 text-sm cursor-pointer",
  },
  {
    Header: "Code",
    accessor: "pos_attribute_code",
  }],
  user : [{
    Header: "Name",
    accessor: "pos_user_name",
    className:
      "px-6 py-2 whitespace-nowrap text-slate-900 text-sm cursor-pointer",
  },
  {
    Header: "Code",
    accessor: "pos_user_code",
  },{
    Header: "Type",
    accessor: "pos_user_type",
    Cell: ({ cell }) =>
    cell.row.values.pos_user_type === '1' ? (
        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-green-600 rounded-full">
          Admin
        </span>
      ) : (
        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-yellow-600 rounded-full">
          User 
        </span>
      ),
  }],
  invoice : [{
    Header: "Bill No",
    accessor: "pos_invoice_no",
    className:
      "px-6 py-2 whitespace-nowrap text-slate-900 text-sm cursor-pointer",
  },
  {
    Header: "Date",
    accessor: "created_at",    
  },{
    Header: "Amount",
    accessor: "pos_invoice_amount",
  },{
    Header: "Status",
    accessor: "status",
    Cell: ({ cell }) =>
    cell.row.values.status === '1' ? (
        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-green-600 rounded-full">
          Paid
        </span>
      ) : (
        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
          Deleted 
        </span>
      ),
  }],
  bill:[{
    Header: "Date",
    accessor: "created_at",
    
  },
  {
    Header: "Bill No",
    accessor: "pos_invoice_no",
    className: "px-6 py-2 whitespace-nowrap text-slate-900 text-sm",
  },
  {
    Header: "Amount",
    accessor: "pos_invoice_amount",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell }) =>
    cell.row.values.status === '1' ? (
        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-green-600 rounded-full">
          Paid
        </span>
      ) : (
        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
          Deleted 
        </span>
      ),
  }]
 
};
