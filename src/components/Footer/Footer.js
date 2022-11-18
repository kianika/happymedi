import React from "react";
import styled from "styled-components";
import { GiMedicines } from "react-icons/gi";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { CgTwitter } from "react-icons/cg";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.container__firstRow}>
        <div className={styles.container__firstRow__first}>
          <div className={styles.container__firstRow__first__logo}>
            <GiMedicines
              className={styles.container__firstRow__first__logo__icon}
            />
            <h2>Happy Medi</h2>
          </div>
          <div className={styles.container__firstRow__first__icons}>
            <GrFacebookOption />
            <AiOutlineInstagram />
            <RiLinkedinFill />
            <CgTwitter />
          </div>
        </div>
        <div className={styles.container__firstRow__col}>
          <ul>
            <li>
              <h4>Need Help</h4>
            </li>
            <li>
              <p>Monday - Friday: 9:00 - 20:00</p>
            </li>
            <li>
              <p>Saturday: 9:00 - 15:00</p>
            </li>
            <li>Email: info@happymedi.at</li>
          </ul>
        </div>
        <div className={styles.container__firstRow__col}>
          <ul>
            <li>
              <h4 >Information</h4>
            </li>
            <li>
              <p>About Us</p>
            </li>
            <li>Delivery Information</li>
            <li>
              <p>Privacy and Policy</p>
            </li>
          </ul>
        </div>
        <div className={styles.container__firstRow__col}>
          <ul>
            <li>
              <h4>Account</h4>
            </li>
            <li>
              <p>Dashboard</p>
            </li>
            <li>
              <p>My Orders</p>
            </li>
            <li>
              <p>Account Details</p>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.container__secondRow}>
        <p>&copy;{new Date().getFullYear()} Happy Medi | All Right Reserved</p>
      </div>
    </div>
  );
}
