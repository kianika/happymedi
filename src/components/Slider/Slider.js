import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import styles from "./Slider.module.scss";
import { sliderItems } from "./data";

function Slider() {
  const [current, setCurrent] = useState(0);
  const length = sliderItems.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderItems) || sliderItems.length <= 0) {
    return null;
  }

  return (
    <div className={styles.Container}>
      <div
        className={`${styles.Container__Arrow} ${styles.Container__Arrow__Left}`}
      >
        <AiOutlineArrowLeft onClick={prevSlide} />
      </div>
      <div className={styles.Container__Wrapper}>
        {sliderItems.map((slide, index) => {
          return (
            <div
              className={
                index === current
                  ? styles.Container__Wrapper__SlideActive
                  : styles.Container__Wrapper__Slide
              }
            >
              <div
                className={styles.Container__Wrapper__SlideActive__ImgContainer}
              >
                <img src={slide.img} />
              </div>
              <div
                className={
                  styles.Container__Wrapper__SlideActive__InfoContainer
                }
              >
                <h1> Deal of the Week</h1>
                <p>{slide.desc}</p>
                <button>Shop Now</button>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`${styles.Container__Arrow} ${styles.Container__Arrow__Right}`}
      >
        <AiOutlineArrowRight onClick={nextSlide} />
      </div>
    </div>
  );
}

export default Slider;
