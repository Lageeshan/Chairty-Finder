import React, { useState } from "react";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import CharitySearch from "./components/CharitySearch/CharitySearch";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";
import styles from "./styles/App.module.scss";
import { Loader } from "react-overlay-loader";

import "react-overlay-loader/styles.css";

function App() {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isWelcomeVisible ? (
        <Welcome setIsWelcomeVisible={setIsWelcomeVisible} />
      ) : (
        <>
          <div className={!isActive ? styles.main : styles.mainActive}>
            <Loader fullPage loading={isLoading} />
            <Header />
            <CharitySearch setIsActive={setIsActive} setIsLoading={setIsLoading} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
