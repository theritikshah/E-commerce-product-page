import React, { useState } from "react";
import ProductSlider from "../Components/ProductSlider";
import CartItems from "./CartItem";
import PrimaryButton from "./PrimaryButton";
import ProductGallery from "./ProductGallery";
import QuantitySelector from "./QuantitySelector";
import LightBox from "./LightBox";
import QuantityContext from "../context/QuantityContext";
import CartContext from "../context/CartContext";
import { useContext } from "react";
import CartToggleContext from "../context/cartToggleContext";

function ProductDetails(props) {
  const { quantity } = useContext(QuantityContext);
  const { setCart } = useContext(CartContext);
  const { setCartState } = useContext(CartToggleContext);

  const [toggleLightBox, setToggleLightBox] = useState(false);

  function handleAddTocart() {
    setCartState(true);
    setCart(function () {
      return {
        itemQty: quantity,
        items: <CartItems quantity={quantity} />,
      };
    });
  }

  return (
    <div className="container">
      <div className="product-gallery">
        <ProductSlider />
        <LightBox toggle={{ toggleLightBox, setToggleLightBox }} />
        <ProductGallery toggle={{ setToggleLightBox }} />
      </div>

      <div className="product-copy">
        <h3 className="brand-name">SNEAKER COMPANY</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casaul wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="price">
          <div className="price-col">
            <span className="net">$125.00</span>
            <div className="discount">50%</div>
          </div>
          <div className="mrp">$250.00</div>
        </div>
        <div className="qty-box">
          <QuantitySelector />
          <PrimaryButton
            handle={handleAddTocart}
            text="Add to cart"
            icon={
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="white"
                  fillRule="nonzero"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
