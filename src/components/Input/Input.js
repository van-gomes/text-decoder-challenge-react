import React from "react";
import styles from "./Input.module.css";

export function Input({ id, value, onChange, placeholder }) {
  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.container__text__input}
    />
  );
}
