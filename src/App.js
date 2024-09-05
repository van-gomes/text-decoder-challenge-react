import React from "react";

import { Header } from "./components/Header/Header";
import { Button } from "./components/Button/Button";
import { DecoderSection } from "./components/DecoderSection/DecoderSection";

function App() {
  
  return (
    <div>
      <Header />
      <main className="container_main">
        <section className="container_text">
          <input
            id="inputtext1"
            placeholder="Digite seu texto"
          />

          <div className="btn">
            <Button
              id="codificador"
              label="Criptografar"
              className="encrypt__button"
            />
            <Button
              id="descriptografar"
              label="Descriptografar"
              className="decrypt__button"
            />
          </div>
        </section>
        <DecoderSection />
      </main>
    </div>
  );
}

export default App;
