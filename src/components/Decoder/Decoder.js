import React, { useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

import text_decoder from "../../assets/text-decoder.png";
import styles from "./Decoder.module.css";

export function Decoder() {
  const [inputValue, setInputValue] = useState('');
  
  function handleCopyText() {
    let textToCopy = document.querySelector('#inputtext2').value;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log('Texto copiado com sucesso!');
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section className={styles.container__decoder}>
      <div className={styles.content__text__decoder}>
        <img src={text_decoder} alt="Decodificador de Texto" />
        <h1 className={styles.title__text_decoder}>Nenhuma mensagem encontrada</h1>

        <Input
          id="inputtext2"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite um texto que você deseja criptografar ou descriptografar."
          className={styles.input__text__decoder}
        />

        <Button
          id="inputcopytext"
          onClick={handleCopyText}
          label="Copiar"
          className={styles.copy__button}
        />
      </div>
    </section>
  );
}