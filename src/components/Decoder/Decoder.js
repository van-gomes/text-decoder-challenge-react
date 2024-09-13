import React, { useState, useEffect } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

import text_decoder from "../../assets/text-decoder.png";
import styles from "./Decoder.module.css";

export function Decoder({ encryptedText, decryptText }) {
  const [inputValue, setInputValue] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  useEffect(() => {
    if (encryptedText) {
      setInputValue(encryptedText); // Atualiza o valor do input com o texto criptografado
    } else {
      setInputValue(decryptText);
    }
  }, [encryptedText, decryptText]);

  function handleCopyText() {
    let textToCopy = inputValue;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        setCopySuccess('Texto copiado com sucesso!');
        setInputValue('');
    }).catch(err => {
        console.error('Ops, ocorreu um erro ao copiar o texto!');
    });
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section className={styles.container__decoder}>
     <div className={styles.content__text__decoder}>
        <img src={text_decoder} alt="Decodificador de Texto" />
        <h1 className={styles.title__text_decoder}>
          {inputValue ? "Texto criptografado" : "Nenhuma mensagem encontrada"}
        </h1>

        <Input
          id="inputtextDecodificador"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite um texto que deseja decodificar"
          className={`${styles.input__text__decoder} ${inputValue.length > 0 && styles.top_aligned}`}
        />

        <Button
          id="inputcopytext"
          onClick={handleCopyText}
          label="Copiar"
          aria-label="Copiar o texto inserido"
          className={styles.copy__button}
        />

        {copySuccess && <p className={styles.copyMessage}>{copySuccess}</p>}
      </div>
    </section>
  );
}