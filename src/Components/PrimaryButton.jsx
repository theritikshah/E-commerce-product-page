import React from "react";
// import cartIcon from "../images/icon-cart.svg";

function PrimaryButton(props) {
  return (
    <button className="primary-btn" style={props.style} onClick={props.handle}>
      {props.icon && props.icon}
      {props.text}
    </button>
  );
}

export default PrimaryButton;
