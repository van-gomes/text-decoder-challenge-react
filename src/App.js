import React from "react";

import { Header } from "./components/Header/Header";
import { Button } from "./components/Button/Button";
import { DecoderSection } from "./components/DecoderSection/DecoderSection";
import bi_exclamation from "./assets/bi_exclamation-circle-fill.png";

import styles from "./App.module.css";
import "./styles/global.css";
import "./styles/styles.css";

function App() {
  
  return (
    <div>
      <Header />
      <main className={styles.container_main}>
        <section className="container_text">
          <input
            id="inputtext1"
            placeholder="Digite seu texto"
          />

          <div className={styles.container__info__type__text}>
            <div className={styles.content__info__type__text}>
              <img
                src={bi_exclamation}
                alt="Aviso do tipo de texto a ser inserido"
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
              className={styles.encrypt__button}
            />
            <Button
              id="descriptografar"
              label="Descriptografar"
              className={styles.decrypt__button}
            />
          </div>
        </section>
        <DecoderSection />
      </main>
    </div>
  );
}

export default App;
