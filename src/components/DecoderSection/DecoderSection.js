import React from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import styles from "./DecoderSection.module.css";

export function DecoderSection({ onCopy, inputValue, onInputChange }) {
  return (
    <section className={styles.container__decoder}>
      <div className={styles.content__text__decoder}>
        <img src="./assets/text-decoder.png" alt="Decodificador de Texto" />
        <h1 className={styles.title__text_decoder}>Nenhuma mensagem encontrada</h1>

        <Input
          id="inputtext2"
          value={inputValue}
          onChange={onInputChange}
          placeholder="Digite um texto que você deseja criptografar ou descriptografar."
          className={styles.input__text__decoder}
        />

        <Button
          id="inputcopytext"
          onClick={onCopy}
          label="Copiar"
          className={styles.copy__button}
        />
      </div>
    </section>
  );
}
