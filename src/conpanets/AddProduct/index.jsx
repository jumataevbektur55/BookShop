import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Addproduct = () => {
  const { products } = useSelector((s) => s);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate()
  const messageError = () => {
    toast.error("🦄Зополните пустые поле!!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const messageSuccess = () => {
    toast.success("Продукт ушпешно добавлен!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const addProduct = () => {
    if (
      photo.trim() === "" ||
      name.trim() === "" ||
      category.trim() === "" ||
      price.trim() === "" ||
      description.trim() === ""
    ) {
      messageError();
    } else {
      let obj = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        photo,
        name,
        price,
        category,
        description,
        quantity: 1,
      };
      let res = [...products, obj];
      localStorage.setItem("product", JSON.stringify(res));
      dispatch({ type: "ADD_PRODUCT", payload: obj });
      messageSuccess();
      setPhoto("");
      setName("");
      setPrice("");
      setCategory("");
      setDescription("");
    }
  };
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setPhoto(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div id="title">
        <div className="container">
          <div className="title">
            <div className="product">
              <input
                onChange={onChange}
                type="file"
                placeholder="Upload photo"
              />
              <button onClick={() => nav("/adminproduct")}
                type="button"
                class="text-white mt-11 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                ADD TO ADMIN PRODUCTS
              </button>
            </div>
            <div className="product11">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input1"
                type="text"
                placeholder="Product Name"
              />
              <div className="input22">
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="input2"
                  type="text"
                  placeholder="Category"
                />
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="input3"
                  type="text"
                  placeholder="Price"
                />
              </div>
              <div className="dsa">
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  placeholder="Product description..."
                />
                <button
                  onClick={() => addProduct()}
                  type="button"
                  class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Addproduct;
