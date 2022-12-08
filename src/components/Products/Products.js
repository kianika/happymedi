import React from "react";
import styles from "./Products.module.scss";
import { SuggestedProducts } from "../../data";
import Product from "../Product/Product";

function Products() {
  return (
    <div className={styles.Container}>
      {SuggestedProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Products;
