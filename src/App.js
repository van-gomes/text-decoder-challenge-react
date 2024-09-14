import React, { useState } from "react";

import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import { Decoder } from "./components/Decoder/Decoder";
import bi_exclamation from "./assets/bi_exclamation-circle-fill.png";

import styles from "./App.module.css";
import "./styles/global.css";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  function handleEncrypt() {
    const encrypted = inputValue.split('').map(char => 
      String.fromCharCode(char.charCodeAt(0) + 1)
    ).join('');

    setEncryptedText(encrypted);
    console.log('texto criptografado', encrypted);
  }

  function handleDecrypt() {
      const decrypted = encryptedText.split('').map(char => 
        String.fromCharCode(char.charCodeAt(0) - 1)
      ).join('');
      setDecryptedText(decrypted);
      console.log('texto descriptografado', decrypted);
  }
  
  return (
    <div>
      <Header />

      <main className={styles.container_main}>
        <section className="container_text">
          <Input
            id="inputtext1"
            value={inputValue}
            onChange={handleInputChange}
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

        <Decoder encryptedText={encryptedText} decryptedText={decryptedText} /> {/* Passa o texto criptografado ao Decoder */}
      </main>
    </div>
  );
}

export default App;