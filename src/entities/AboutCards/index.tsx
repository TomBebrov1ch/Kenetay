import React from "react";
import { Fade } from "react-awesome-reveal";

import styles from "./styles.module.scss";

interface AboutCardsData {
  Icon: React.ElementType;
  heading: string;
  text: string;
}

export const AboutCards: React.FC<AboutCardsData> = ({
  Icon,
  heading,
  text,
}) => {
  return (
    <Fade>
      <div className={styles.card}>
        <div className={styles.card__container}>
          <Icon className={styles.card__img} size={10} />
          <span className={styles.card__text}>{heading}</span>
        </div>
        <div className={styles.card__line}>
          <br />
        </div>
        <p className={styles.card__paragraph}>{text}</p>
      </div>
    </Fade>
  );
};
