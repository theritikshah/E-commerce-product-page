import React from "react";
import PrimaryButton from "./PrimaryButton";
import CartContext from "../context/CartContext";
import { useContext } from "react";

function CartMenu(props) {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-menu" onClick={(e) => e.stopPropagation()}>
      <h4>Cart</h4>
      {cart.itemQty === 0 && (
        <div className="empty-cart">
          <p style={{ fontWeight: "700" }}>Your cart is empty</p>
        </div>
      )}
      {!!cart.itemQty && (
        <div className="cart-menu-content">
          {cart.items}

          <PrimaryButton
            text="Checkout"
            style={{ boxShadow: "none", width: "100%", marginBottom: 0 }}
          />
        </div>
      )}
    </div>
  );
}

export default CartMenu;
