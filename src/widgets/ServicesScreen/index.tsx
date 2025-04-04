import React from "react";
import { Separator } from "../../entities/Separator/index";
import { Slide } from "react-awesome-reveal";


import styles from "./styles.module.scss";
import { ServicesCard } from "../../entities/ServicesCard";

export const ServicesScreen = () => {
    const firstCard = [{ service: "Представление ваших интересов на рынке" },
    { service: "Заключение сделок на товарных биржах" },
    { service: "Возможность участия иностранных компаний" },
    { service: "Полное юридическое сопровождение сделки" },
    {
        service:
            "Консультации по вопросам законодательства.",
    },]

    const secondCardData = [
        { service: "Поиск потенциальных поставщиков ваших товаров" },
        { service: "Прозрачность процесса закупок и экономия закупочных средств" },
    ];

    const thirdCardData = [
        {
            service:
                "Своевременное оповещение о публикации интересующих товаров в проводимых, и идущих сделках",
        },
        { service: "Честная конкуренция оппонентов" },
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
                <Slide
                    direction="left"
                    delay={200}
                    triggerOnce
                >
                    <p className={styles.services__paragraph}>
                        Компания «CITY BROKER», предоставляет широкий спектр услуг в
                        брокерской деятельности.
                    </p>
                </Slide>
                <Slide direction="right" delay={250} triggerOnce>
                    <ServicesCard heading={'Для Клиентов'} services={firstCard} />
                </Slide>
                <Slide direction="left" delay={300} triggerOnce>
                    <ServicesCard heading={'Для Заказчиков'} services={secondCardData} />
                </Slide>
                <Slide direction="right" delay={350} triggerOnce>
                    <ServicesCard heading={'Для поставщиков'} services={thirdCardData} />
                </Slide>
            </section>
            <section className={styles.services_pc} id='services-pc'>
                <Slide>
                    <Separator text="Услуги" />
                </Slide>
                <Slide direction="right" delay={150} triggerOnce>
                    <h3 className={styles.services_pc__heading}>Наши Услуги</h3>
                </Slide>
                <Slide
                    direction="left"
                    delay={200}
                    triggerOnce
                >
                    <p className={styles.services_pc__paragraph}>
                        Дайте Kenetay-Agro шанс изменить ваш взгляд на товарную биржу! У нас нет просто услуг, у нас - возможности. Готовы переосмыслить свой опыт на товарных биржах? Добро пожаловать в круг профессиональных решений от Kenetay-Agro
                    </p>
                </Slide>
                <div className={styles.services_pc__cards}>
                    <Slide direction="right" delay={250} triggerOnce>
                        <ServicesCard heading={'Для Клиентов'} services={firstCard} />
                    </Slide>
                    <Slide direction="down" delay={300} triggerOnce>
                        <ServicesCard heading={'Для Заказчиков'} services={secondCardData} />
                    </Slide>
                    <Slide direction="left" delay={350} triggerOnce>
                        <ServicesCard heading={'Для поставщиков'} services={thirdCardData} />
                    </Slide>
                </div>
            </section>
        </>
    );
};
