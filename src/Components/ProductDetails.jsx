import React from "react";
import ProductSlider from "../Components/ProductSlider";
import ProductGallery from "./ProductGallery";

function ProductDetails(props) {
  return (
    <div className="container">
      <div className="product-gallery">
        <ProductSlider />
        <ProductGallery />
      </div>

      <div className="product-copy"></div>
    </div>
  );
}

export default ProductDetails;
