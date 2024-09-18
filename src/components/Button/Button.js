import React from "react";

import styles from "./Button.module.css";

export function Button({ id, onClick, label, className }) {
  return (
    <>
      <button
        id={id}
        className={className}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
}