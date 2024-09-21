import React, { useState, useEffect } from "react";

import { Button } from "../Button/Button";
import { Textarea } from "../Textarea/Textarea";
import text_decoder from "../../assets/text-decoder.png";
import styles from "./Decoder.module.css";

export function Decoder({ encryptedText, decryptedText, isDecodedText }) {
  const [inputValue, setInputValue] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  useEffect(() => {
    if (decryptedText) {
      setInputValue(decryptedText);
    } else if (encryptedText) {
      setInputValue(encryptedText);
    }
  }, [encryptedText, decryptedText]);

  function handleCopyText() {
    let textToCopy = inputValue;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        setCopySuccess('Texto copiado com sucesso!');
        setInputValue('');
    }).catch(err => {
        setCopySuccess('Ops, ocorreu um erro ao copiar o texto!');
    });
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section className={styles.container__decoder}>
      <div className={styles.content__text__decoder}>
        <img
          className={`${isDecodedText ? styles.hidden : styles.img_text_decoder}`}
          src={text_decoder} 
          alt="Decodificador de Texto" 
        />

        <h1 
          className={`${isDecodedText ? styles.hidden : styles.title__text_decoder}`}
        >
          Nenhuma mensagem encontrada
        </h1>

        <Textarea
          id="inputtextDecodificador"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite um texto que você deseja criptografar ou descriptografar."
          className={`${isDecodedText ? styles.input__decoder__with__text : styles.input__text__decoder}`}
        />

        <div className={styles.container_copy_button}>
          <Button
            id="inputcopytext"
            onClick={handleCopyText}
            label="Copiar"
            aria-label="Copiar o texto inserido"
            className={styles.copy__button}
          />
        </div>
      </div>
 
      {copySuccess && ( <p className={styles.copyMessage}>{copySuccess}</p> )}
    </section>
  );
}