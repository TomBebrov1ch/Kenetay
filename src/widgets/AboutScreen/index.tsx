import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { AboutCards } from '../../entities/AboutCards'

import money from '../../assets/money.svg'
import illustration from '../../assets/illustration-about.svg'

import styles from './styles.module.scss'
import { Separator } from '../../entities/Separator'

export const AboutScreen = () => {
    return (
        <>
            <section className={styles.about} id="about">
                <Slide direction="left" delay={100} triggerOnce>
                    <Separator text='О нас' />
                </Slide>
                <Slide direction="right" delay={150} triggerOnce>
                    <h2 className={styles.about__heading}>О компании
                    </h2>
                </Slide>
                <Slide direction="left" delay={200} triggerOnce>
                    <p className={styles.about__paragraph}>
                        ТОО "City-Broker" – динамично развивающаяся организация, в области брокерских услуг.
                        Благодаря опыту и квалифицированной команде, ТОО «City-Broker» занимает одно из лидирующих мест среди брокерских компаний на биржевом рынке.
                    </p>
                </Slide>
                <Slide direction="right" className="mt-5" delay={250} triggerOnce>
                    <span className={styles.about__sub}>
                        Наша схема <span className={styles.about__sub__par}>работы</span> очень
                        проста:
                    </span>
                </Slide>
                <Slide direction="left" delay={300} triggerOnce>
                    <AboutCards
                        img={money}
                        heading='Подача Заявки'
                        text='Связаться с нашими специалистами. Обговорить с брокером заявки по закупке товаров на условиях Заказчика (товар, количество, цена, сроки и места поставки и условия оплаты) Затем брокер публикует объявления аукциона по данному товару на сайте биржи.'
                    />
                </Slide>
                <Slide direction="right" delay={350} triggerOnce>
                    <AboutCards
                        img={money}
                        heading='Внесение Обеспечения'
                        text='После того, как Заказчик отобрал Поставщиков, производится внесение гарантийного обеспечения допущенными претендентами. Проведение торгов, заключение сделки между Поставщиком и Заказчиком по лучшей цене товаров.'
                    />
                </Slide>
                <Slide direction="left" delay={400} triggerOnce>
                    <AboutCards
                        img={money}
                        heading='Исполнение Поставки'
                        text='
Поставщик обязуется точно и своевременно выполнить свои обязательства по договору поставки, отгружая товар Заказчику строго в соответствии с оговоренными условиями договора, гарантируя высокое качество и точность в доставке.'
                    />
                </Slide>
            </section>
            <section
                className={styles.container_pc}
                id="about-pc"
            >
                <img src={illustration} alt="illustration" className={styles.illustration_pc} />
                <div className={styles.container}>
                    <Slide direction="left" triggerOnce delay={100}>
                        <span className={styles.container__s}>
                            <p className={styles.container__s__text}>О нас</p>
                            <hr className={styles.container__s__separator} />
                        </span>
                    </Slide>
                    <Slide direction="right" delay={150} triggerOnce>
                        <h2 className={styles.container__heading}>О компании</h2>
                    </Slide>
                    <Slide
                        direction="left"
                        delay={200}
                        triggerOnce
                    >
                        <p className={styles.container__paragraph}>
                            ТОО "City-Broker" – динамично развивающаяся организация, в области брокерских услуг.
                            Благодаря опыту и квалифицированной команде, ТОО «City-Broker» занимает одно из лидирующих мест среди брокерских компаний на биржевом рынке.
                        </p>
                    </Slide>
                    <Slide direction="right" delay={250} className="mt-8" triggerOnce>
                        <span className={styles.container__sub_heading}>
                            Наша схема <span className={styles.container__sub_heading__span}>работы</span> очень
                            проста:
                        </span>
                    </Slide>
                </div>
                <div className={styles.cards_pc}>
                    <Slide direction="left" delay={300} triggerOnce>
                        <AboutCards
                            img={money}
                            heading="Подача Заявки"
                            text="Связаться с нашими специалистами. Обговорить с брокером заявки по закупке товаров на условиях Заказчика (товар, количество, цена, сроки и места поставки и условия оплаты) Затем брокер публикует объявления аукциона по данному товару на сайте биржи."
                        />
                    </Slide>
                    <Slide direction="up" delay={350} triggerOnce>
                        <AboutCards
                            img={money}
                            heading="Внесение Обеспечения"
                            text="После того, как Заказчик отобрал Поставщиков, производится внесение гарантийного обеспечения допущенными претендентами. Проведение торгов, заключение сделки между Поставщиком и Заказчиком по лучшей цене товаров."
                        />
                    </Slide>
                    <Slide direction="right" delay={400} triggerOnce>
                        <AboutCards
                            img={money}
                            heading="Исполнение Поставки"
                            text="Исполнение Поставщиком обязательств по договору поставки, заключенному с Заказчиком. Отгрузка закупленного товара согласно условиям, указанных в договоре между Заказчиком и Поставщиком!"
                        />
                    </Slide>
                </div>
            </section>
        </>
    )
}
