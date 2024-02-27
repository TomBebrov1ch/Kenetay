import React from "react";
// import { Button } from "@shared/ui/Button";
import { Slide } from "react-awesome-reveal";

import illustrarion from '../../assets/illustration.svg'

import styles from "./styles.module.scss";
import { DefaultButton } from "../../shared/ui/Button";

export const HomeScreen = () => {
    return (
        <>
            <main className={styles.main} id="main">
                <Slide
                    direction="left"
                    triggerOnce
                >
                    <h1 className={styles.main__heading}>
                        Открой мир новых
                    </h1>
                    <span className={styles.main__heading__span}>
                        возможностей
                    </span>
                </Slide>
                <Slide direction="right" delay={100} triggerOnce>
                    <p className={styles.main__paragraph}>
                        Мы представляем биржевые интересы сотен уважаемых бизнесменов из
                        Казахстана и соседних стран. Наши брокеры всегда в курсе изменений
                        биржевых правил и создают выгодные условия для клиентов.
                    </p>
                </Slide>
                <Slide direction="left" delay={150} triggerOnce>
                    <img
                        src={illustrarion}
                        className={styles.main__illustration}
                        alt="photo"
                    />
                </Slide>
                <Slide direction="right" delay={200} triggerOnce>
                    <DefaultButton text="Подробнее" to="about" />
                </Slide>
            </main>
        </>
    );
};
