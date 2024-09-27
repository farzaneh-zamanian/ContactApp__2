import React from "react";
import styles from "./Input.module.css";

function Input({ hint, changeHandler }) {

  return (
    <div className={styles.inputContainer}>
      <label htmlFor="input">{hint}</label>
      <input type="text" id="input" onChange={changeHandler} />
    </div>
  );
}

export default Input;
