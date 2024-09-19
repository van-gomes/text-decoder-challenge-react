import React from "react";
import img_logo from "../../assets/logo.png";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header>
      <nav className={styles.container_header}>
        <a herf="#">
          <img src={img_logo} alt="Logo da Alura" />
        </a>
      </nav>
    </header>
  );
}