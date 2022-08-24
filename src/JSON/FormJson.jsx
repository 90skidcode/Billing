export const FormFieldJson = {
  category: [
    {
      type: "text",
      title: "Name",
      name: "pos_category_name",
      values: "",
      class: "col-span-3",
      require: true,
    },
    {
      type: "select",
      title: "Visible",
      name: "status",
      values: "",
      class: "col-span-3",
      require: false,
      server: false,
      list: [
        {
          key: "1",
          value: "Visable",
        },
        {
          key: "2",
          value: "Hide",
        },
        {
          key: "0",
          value: "Delete",
        },
      ],
    },
  ],

  products: [
    {
      type: "text",
      title: "Name",
      name: "pos_products_name",
      values: "",
      class: "col-span-3",
      require: true,
    },
    {
      type: "select",
      title: "Category",
      name: "pos_products_category",
      values: "",
      class: "col-span-3",
      require: true,
      server: true,
      list: "category",
    },
    {
      type: "hidden",
      title: "Quantity",
      name: "pos_products_attribute",
      values: "",
      class: "col-span-3",
      require: false,
    },
    {
      type: "select",
      title: "Visible",
      name: "status",
      values: "",
      class: "col-span-3",
      require: false,
      server: false,
      list: [
        {
          key: "1",
          value: "Visable",
        },
        {
          key: "2",
          value: "Hide",
        },
        {
          key: "0",
          value: "Delete",
        },
      ],
    },

    {
      type: "table",
      title: "Attributes",
      name: "pos_products_attribute",
      values: "",
      class: "col-span-6",
      require: true,
    },
  ],

  order: [
    {
      type: "readonly",
      title: "Order Id",
      name: "order_id",
      values: "",
      class: "col-span-3",
      require: true,
    },
    {
      type: "readonly",
      title: "Order Amount",
      name: "order_amount",
      values: "",
      class: "col-span-3",
      require: true,
    },
    {
      type: "select",
      title: "Delivery Status",
      name: "delivery_status",
      values: "",
      class: "col-span-3",
      require: true,
      list: [
        {
          key: "1",
          value: "Delivery Accept",
        },
        {
          key: "2",
          value: "Out for Delivery",
        },
        {
          key: "3",
          value: "Deliver Sent",
        },
        {
          key: "4",
          value: "Deliver Rejected by Customer",
        },
        {
          key: "5",
          value: "Customer not in Placed",
        },
      ],
    },
    {
      type: "select",
      title: "Order Status",
      name: "order_status",
      values: "",
      class: "col-span-3",
      require: true,
      list: [
        {
          key: "1",
          value: "Order Placed",
        },
        {
          key: "2",
          value: "Payment Rejected",
        },
        {
          key: "3",
          value: "Order Cancel by Customer",
        },
        {
          key: "4",
          value: "Order Cancel by Admin",
        },
        {
          key: "5",
          value: "Order Deliver",
        },
      ],
    },
    {
      type: "readonly",
      title: "Online Transaction Id",
      name: "online_transaction_id",
      values: "",
      class: "col-span-3",
      require: true,
    },

    {
      type: "label",
      title: "Order Placed",
      name: "created_at",
      values: "",
      class: "col-span-3",
      require: true,
    },
  ],
  attribute: [
    {
      type: "text",
      title: "Name",
      name: "pos_attribute_name",
      values: "",
      class: "col-span-3",
      require: true,
    },
    {
      type: "select",
      title: "Visible",
      name: "status",
      values: "",
      class: "col-span-3",
      require: false,
      server: false,
      list: [
        {
          key: "1",
          value: "Visable",
        },
        {
          key: "2",
          value: "Hide",
        },
        {
          key: "0",
          value: "Delete",
        },
      ],
    },
  ],
  user: [
    {
      type: "text",
      title: "Name",
      name: "pos_user_name",
      values: "",
      class: "col-span-3",
      require: true,
    },
    {
      type: "password",
      title: "Password",
      name: "pos_user_password",
      values: "",
      class: "col-span-3",
      require: true,
    },
    {
      type: "select",
      title: "User Type",
      name: "pos_user_type",
      values: "",
      class: "col-span-3",
      require: true,
      server: false,
      list: [
        {
          key: "1",
          value: "Admin",
        },
        {
          key: "2",
          value: "Employee",
        },
      ],
    },
    {
      type: "select",
      title: "Branch",
      name: "pos_user_branch",
      values: "",
      class: "col-span-3",
      require: true,
      server: false,
      list: [
        {
          key: "admin",
          value: "Admin",
        },{
          key: "BRA1001",
          value: "BRA1001",
        },
      ],
    }, {
      type: "select",
      title: "Visible",
      name: "status",
      values: "",
      class: "col-span-3",
      require: false,
      server: false,
      list: [
        {
          key: "1",
          value: "Active",
        },
        {
          key: "2",
          value: "In Active",
        },
        {
          key: "0",
          value: "Delete",
        },
      ],
    },
  ],
  tax: [
    {
      type: "text",
      title: "Name",
      name: "pos_tax_name",
      values: "",
      class: "col-span-3",
      require: true,
    },
    {
      type: "text",
      title: "Name",
      name: "pos_tax_percentage",
      values: "",
      class: "col-span-3",
      require: true,
    }, {
      type: "select",
      title: "Visible",
      name: "status",
      values: "",
      class: "col-span-3",
      require: false,
      server: false,
      list: [
        {
          key: "1",
          value: "Active",
        },        
        {
          key: "0",
          value: "Delete",
        },
      ],
    },
  ]
};
