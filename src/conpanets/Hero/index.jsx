import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import img from "../../image/e098b3cca37451d978d09831db01b86d.png";
import { FaArrowRightLong } from "react-icons/fa6";
import "../Hero/";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard";
const Hero = () => {
  const [count, setCout] = useState(3);
  const { products } = useSelector((s) => s);
  const dispatch = useDispatch();

  return (
    <div>
      <div id="hero">
        <div className="container ">
          <div className="hero">
            <div className="img">
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <div className="hero--nav">
                <FaArrowLeftLong />
              </div>
              <div className="hero--nav__rigth">
                <FaArrowRightLong />
              </div>
            </div>
          </div>
          {
            products.length ?

          <div className="product-title">
            <h1>Возможно, Вам понравится</h1>
            <select
              onChange={(e) =>
                dispatch({ type: "SORT_PRODUCT", payload: e.target.value })
              }
            >
              <option value="expensive">Expensive</option>
              <option value="chear">Chear</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>: null
          }
          <div className="container ">
            <div className="block w-full flex-wrap">
              <div className="block-bl w-full flex-wrap">
                {products.slice(0, count).map((el) => (
                  <ProductCard el={el} />
                ))}
              </div>
            </div>
            {
              products.length ?
            <button
              onClick={
                products.length === count
                  ? () => setCout(3)
                  : () => setCout(count + 1)
              }
              className="product-btn"
            >
              {products.length === count ? "short..." : "more..."}
            </button>: null

            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
