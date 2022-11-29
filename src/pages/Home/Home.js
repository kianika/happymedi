import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import styles from "./Home.module.scss"



export default function Page() {
  return (
   
   <div className={styles.Container}>
      <Slider />
   </div>
    
  );
}

