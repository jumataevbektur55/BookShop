import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { tip } = useSelector((s) => s);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [pass, setPass] = useState("");
  const password = "123";
  const addProduct = () => {
    if (pass === password) {
      nav("/addproduct");
      dispatch({ type: "CLOSE", payload: false });
    } else if (pass === "") {
      alert("заполните обезятельное поле!!!");
    } else {
      alert("неправильный пароль!!!");
      setPass("");
    }
  };
  const closeBtn = () => {
    dispatch({ type: "CLOSE", payload: false });
  };
  return (
    <div className="div">
      <div id="admin">
        <div className="container">
          <div className="admin">
            <h1 onClick={() => closeBtn()}>X</h1>
            <div className="admin--nav">
              <input 
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="number"
                placeholder="password..."
              />
              <button onClick={() => addProduct()}>sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;