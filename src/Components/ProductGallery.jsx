import React from "react";
import { useState } from "react";
import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";

function ProductGallery(props) {
  const productImages = [img1, img2, img3, img4];
  const [mainImg, setMainImg] = useState(img1);

  return (
    <>
      <div className="gallery-grid">
        <div
          className=" mainBox"
          onClick={() => {
            props.toggle.setToggleLightBox(true);
          }}
        >
          <img src={mainImg} alt="" />
        </div>
        {productImages.map((img, i) => (
          <div key={i} className={img === mainImg ? "active box" : "box"}>
            <img
              src={img}
              alt=""
              key={i}
              onClick={(e) => {
                setMainImg(img);
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductGallery;
