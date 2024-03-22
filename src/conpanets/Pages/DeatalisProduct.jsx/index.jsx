import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DeatalisProduct = () => {
  const { Proid } = useParams();
  const { products } = useSelector((s) => s);
  let findPro = products.find((el) => el.id === +Proid);
  return (
    <div>
      <div id="detalisProduct">
        <div className="container">
          <div className="detalisProduct">
            <img src={findPro.photo} alt="img" />
            <div className="detalisProduct--text">
              <h1>{findPro.price} сом</h1>
                <h4>{findPro.name}/{findPro.category}</h4>

              <p>{findPro.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeatalisProduct;
