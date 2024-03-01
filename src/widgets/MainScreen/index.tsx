import React from "react";
import { Slide } from "react-awesome-reveal";
import { DefaultButton } from "../../shared/ui/Button";

import illustration from '../../assets/illustration.svg'

import styles from "./styles.module.scss";

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
                        src={illustration}
                        className={styles.main__illustration}
                        alt="photo"
                    />
                </Slide>
                <Slide direction="right" delay={200} triggerOnce>
                    <DefaultButton text="Подробнее" />
                </Slide>
            </main>
            <main className={styles.main__pc} id="main-pc">
                <div className={styles.main_pc}>
                    <Slide direction="left" delay={100} triggerOnce>
                        <h1 className={styles.heading}>
                            Открой мир новых{""}
                            <span className={styles.main_pc__span}> возможностей </span>

                        </h1>
                    </Slide>
                    <Slide direction="left" delay={150} triggerOnce>
                        <p className={styles.main_pc__paragraph}>
                            Мы представляем биржевые интересы сотен уважаемых бизнесменов из
                            Казахстана и соседних стран. Наши брокеры всегда в курсе изменений
                            биржевых правил и создают выгодные условия для клиентов.
                        </p>
                    </Slide>
                    <Slide direction="left" delay={200} triggerOnce>
                        <DefaultButton text="Подробнее" to="about-pc" />
                    </Slide>
                </div>
                <Slide direction="right" delay={250} triggerOnce>
                    <img
                        src={illustration}
                        className={styles.main_pc__illustration}
                        alt="illustration"
                    />
                </Slide>
            </main>
        </>
    );
};
