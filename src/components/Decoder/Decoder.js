import React from "react";
import { useCopyMessage } from "../../hooks/useCopyMessage";
import { copyTextToClipboard } from "../../utils/copyUtil";

import { Button } from "../Button/Button";
import { Textarea } from "../Textarea/Textarea";
import text_decoder from "../../assets/text-decoder.png";
import styles from "./Decoder.module.css";

export function Decoder({ outputValue }) {
  const { copySuccess, showMessage } = useCopyMessage();

  function handleCopyText() {
    copyTextToClipboard(outputValue, showMessage);
  }

  return (
    <section className={styles.container__decoder}>
      <div className={styles.content__decoder}>

      {outputValue === '' && (
        <>
          <img
            className={styles.img_text_decoder}
            src={text_decoder} 
            alt="Decodificador de Texto" 
          />

          <h1
            className={styles.title__text_decoder}
          >
              Nenhuma mensagem encontrada
          </h1>
        </>
      )}   
       
       <div className={styles.textarea__decoder}>
          <Textarea
                id="inputtextDecodificador"
                value={outputValue}
                onChange={e => (e.target.value)} 
                placeholder="Digite um texto que você deseja criptografar ou descriptografar"
                className={`${
                  outputValue ? styles.input__with__text__decoder  :
                   styles.input__without__text__decoder}`}
              />
       </div>
         
        <div className={styles.container__copy__button}>
          <Button
            id="inputcopytext"
            onClick={handleCopyText}
            label="Copiar"
            aria-label="Copiar"
            className={styles.btn__copy}
          />
        </div>
      </div>
 
      <div className={styles.container__copy_message}>
        {copySuccess && ( <p className={styles.copy__message}>{copySuccess}</p> )}
      </div>
    </section>
  );
}