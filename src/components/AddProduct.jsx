import React, { useState } from "react";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cart from "../images/icon-cart-light.svg";

function AddProduct({ setProductOnCart }) {
  const [count, setCount] = useState(0);

  const substract = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="addProduct">
      <div className="addProduct__counter">
        <img src={minus} alt="minus icon" onClick={() => substract()} />
        <h2>{count < 0 ? "0" : count}</h2>
        <img src={plus} alt="plus icon" onClick={() => setCount(count + 1)} />
      </div>
      <button
        className="addProduct__btn"
        onClick={() => setProductOnCart(count)}
      >
        <img src={cart} alt="cart" />
        Add to cart
      </button>
    </div>
  );
}

export default AddProduct;
