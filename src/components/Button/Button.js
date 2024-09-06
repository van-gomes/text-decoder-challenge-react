import React from "react";

import styles from "./Button.module.css";

export function Button({ id, onClick, label, className }) {
  return (
    <>
      <button
        id={id}
        className={className === "encrypt__button" ? styles.encrypt__button : styles.decrypt__button}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
}