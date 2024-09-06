import React from "react";
import img_logo from "../../assets/logo.png";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container_header}>
      <a href="#">
        <img src={img_logo} alt="Logo da Alura" />
      </a>
    </header>
  );
}