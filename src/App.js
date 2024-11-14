import React, { useState } from "react";
import { encryptText, decryptText } from "./utils/decodeUtil";

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

  // Função de validação ajustada
function validationTextareField(inputValue, isDecrypt = false) {
  if (!inputValue.trim()) {
    setErrorMessage('Campo de entrada está vazio!');
    return false;
  }

  // Se for descriptografia, relaxe a validação para aceitar o texto criptografado
  if (isDecrypt) {
    // Ajuste a regex para aceitar caracteres criptografados (como símbolos ou outros caracteres)
    if (!/^[a-z!]+$/.test(inputValue)) {
      setErrorMessage('Texto criptografado inválido!');
      return false;
    }
  } else {
    // Para criptografia, apenas letras minúsculas e espaços são permitidos
    if (!/^[a-z ]+$/.test(inputValue)) {
      setErrorMessage('Texto para decodificação inválido!');
      return false;
    }
  }

  return true;
}

function handleEncrypt() {
  if (!validationTextareField(inputValue)) return;
  const encrypted = encryptText(inputValue);
  setOutputValue(encrypted);
  setErrorMessage('');
}

function handleDecrypt() {
  if (!validationTextareField(inputValue, true)) return;
  const decrypted = decryptText(inputValue);
  setOutputValue(decrypted);
  setErrorMessage('');
}

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage('');
  };
  
  return (
    <div className={styles.container__app}>
       <main className={styles.container__main}>
          <Header />

        <section className={styles.container__text}>
          <Textarea
            id="inputApp"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Digite seu texto"
            className={styles.input__app}
          />

            {errorMessage && <p className="error__message">{errorMessage}</p>}
  
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

          <div className={styles.container__btn}>
            <Button
              id="codificador"
              label="Criptografar"
              onClick={handleEncrypt}
              className={styles.btn__encrypt}
            />
            
            <Button
              id="descriptografar"
              label="Descriptografar"
              onClick={handleDecrypt}
              className={styles.btn__decrypt}
            />
          </div>
        </section>

        <Decoder outputValue={outputValue} />
        
      </main>
    </div>
  );
}

export default App;