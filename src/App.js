import React, { useState } from "react";
import { encryptText, decryptText } from "./utils/utils";

import { Button } from "./components/Button/Button";
import { Decoder } from "./components/Decoder/Decoder";
import { Header } from "./components/Header/Header";
import { Textarea } from "./components/Textarea/Textarea";

import bi_exclamation from "./assets/bi_exclamation-circle-fill.png";

import styles from "./App.module.css";
import "./styles/global.css";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function validationTextareField(inputValue) {
    if (!inputValue.trim()) {
      setErrorMessage('Campo de entrada está vazio!');
      return false;
    }

    if (!/^[a-z ]+$/.test(inputValue)) {
      setErrorMessage('Texto para decodificação inválido!');
      return false;
    }
    return true;
  }

  // Função de criptografia
  function handleEncrypt() {
    if (!validationTextareField(inputValue)) return;
    const encrypted = encryptText(inputValue);
    setOutputValue(encrypted);
    setErrorMessage('');
  }

  // Função de descriptografia
  function handleDecrypt() {
    if (!validationTextareField(inputValue)) return;
    const decrypted = decryptText(inputValue);
    setOutputValue(decrypted);
    setErrorMessage('');
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage('');
  };
  
  return (
    <div className={styles.app_container}>
       <main className={styles.app__container__main}>
          <Header />

        <section className={styles.container_text}>
          <Textarea
            id="inputtext1"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Digite seu texto"
            className={styles.container__text__input}
            data-testid="inputtext1"
          />

            {errorMessage && <p className="error-message">{errorMessage}</p>}
  
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

        <Decoder outputValue={outputValue} />
        
      </main>
    </div>
  );
}

export default App;