import React from "react";
import IconPlus from "../images/icon-plus.svg";
import IconMinus from "../images/icon-minus.svg";
// import { useState } from "react";
import QuantityContext from "../context/QuantityContext";
import { useContext } from "react";

function QuantitySelector(props) {
  const { quantity, setQuantity } = useContext(QuantityContext);

  // const [qty, setQty] = useState(1);

  function handleMinus() {
    setQuantity((qty) => (qty <= 1 ? 1 : qty - 1));
  }

  function handlePlus() {
    setQuantity((qty) => qty + 1);
  }

  return (
    <div className="quantity">
      <button className="btn-minus" onClick={handleMinus}>
        <img src={IconMinus} alt="Minus" />
      </button>
      <span className="qty">{quantity}</span>
      <button className="btn-plus" onClick={handlePlus}>
        <img src={IconPlus} alt="plus" />
      </button>
    </div>
  );
}

export default QuantitySelector;
