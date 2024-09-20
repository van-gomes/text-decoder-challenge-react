import React from "react";
// import styles from "./Textarea.module.css";

export function Textarea({ id, className, onChange, placeholder, value }) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}