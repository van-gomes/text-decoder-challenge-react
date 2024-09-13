import React from "react";
import styles from "./Input.module.css";

export function Input({ id, className, onChange, placeholder, value }) {
  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}
