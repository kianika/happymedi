import React from "react";
import styles from "./Product.module.scss";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoBasketOutline } from "react-icons/io5";

function Product({ item }) {
  return (
    <div className={styles.Container}>
      <img src={item.img} />

      <h3>{item.title}</h3>
      <p className={styles.Container__Number}>{item.number}</p>
      <p className={styles.Container__Price}>{item.price}</p>
      <div className={styles.Container__Icons}>
        <div className={styles.Container__Icons__IconsWrapper}>
          <IoBasketOutline />
        </div>
        <div className={styles.Container__Icons__IconsWrapper}>
          <MdOutlineFavoriteBorder />
        </div>
      </div>
    </div>
  );
}

export default Product;
