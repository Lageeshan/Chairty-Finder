import React from "react";
import styles from "./Welcome.module.scss";
import Button from "../Button/Button";

interface Props {
  isVisible?: boolean;
  setIsWelcomeVisible: (isVisible: boolean) => void;
}

function Welcome({ isVisible = true, setIsWelcomeVisible }: Props) {
  const handleClick = () => {
    setIsWelcomeVisible(false);
  };
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Welcome to charity finder</h2>
      <p className={styles.paragraph}>
        This simple app allows you to search for a list of global charities. Simply find a charity that matches your
        interests.{" "}
        <span role="img" aria-label="Heart icon">
          ❤️
        </span>
      </p>
      <Button onClick={handleClick} label="Proceed to site" />
    </section>
  );
}

export default Welcome;
