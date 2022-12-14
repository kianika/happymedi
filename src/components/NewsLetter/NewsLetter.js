import React from "react";
import styles from "./NewsLetter.module.scss";
import { IoPaperPlaneOutline } from "react-icons/io5";

function NewsLetter() {
  return (
    <div className={styles.Container}>
      <h1>Join our newsletter</h1>
      <p>
        Join over half a million vitamin lovers and get our latest deals,
        articles, and resources!
      </p>
      <form className={styles.Container__Form}>
        <input
          type="text"
          placeholder="Email Address"
          className={styles.Container__Form__Email}
        ></input>
        <button className={styles.Container__Form__Button}>
          <IoPaperPlaneOutline />
          <span>Subscribe</span>
        </button>
      </form>
    </div>
  );
}

export default NewsLetter;
