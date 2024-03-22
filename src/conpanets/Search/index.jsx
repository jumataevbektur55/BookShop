import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Search = () => {
  const { products } = useSelector((s) => s);
  let { proName } = useParams();
  let findSearch = products.find((el) => el.name === proName);
  let { id, name, price, photo, category } = findSearch;
  return (
    <div>
      <div className="container ">
        <div className="row mt-12">
          <Link to={`deatalisproduct/${id}`}>
            <img src={photo} alt="" className="main" />
          </Link>
          <div className="row-1">
            <h1>{price}$</h1>
          </div>
          <div className="row-2">
            <h5>
              {name} / {category}
            </h5>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                ADD TO BASKET
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
