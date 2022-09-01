import React from "react";
import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";
import iconNext from "../images/icon-next.svg";
import iconPrevious from "../images/icon-previous.svg";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

function ProductSlider(props) {
  const [slide, setSlide] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setSlide((currentslide) => {
        if (currentslide === 3) {
          return 0;
        } else {
          return currentslide + 1;
        }
      }),
    onSwipedRight: () =>
      setSlide((e) => {
        if (e === 0) {
          return 3;
        } else {
          return e - 1;
        }
      }),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  function handlePrevious() {
    setSlide((e) => {
      if (e === 0) {
        return 3;
      } else {
        return e - 1;
      }
    });
    console.log(slide);
  }

  function handleNext() {
    setSlide((currentslide) => {
      if (currentslide === 3) {
        return 0;
      } else {
        return currentslide + 1;
      }
    });
    console.log(slide);
  }

  return (
    <div {...handlers} className="product-slider" {...props}>
      <div className="slider-btn">
        <button className="previous-btn" onClick={handlePrevious}>
          {" "}
          <img src={iconPrevious} alt="previous icon" />
        </button>
        <button className="next-btn" onClick={handleNext}>
          {" "}
          <img src={iconNext} alt="next icon" />
        </button>
      </div>
      <img
        src={img1}
        style={{ transform: `translateX(-${slide}00%)` }}
        alt="shoe"
      />
      <img
        src={img2}
        style={{ transform: `translateX(-${slide}00%)` }}
        alt="shoe"
      />
      <img
        src={img3}
        style={{ transform: `translateX(-${slide}00%)` }}
        alt="shoe"
      />
      <img
        src={img4}
        style={{ transform: `translateX(-${slide}00%)` }}
        alt="shoe"
      />
    </div>
  );
}

export default ProductSlider;
