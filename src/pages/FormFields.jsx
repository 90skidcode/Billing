import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import PostApi from "../Services/PostApi";
import { FormFieldJson } from "../JSON/FormJson";
import { UtilsJson } from "../utils/UtilsJson";
import Sidebar from "../partials/Sidebar";
import toast, { Toaster } from "react-hot-toast";

function alpDate(params) {
  const d = new Date(params);
  const monthNames = [
    "Jan",
    "Feb",
    "May",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}

export default function FormFields(props) {
  const { type, id } = useParams();
  const attributes = {};
  const formFields = FormFieldJson[type];
  const intilizeValue = {};
  const [formAttributes, setFormAttributes] = useState(attributes);
  const [formValues, setFormValues] = useState(intilizeValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [categoryList, setcategoryList] = useState([]);
  const [attributeList, setattributeList] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [tags, setTags] = useState([]);
  const [inputUpdate, setinputUpdate] = useState(false);
  useEffect(() => {
    setDataList([]);
    if (id !== "new") {
      if (type === "products") {
        let data = { list_key: "GetProd", pos_products_code: id };
        PostApi(data,'',props).then((e) => {
          setDataList(e?.responcePostData?.data?.result || []);
        });
      } else {
        let data = {
          list_key: "GetMaster",
          mastertables: "pos_" + type,
          code: id,
        };
        PostApi(data,'',props).then((e) => {
          setDataList(e?.responcePostData?.data?.result || []);
        });
      }
    }

    if (type === "products") {
      let category = { list_key: "Mastertable", mastertables: "pos_category" };
      PostApi(category,'',props).then((e) => {
        setcategoryList(e?.responcePostData?.data?.result?.pos_category || []);
      });
      let attribute = {
        list_key: "Mastertable",
        mastertables: "pos_attribute",
      };
      PostApi(attribute,'',props).then((e) => {
        setattributeList(
          e?.responcePostData?.data?.result?.pos_attribute || []
        );
      });
    }
  }, []);

  useEffect(() => {
    if (dataList.length || id === "new") {
      if (typeof formFields != "undefined") {
        formFields.map(
          (item) => (item.values = id === "new" ? "" : dataList[0][item.name])
        );
        formFields.forEach((item) => (intilizeValue[item.name] = item.values));
      }
      setFormValues(intilizeValue);
    }
    if (type == "products") {
      if (typeof dataList[0]?.pos_products_attribute === "object") {
        dataList[0]?.pos_products_attribute.forEach((element) => {
          attributes[element?.pos_attribute_code] = element.pos_products_price;
          setFormAttributes(attributes);
        });
      } else {
        setFormAttributes([]);
        intilizeValue.pos_products_attribute = formAttributes;
        setFormValues(intilizeValue);
      }
    }
  }, [dataList]);

  /* Set Values to form  */
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  /* Set Values to form  */
  const handlechangeSelectMultiple = (e) => {
    const { name } = e.target;
    const options = e.target.options;
    var optionsValue = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        optionsValue.push(options[i].value);
      }
    }
    setFormValues({ ...formValues, [name]: optionsValue });
  };

  const UploadImage = (e) => {
    let { name } = e.target;
    props.setPageLoader(true);
    FileApi(e.target.files[0]).then((result) => {
      setFormValues({
        ...formValues,
        [name.replace("File", "")]:
          result.responceFileData.data["Uploaded Filenames"].toString(),
      });
      props.setPageLoader(false);
    });
  };

  /*To save the form */
  const saveForm = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(validate(formValues));
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setIsSubmit(false);
      if (id === "new") {
        let saveNewData = {
          list_key: "AddMaster",
          tablename: "pos_" + type,
          tablefields: formValues,
        };
        PostApi(saveNewData,'',props).then(() => {
          toast.success("Successfully saved!");
        });
      } else {
        let saveNewData = {
          list_key: "UpdateMaster",
          tablename: "pos_" + type,
          tablefields: formValues,
          condition: { [`pos_${type}_code`]: id },
        };
        PostApi(saveNewData,'',props).then(() => {
          toast.success("Successfully updated the " + type + "!");
        });
      }
    }
  }, [formErrors, formValues, isSubmit]);

  /* To validate forms */
  const validate = (values) => {
    const errors = {};
    formFields.forEach((element) => {
      if (!values[element.name] && element.require) {
        errors[element.name] = element.title + " is required";
      }
    });
    return errors;
  };

  const updateAttribute = (e) => {
    const { name, value } = e.target;
    setFormAttributes({ ...formAttributes, [name]: value });
    var priceUpdate = formValues.pos_products_attribute;
    if (priceUpdate.length) {
      priceUpdate = priceUpdate.map((k) => {
        if (k.pos_attribute_code === name) {
          return {
            pos_attribute_code: name,
            pos_attribute_name: k.pos_attribute_name,
            pos_products_price: value,
          };
        } else {
          return {
            pos_attribute_code: k.pos_attribute_code,
            pos_attribute_name: k.pos_attribute_name,
            pos_products_price: k.pos_products_price,
          };
        }
      });

      let obj = priceUpdate.find((o) => o.pos_attribute_code === name);
      if (typeof obj === "undefined")
        priceUpdate.push({
          pos_attribute_code: name,
          pos_attribute_name: attributeList.find(
            (o) => o.pos_attribute_code === name
          ).pos_attribute_name,
          pos_products_price: value,
        });
    }else{
      priceUpdate.push({
        pos_attribute_code: name,
        pos_attribute_name: attributeList.find(
          (o) => o.pos_attribute_code === name
        ).pos_attribute_name,
        pos_products_price: value,
      });
    }
    setFormValues({ ...formValues, pos_products_attribute: priceUpdate });
    setinputUpdate(inputUpdate ? false : true);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Toaster position="top-right" reverseOrder={false} />
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-slate-200">
        <main>
          <div className="p-1 w-full max-w-9xl mx-auto">
            <div className="col-span-12 sm:col-span-10 m-5">
              <form method="POST" onSubmit={saveForm}>
                <div className="w-full">
                  <div className="flex justify-between flex-wrap">
                    <div className="text-primary-900 text-3xl font-bold capitalize">
                      <h1>Add {type} ✨</h1>
                    </div>
                  </div>
                  <div className="bg-white shadow-sm rounded-sm  border border-slate-300 mt-5">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="sm:grid sm:grid-cols-12 gap-6">
                        {formFields
                          ? formFields.map((e) =>
                              e.type !== "hidden" ? (
                                <div className={e.class} key={e.name}>
                                  <label
                                    htmlFor={e.name}
                                    className="block text-sm font-medium text-slate-600"
                                  >
                                    {e.title}
                                  </label>
                                  {e.type === "text" ||
                                  e.type === "number" ||
                                  e.type === "password" ? (
                                    <input
                                      key={e.name}
                                      type={e.type}
                                      name={e.name}
                                      id={e.name}
                                      value={formValues[e.name]}
                                      onChange={handlechange}
                                      autoComplete="off"
                                      className="mt-1 h-8 shadow-sm px-3 rounded-sm text-slate-600 sm:text-sm border border-slate-300 hover:border-slate-500 outline-none w-full "
                                    />
                                  ) : e.type === "readonly" ? (
                                    <input
                                      key={e.name}
                                      type={"text"}
                                      name={e.name}
                                      id={e.name}
                                      value={formValues[e.name]}
                                      onChange={handlechange}
                                      autoComplete="off"
                                      readOnly
                                      className="mt-1 shadow-sm h-8 px-3 bg-slate-200 rounded-sm text-slate-600 sm:text-sm border border-slate-300 hover:border-slate-500 outline-none w-full "
                                    />
                                  ) : e.type === "label" ? (
                                    <p
                                      key={e.name}
                                      type={"text"}
                                      onChange={handlechange}
                                      autoComplete="off"
                                      readOnly
                                      className="mt-1 shadow-sm px-2 p-1 h-8 bg-slate-200 rounded-sm text-slate-600 sm:text-sm border border-slate-300 hover:border-slate-500 outline-none w-full "
                                    >
                                      {" "}
                                      {alpDate(formValues[e.name])}
                                    </p>
                                  ) : e.type === "textarea" ? (
                                    <textarea
                                      cols="30"
                                      rows="10"
                                      key={e.name}
                                      type={e.type}
                                      name={e.name}
                                      id={e.name}
                                      value={formValues[e.name]}
                                      onChange={handlechange}
                                      autoComplete="off"
                                      className="mt-1 shadow-sm px-3 rounded-sm text-slate-600 sm:text-sm border border-slate-300 hover:border-slate-500 outline-none w-full "
                                    />
                                  ) : e.type === "select" ? (
                                    <select
                                      key={e.name}
                                      name={e.name}
                                      id={e.name}
                                      data={formValues[e.name]}
                                      value={formValues[e.name]}
                                      onChange={handlechange}
                                      autoComplete="off"
                                      className={`mt-1 h-8 shadow-sm px-2 py-1 rounded-sm text-slate-600 sm:text-sm border border-slate-300 hover:border-slate-500 outline-none w-full ${JSON.stringify(
                                        e
                                      )}`}
                                    >
                                      <option value="">Select from list</option>
                                      {e.server
                                        ? e.list === "tags"
                                          ? tags.map((item) =>
                                              item.status === "1" ? (
                                                <option
                                                  key={Math.random()}
                                                  value={item.tag_id}
                                                >
                                                  {item.tag_name}
                                                </option>
                                              ) : (
                                                ""
                                              )
                                            )
                                          : categoryList.map((item) =>
                                              item.status === "1" ? (
                                                <option
                                                  key={Math.random()}
                                                  value={item.pos_category_code}
                                                >
                                                  {item.pos_category_name}
                                                </option>
                                              ) : (
                                                ""
                                              )
                                            )
                                        : e.list.map((item) => (
                                            <option
                                              key={Math.random()}
                                              value={item.key}
                                            >
                                              {item.value}
                                            </option>
                                          ))}
                                    </select>
                                  ) : e.type === "selectMultiple" ? (
                                    <select
                                      key={e.name}
                                      name={e.name}
                                      id={e.name}
                                      value={formValues[e.name]}
                                      onChange={handlechangeSelectMultiple}
                                      autoComplete="off"
                                      multiple
                                      className="mt-1 shadow-sm px-2 rounded-sm text-slate-600 sm:text-sm border border-slate-300 hover:border-slate-500 outline-none w-full "
                                    >
                                      {}
                                      <option value="">Select from list</option>
                                      {e.server
                                        ? e.list === "tags"
                                          ? tags.map((item) =>
                                              item.status === "1" ? (
                                                <option
                                                  key={Math.random()}
                                                  value={item.tag_id}
                                                >
                                                  {item.tag_name}
                                                </option>
                                              ) : (
                                                ""
                                              )
                                            )
                                          : categoryList.map((item) =>
                                              item.status === "1" ? (
                                                <option
                                                  key={Math.random()}
                                                  value={item.pos_category_code}
                                                >
                                                  {item.pos_category_name}
                                                </option>
                                              ) : (
                                                ""
                                              )
                                            )
                                        : e.list.map((item) => (
                                            <option
                                              key={Math.random()}
                                              value={item.key}
                                            >
                                              {item.value}
                                            </option>
                                          ))}
                                    </select>
                                  ) : e.type === "file" ? (
                                    <div className="flex items-center justify-center w-full mt-1">
                                      <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                        <div className="h-full w-full text-center flex flex-col items-center justify-center">
                                          <div className="flex flex-auto max-h-48 mx-auto">
                                            {formValues[e.name] ? (
                                              <img
                                                className="has-mask h-36 object-center"
                                                src={`${
                                                  UtilsJson.baseUrl
                                                }productimg/${
                                                  formValues[e.name]
                                                }`}
                                                alt="freepik"
                                              />
                                            ) : (
                                              <p className="pointer-none text-gray-500 ">
                                                <span className="text-sm">
                                                  Drag and drop
                                                </span>{" "}
                                                files here <br /> or{" "}
                                                <di
                                                  href=""
                                                  id=""
                                                  className="text-blue-600 hover:underline"
                                                >
                                                  select a file
                                                </di>{" "}
                                                from your computer
                                              </p>
                                            )}
                                          </div>
                                        </div>
                                        <input
                                          key={e.name + "File"}
                                          type="file"
                                          name={e.name + "File"}
                                          id={e.name}
                                          autoComplete="off"
                                          className="hidden"
                                          onChange={UploadImage}
                                        />
                                        <input
                                          key={e.name}
                                          type="text"
                                          name={e.name}
                                          value={formValues[e.name]}
                                          autoComplete="off"
                                          className="hidden"
                                        />
                                      </label>
                                    </div>
                                  ) : e.type === "table" ? (
                                    <>
                                      <table className="table-auto text-black border mt-1 text-sm w-full">
                                        <thead>
                                          <tr>
                                            <th className="border p-2 font-medium">
                                              S.No
                                            </th>
                                            <th className="border p-2 font-medium">
                                              Type
                                            </th>
                                            <th className="border p-2 font-medium">
                                              Price
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {attributeList.map((e, index) => (
                                            <tr key={index} className="border">
                                              <td className="border p-1 text-center">
                                                {index + 1}
                                              </td>
                                              <td
                                                className={`border p-1 ${e.pos_category_name}`}
                                              >
                                                {e.pos_attribute_name}
                                              </td>
                                              <td className="border p-1">
                                                <input
                                                  key={e.pos_attribute_code}
                                                  type="text"
                                                  name={e.pos_attribute_code}
                                                  id={e.pos_attribute_code}
                                                  onChange={updateAttribute}
                                                  value={
                                                    formAttributes[
                                                      e.pos_attribute_code
                                                    ]
                                                  }
                                                  autoComplete="off"
                                                  className="mt-1 h-8 shadow-sm px-3 rounded-sm text-slate-600 sm:text-sm border border-slate-300 hover:border-slate-500 outline-none w-full "
                                                />
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                      <input
                                        key={e.name}
                                        type="text"
                                        name={e.name}
                                        value={JSON.stringify(
                                          formValues[e.name]
                                        )}
                                        autoComplete="off"
                                        className="hidden"
                                      />
                                    </>
                                  ) : (
                                    ""
                                  )}
                                  <small
                                    id="emailHelp"
                                    className="block mt-1 text-xs text-red-600"
                                  >
                                    {formErrors[e.name]}
                                  </small>
                                </div>
                              ) : (
                                ""
                              )
                            )
                          : ""}
                      </div>
                    </div>
                    <div className="px-3 py-2 bg-gray-50 text-right sm:px-6">
                      <NavLink
                        className="px-6  py-2.5 mx-2  bg-red-600  text-white  font-medium  text-xs  leading-tight  uppercase  shadow-md  hover:bg-red-700 hover:shadow-lg  focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-red-800 active:shadow-lg  transition  duration-150  ease-in-out"
                        to={"/list/" + type}
                      >
                        Back{" "}
                      </NavLink>
                      <button
                        type="submit"
                        className="px-6  py-2.5  bg-blue-600  text-white  font-medium  text-xs  leading-tight  uppercase  shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg  transition  duration-150  ease-in-out"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
