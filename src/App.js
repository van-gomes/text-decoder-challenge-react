import React, { useState } from "react";

import { Button } from "./components/Button/Button";
import { Decoder } from "./components/Decoder/Decoder";
import { Header } from "./components/Header/Header";
import { Textarea } from "./components/Textarea/Textarea";

import bi_exclamation from "./assets/bi_exclamation-circle-fill.png";

import styles from "./App.module.css";
import "./styles/global.css";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [isDecodedText, setIsDecodedText] = useState(false);

  const handleTextareChange = (e) => {
      setInputValue(e.target.value);
  };
  
  function handleEncrypt() {
    const encrypted = inputValue.split('').map(char => 
      String.fromCharCode(char.charCodeAt(0) + 1)
    ).join('');

    setEncryptedText(encrypted);
    setIsDecodedText(true);
  }

  function handleDecrypt() {
      const decrypted = encryptedText.split('').map(char => 
        String.fromCharCode(char.charCodeAt(0) - 1)
      ).join('');

      setDecryptedText(decrypted);
      setIsDecodedText(true);
  }
  
  return (
    <div className={styles.app_container}>
       <main className={styles.app__container__main}>
          <Header />

        <section className={styles.container_text}>
          <Textarea
            data-testid="inputtext1"
            value={inputValue}
            onChange={handleTextareChange}
            placeholder="Digite seu texto"
            className={styles.container__text__input}
          />
          
          <div className={styles.container__info__type__text}>
            <div className={styles.content__info__type__text}>
              <img
                src={bi_exclamation}
                alt="Aviso do tipo de texto a ser inserido no input"
              />
              <p className={styles.paragraph__info__type__text}>
                Apenas letras minúsculas e sem acento.
              </p>
            </div>
          </div>

          <div className={styles.btn}>
            <Button
              id="codificador"
              label="Criptografar"
              onClick={handleEncrypt}
              className={styles.encrypt__button}
            />
            <Button
              id="descriptografar"
              label="Descriptografar"
              onClick={handleDecrypt}
              className={styles.decrypt__button}
            />
          </div>
        </section>

        <Decoder 
              encryptedText={encryptedText} 
              decryptedText={decryptedText}
              isDecodedText={isDecodedText}
        />
      </main>
    </div>
  );
}

export default App;