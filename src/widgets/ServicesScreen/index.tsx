import React from "react";
import { Separator } from "../../entities/Separator/index";
import { Slide } from "react-awesome-reveal";

import styles from "./styles.module.scss";
import { ServicesCard } from "../../entities/ServicesCard";

export const ServicesScreen = () => {
  const firstCard = [
    { service: "Представление и защита ваших интересов на бирже" },
    { service: "Полный цикл заключения сделок от подачи до контракта" },
    { service: "Участие иностранных компаний без барьеров" },
    { service: "Юридическая поддержка на всех этапах" },
    {
      service: "Консультации по нормативным и правовым вопросам",
    },
  ];

  const secondCardData = [
    { service: "Подбор надёжных поставщиков под ваш товар" },
    { service: "Полная прозрачность всех этапов закупки" },
    { service: "Экономия бюджета и времени на закупках" },
    { service: "Участие в торгах по наилучшей цене" },
    { service: "Аналитика рынка и помощь в выборе стратегии" },
  ];

  const thirdCardData = [
    {
      service: "Оповещения о подходящих тендерах",
    },
    { service: "Упрощённый доступ к торгам" },
    { service: "Честная конкуренция оппонентов" },

    { service: "Прозрачные условия участия" },

    { service: "Честная конкуренция" },

    { service: "Рост репутации и объёма продаж" },
  ];
  return (
    <>
      <section className={styles.services} id="services">
        <Slide direction="left" delay={100} triggerOnce>
          <Separator text="Услуги" />
        </Slide>
        <Slide direction="right" delay={150} triggerOnce>
          <h3 className={styles.services__heading}>Наши Услуги</h3>
        </Slide>
        <Slide direction="left" delay={200} triggerOnce>
          <p className={styles.services__paragraph}>
            У нас не просто услуги — у нас решения. Хотите по-новому взглянуть
            на товарную биржу? С Kenetay-Agro вы увидите больше.
          </p>
        </Slide>
        <Slide direction="right" delay={250} triggerOnce>
          <ServicesCard heading={"Для Клиентов"} services={firstCard} />
        </Slide>
        <Slide direction="left" delay={300} triggerOnce>
          <ServicesCard heading={"Для Заказчиков"} services={secondCardData} />
        </Slide>
        <Slide direction="right" delay={350} triggerOnce>
          <ServicesCard heading={"Для поставщиков"} services={thirdCardData} />
        </Slide>
      </section>
      <section className={styles.services_pc} id="services-pc">
        <Slide>
          <Separator text="Услуги" />
        </Slide>
        <Slide direction="right" delay={150} triggerOnce>
          <h3 className={styles.services_pc__heading}>Наши Услуги</h3>
        </Slide>
        <Slide direction="left" delay={200} triggerOnce>
          <p className={styles.services_pc__paragraph}>
            У нас не просто услуги — у нас решения. Хотите по-новому взглянуть
            на товарную биржу? С Kenetay-Agro вы увидите больше.
          </p>
        </Slide>
        <div className={styles.services_pc__cards}>
          <Slide direction="right" delay={250} triggerOnce>
            <ServicesCard heading={"Для Клиентов"} services={firstCard} />
          </Slide>
          <Slide direction="down" delay={300} triggerOnce>
            <ServicesCard
              heading={"Для Заказчиков"}
              services={secondCardData}
            />
          </Slide>
          <Slide direction="left" delay={350} triggerOnce>
            <ServicesCard
              heading={"Для поставщиков"}
              services={thirdCardData}
            />
          </Slide>
        </div>
      </section>
    </>
  );
};
