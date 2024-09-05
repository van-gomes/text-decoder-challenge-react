import React from "react";
import styles from "./Button.module.css";

export function Button({ id, onClick, label, className }) {
  return (
    <>
      <div className={styles.container__info__type__text}>
        <div className={styles.content__info__type__text}>
          <img
            src="./assets/bi_exclamation-circle-fill.png"
            alt="Aviso do tipo de texto a ser inserido"
          />
          <p className={styles.paragraph__info__type__text}>
            Apenas letras minúsculas e sem acento.
          </p>
        </div>
      </div>

      <button id={id} className={styles[className]} onClick={onClick}>
        {label}
      </button>
   </>
  );
}