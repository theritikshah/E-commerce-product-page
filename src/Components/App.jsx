import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import ProductDetails from "./ProductDetails";
import QuantityContext from "../context/QuantityContext";
import { CartProvider } from "../context/CartContext";
import { CartToggleContextProvider } from "../context/cartToggleContext";

function App(props) {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState({ itemQty: 0, items: "" });
  const [cartState, setCartState] = useState(false);

  return (
    <QuantityContext.Provider value={{ quantity, setQuantity }}>
      <CartProvider value={{ cart, setCart }}>
        <CartToggleContextProvider value={{ cartState, setCartState }}>
          <div>
            <Navbar />
            <ProductDetails />
          </div>
        </CartToggleContextProvider>
      </CartProvider>
    </QuantityContext.Provider>
  );
}

export default App;
