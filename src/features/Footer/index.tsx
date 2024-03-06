import React from 'react'
import {
    faPhone,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalWhite } from '../../shared/ui/Button'
import { useDispatch } from "react-redux";
import { openModal } from '../../redux/modalSlice';
import { Link } from 'react-scroll';
import { ModalButton } from '../../shared/ui/Button';

import logo from '../../assets/white-logo.svg'

import styles from './styles.module.scss'

export const Footer = () => {
    const dispatch = useDispatch();

    function openModalWindow() {
        dispatch(openModal());
    }
    return (
        <>
            <footer className={styles.footer} id="contacts">
                <Link to="main" smooth>
                    <img src={logo} className={styles.footer__logo} alt="logo" />
                </Link>
                <nav className={styles.footer__nav}>
                    <Link to="main" smooth className={styles.footer__nav__link}>
                        Главная
                    </Link>
                    <Link to="about" smooth className={styles.footer__nav__link}>
                        О Компании
                    </Link>
                    <Link to="services" smooth className={styles.footer__nav__link}>
                        Услуги
                    </Link>
                    <Link to="contacts" smooth className={styles.footer__nav__link}>
                        Контакты
                    </Link>
                </nav>
                <ModalWhite
                    text="Связаться с нами"
                    onClick={() => openModalWindow()}
                />
                <div className={styles.footer__line} >
                    <br />
                </div>
                <div className={styles.footer__contacts}>
                    <FontAwesomeIcon icon={faPhone} className={styles.footer__icon} color='white' />
                    <a
                        href="tel:+77717902929"
                        className={styles.footer__link}
                    >
                        +7 (771) 790 29 29
                    </a>
                </div>
                <div className={styles.footer__contacts}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.footer__icon} color='white' />
                    <a
                        href="mailto:info@kenetai-agro.kz"
                        className={styles.footer__link}
                    >
                        info@kenetai-agro.kz
                    </a>
                </div>
                <span className={styles.footer__adress}>
                    Алматы, Г. Медеуский Район, Микрорайон Думан-2, Дом 9, КВ. 26
                </span>
            </footer>
            <footer className={styles.footer_pc} id='footer-pc'>
                <div className={styles.footer_pc__container}>
                    <Link to="header-pc" smooth>
                        <img src={logo} className={styles.footer_pc__logo} alt="logo" />
                    </Link>
                    <nav className={styles.footer_pc__nav}>
                        <Link to="header-pc" smooth className={styles.footer_pc__nav__link}>
                            Главная
                        </Link>
                        <Link to="about-pc" smooth className={styles.footer_pc__nav__link}>
                            О Компании
                        </Link>
                        <Link to="services-pc" smooth className={styles.footer_pc__nav__link}>
                            Услуги
                        </Link>
                        <Link to="footer-pc" smooth className={styles.footer_pc__nav__link}>
                            Контакты
                        </Link>
                    </nav>
                    <ModalWhite
                        text="Связаться с нами"
                    // onClick={() => openModalWindow()}
                    />
                </div>
                <div className={styles.footer_pc__line} >
                    <br />
                </div>
                <div className={styles.footer_pc__contacts}>
                    <div className={styles.footer_pc__contacts__container}>
                        <div className={styles.footer_pc__contacts__container__items}>
                            <FontAwesomeIcon icon={faPhone} className={styles.footer_pc__icon} color='white' />
                            <a
                                href="tel:+77717902929"
                                className={styles.footer_pc__link}
                            >
                                +7 (771) 790 29 29
                            </a>
                        </div>
                        <div className={styles.footer_pc__contacts__container__items}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.footer_pc__icon} color='white' />
                            <a
                                href="mailto:info@kenetai-agro.kz"
                                className={styles.footer_pc__link}
                            >
                                info@kenetai-agro.kz
                            </a>
                        </div>
                    </div>
                    <span className={styles.footer_pc__adress}>
                        Алматы, Г. Медеуский Район, Микрорайон Думан-2, Дом 9, КВ. 26
                    </span>
                </div>
            </footer>
        </>
    )
}
