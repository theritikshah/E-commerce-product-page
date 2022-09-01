import React, { useState } from "react";

import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";

const LightBox = (props) => {
  const productImages = [img1, img2, img3, img4];
  const [slide, setSlide] = useState(0);

  function handleNext() {
    setSlide((preSlide) => (preSlide === 3 ? 0 : slide + 1));
  }
  function handlePrevious() {
    setSlide((preSlide) => (preSlide === 0 ? 3 : slide - 1));
  }

  return (
    <>
      <div
        className="lightBox"
        onClick={() => {
          props.toggle.setToggleLightBox(false);
        }}
        style={
          props.toggle.toggleLightBox
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        <div className="container" onClick={(e) => e.stopPropagation()}>
          <div
            className="icon"
            onClick={() => props.toggle.setToggleLightBox(false)}
          >
            <svg
              viewBox="0 0 12 18"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </div>

          <div style={{ position: "relative" }}>
            <div className="slider-box">
              <div
                className="slider-images"
                style={{
                  transform: `translateX(calc(-${slide}00%))`,
                }}
              >
                {productImages.map((img, i) => {
                  return <img src={img} alt="" key={i} />;
                })}
              </div>
            </div>
            <button className="previous-btn" onClick={handlePrevious}>
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1 3 9l8 8"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </button>

            <button className="next-btn" onClick={handleNext}>
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <ul>
            {productImages.map((img, i) => (
              <li
                key={i}
                className={slide === i ? "active thumb" : "thumb"}
                onClick={(e) => {
                  setSlide(i);
                }}
              >
                <div className="overlay"></div>
                <img src={img} alt="" key={i} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      ;
    </>
  );
};

export default LightBox;
