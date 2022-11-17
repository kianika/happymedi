import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiMedicines } from "react-icons/gi";
import Form from "react-bootstrap/Form";
import { AiOutlineUser } from "react-icons/ai";
import styles from "./Header.module.scss";
import { SlBasket } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.container__topHeader}>
      Due to the COVID 19 epidemic, orders may be processed with a slight delay
      </div>
      <div className={styles.container__Header}>
        <div className={styles.container__Header__left}>
          <GiMedicines size={30} style={{ color: "#15A9E3" }} />
          <h2>Happy Medi</h2>
        </div>

        <form className={styles.container__Header__center}>
          <div className={styles.container__Header__center__searchContainer}>
            <Form.Select
              aria-label="Default select example"
              className={
                styles.container__Header__center__searchContainer__select
              }
            >
              <option>Category</option>
              <option value="1">Beauty</option>
              <option value="2">Medicine</option>
              <option value="3">Herbs</option>
            </Form.Select>
            <input type="text" placeholder="What are you Looking for?" />
            <div
              className={
                styles.container__Header__center__searchContainer__icons
              }
            >
              <CiSearch />
            </div>
          </div>
        </form>
        <div className={styles.container__Header__right}>
          <AiOutlineUser /> My Account
        </div>
      </div>

      <hr />
      <div className={styles.container__Navbar}>
        <div className={styles.container__Navbar__left}>All categories</div>
        <div className={styles.container__Navbar__center}>
          <nav>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Shop by Brand</a>
              </li>
              <li>
                <a>Shop by Category</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.container__Navbar__right}>
          <MdFavoriteBorder />
          <SlBasket />
        </div>
      </div>
      <hr />
    </div>
  );
}
