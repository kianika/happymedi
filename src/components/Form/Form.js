import React from 'react'
import styles from "./Form.module.scss"
import { FaNotesMedical } from "react-icons/fa"

function Form() {
  return (
    <div className={styles.Container}>
      <div className={styles.Container__iconContainer}>
      <FaNotesMedical className ={styles.Container__iconContainer__icon}/>
      <p> Insert Your Data</p>
      </div>
      <input placeholder='sex'/>
      <input placeholder='Age'/>
      <input placeholder='Weight'/>
      <button type='submit'>Next </button>
    </div>
  )
}

export default Form