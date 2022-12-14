import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import styles from "./Home.module.scss";
import Form from "../../components/Form/Form";
import Products from "../../components/Products/Products";

export default function Page() {
  return (
    <div className={styles.Container}>
      <Slider />
      <Form />
      <h5>Our Suggestions For You</h5>
      <Products />
    </div>
  );
}
