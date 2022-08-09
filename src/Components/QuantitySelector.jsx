import React from "react";
import IconPlus from "../images/icon-plus.svg";
import IconMinus from "../images/icon-minus.svg";

function QuantitySelector(props) {
  return (
    <div className="quantity">
      <button className="btn-minus">
        <img src={IconMinus} alt="Minus" />
      </button>
      <span className="qty">5</span>
      <button className="btn-plus">
        <img src={IconPlus} alt="plus" />
      </button>
    </div>
  );
}

export default QuantitySelector;
