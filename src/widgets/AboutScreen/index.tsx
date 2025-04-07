import React from "react";
import { Slide } from "react-awesome-reveal";
import { AboutCards } from "../../entities/AboutCards";
import { Separator } from "../../entities/Separator";
import { LucideAArrowDown } from "lucide-react";

import { DollarSign, FileCheck, Truck } from "lucide-react";
import illustration from "../../assets/illustration-about.svg";

import styles from "./styles.module.scss";

export const AboutScreen = () => {
  return (
    <>
      <section className={styles.about} id="about">
        <Slide direction="left" delay={100} triggerOnce>
          <Separator text="О нас" />
        </Slide>
        <Slide direction="right" delay={150} triggerOnce>
          <h2 className={styles.about__heading}>О компании</h2>
        </Slide>
        <Slide direction="left" delay={200} triggerOnce>
          <p className={styles.about__paragraph}>
            Кенетай Агро — это команда профессионалов, которая уже более 10 лет
            помогает бизнесу эффективно работать на товарных биржах Казахстана.
            Мы не просто подаём заявки — мы сопровождаем клиента на каждом
            этапе, разъясняем правила, оптимизируем сделки и защищаем ваши
            интересы. Надёжность, прозрачность и выгодные условия — три
            принципа, на которых строится наша работа.
          </p>
        </Slide>
        <Slide
          className={styles.about__sub}
          direction="right"
          delay={250}
          triggerOnce
        >
          <span>
            Наша схема <span className={styles.about__sub__par}>работы</span>{" "}
            очень проста:
          </span>
        </Slide>
        <Slide direction="left" delay={300} triggerOnce>
          <AboutCards
            Icon={DollarSign}
            heading="Подача Заявки"
            text="Вы связываетесь с брокером, оговариваете товар, объёмы, сроки и цену. Мы публикуем заявку на бирже и запускаем процесс."
          />
        </Slide>
        <Slide direction="up" delay={350} triggerOnce>
          <AboutCards
            Icon={FileCheck}
            heading="Внесение Обеспечения"
            text="Поставщики проходят отбор, вносят обеспечение, и стартуют торги. Мы заключаем сделку по лучшей цене."
          />
        </Slide>
        <Slide direction="right" delay={400} triggerOnce>
          <AboutCards
            Icon={Truck}
            heading="Исполнение Поставки"
            text="Поставщик отгружает товар в срок, по договорённым условиям. Мы контролируем выполнение до конца сделки."
          />
        </Slide>
      </section>
      <section className={styles.container_pc} id="about-pc">
        <div className={styles.ill_con}>
          <img
            src={illustration}
            alt="illustration"
            className={styles.illustration_pc}
          />
          <div className={styles.container}>
            <Slide direction="left" triggerOnce delay={100}>
              <span className={styles.container__s}>
                <h2 className={styles.container__s__text}>О нас</h2>
                <hr className={styles.container__s__separator} />
              </span>
            </Slide>
            <Slide direction="left" delay={200} triggerOnce>
              <p className={styles.container__paragraph}>
                Кенетай Агро — это команда профессионалов, которая уже более 10
                лет помогает бизнесу эффективно работать на товарных биржах
                Казахстана. Мы не просто подаём заявки — мы сопровождаем клиента
                на каждом этапе, разъясняем правила, оптимизируем сделки и
                защищаем ваши интересы. Надёжность, прозрачность и выгодные
                условия — три принципа, на которых строится наша работа.
              </p>
            </Slide>
          </div>
        </div>
        <div className={styles.cards_pc_layout}>
          <Slide direction="right" delay={250} className="mt-8" triggerOnce>
            <span className={styles.container__sub_heading}>
              Наша схема{" "}
              <span className={styles.container__sub_heading__span}>
                работы
              </span>{" "}
              очень проста:
            </span>
          </Slide>
          <div className={styles.cards_pc}>
            <Slide direction="left" delay={300} triggerOnce>
              <AboutCards
                Icon={FileCheck}
                heading="Подача Заявки"
                text="Вы связываетесь с брокером, оговариваете товар, объёмы, сроки и цену. Мы публикуем заявку на бирже и запускаем процесс."
              />
            </Slide>
            <Slide direction="up" delay={350} triggerOnce>
              <AboutCards
                Icon={DollarSign}
                heading="Внесение Обеспечения"
                text="Поставщики проходят отбор, вносят обеспечение, и стартуют торги. Мы заключаем сделку по лучшей цене."
              />
            </Slide>
            <Slide direction="right" delay={400} triggerOnce>
              <AboutCards
                Icon={Truck}
                heading="Исполнение Поставки"
                text="Поставщик отгружает товар в срок, по договорённым условиям. Мы контролируем выполнение до конца сделки."
              />
            </Slide>
          </div>
        </div>
      </section>
    </>
  );
};
