import React from "react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container_header}>
      <a href="#">
        <img src="./assets/logo.png" alt="Logo da Alura" />
      </a>
    </header>
  );
}
