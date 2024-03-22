import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";


const AdminProduct = () => {
const dispatch = useDispatch();
  const { products } = useSelector((s) => s);
  const { basket } = useSelector((s) => s);
  const addToBasket = (data) => {
    localStorage.setItem("basket", JSON.stringify(basket));
    dispatch({ type: "ADD_BASKET", payload: data });
  };
  const delProduct = (data)=> {
    localStorage.setItem("products", JSON.stringify(products));

    dispatch({type:"DELETE_PRODUCT", payload:data })
  }
  return (
    <div className="container">
      <div className="block" style={{
        display: "flex",
        flexWrap: "wrap",
        gap:"40px",
        marginTop:"50px",
      }}>
      {products.map((el) => (
             <div className="row">
             <Link to={`deatalisproduct/${el.id}`}>
               <img src={el.photo} alt="" className="main" />
             </Link>

             <div className="row-1">
               <h1>{el.price}$</h1>
             <RiDeleteBin5Line style={{
                fontSize: "35px",
                color: "red",
             }} onClick={() => delProduct(el)} />
             </div>
             <div className="row-2">
                
               <h5>
                 {el.name} / {el.category}
               </h5>
               <button
                 onClick={() => addToBasket(el)}
                 class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
               >
                 <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                   ADD TO BASKET
                 </span>
               </button>
             </div>
           </div>
      ))}
      </div>
    </div>
  );
};

export default AdminProduct;
