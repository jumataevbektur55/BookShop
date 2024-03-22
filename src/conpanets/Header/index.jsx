import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Admin from "../Admin";

const Header = () => {
  const { tip } = useSelector((s) => s);
  const { basket } = useSelector((s) => s);
  const [inputValue, setInputValue] = useState("");
  const nav = useNavigate()


  const dispatch = useDispatch();
  const title = () => {
    dispatch({ type: "TITLE", payload: true });
  };
  //  setInputValue("")

  return (
    <div>
      <div id="header">
        <div className="container">
          <div className="header">
            <Link to={"/"}>
              <h1>BOOKSHOP</h1>
            </Link>
            <div className="header--nav">
              <button onClick={() => nav(`/search/${inputValue}`)} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Search
                </span>
              </button>
              <select style={{
                borderRadius:"5px",
                width: "70px",
                height:'30px'

              }}> 
                <option value="$">dollar$</option>
                <option value="E">evro</option>
                <option value="сом">сом</option>
                <option value="р">рубль</option>

              </select>

              <Link to={"/basket"}>
                <div className="header--nav__basket">
                  <SlBasket
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  />
                  {basket.length ? <h5>{basket.length}</h5> : null}
                  <h6>Корзина</h6>
                </div>
              </Link>
              <div onClick={() => title()} className="header--nav__admin">
                <FaRegUserCircle
                  style={{
                    color: "white",
                    fontSize: "25px",
                  }}
                />

                <h6>Admin</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {tip ? <Admin /> : null}
    </div>
  );
};

export default Header;
