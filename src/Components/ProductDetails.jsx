import React from "react";
import ProductSlider from "../Components/ProductSlider";
import PrimaryButton from "./PrimaryButton";
import ProductGallery from "./ProductGallery";
import QuantitySelector from "./QuantitySelector";

function ProductDetails(props) {
  return (
    <div className="container">
      <div className="product-gallery">
        <ProductSlider />
        <ProductGallery />
      </div>

      <div className="product-copy">
        <h3 className="brand-name">SNEAKER COMPANY</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low profile sneakers are your perfect casaul wear companion.
          Featuring a durable rubber outer sole, they'll withdtand everything
          the wheather can offer.
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
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
