import React from 'react'
import Hamburger from "hamburger-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/menuSlice";
import { Link } from 'react-scroll';
import { ModalButton } from '../../shared/ui/Button';

import logo from '../../assets/logo.svg'

import styles from './styles.module.scss'

export const Header = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector((state: any) => state.menu.isOpen);

    function openMenu() {
        dispatch(toggleMenu());
    }
    return (
        <>
            <header className={styles.header_mob}>
                <img className={styles.logo} src={logo} alt="logo" />
                <Hamburger
                    color="green"
                    onToggle={() => openMenu()}
                    toggled={isMenuOpen}
                />
            </header>
            <header className={styles.header_pc}>
                <img className={styles.logo} src={logo} alt="logo" />
                <nav className={styles.header_pc__nav}>
                    <Link
                        smooth
                        className={`${styles.header_pc__nav__link}`}
                        to="main-pc"
                    >
                        Главная
                    </Link>
                    <Link
                        smooth
                        className={`${styles.header_pc__nav__link}`}
                        to="about-pc"
                    >
                        О Компании
                    </Link>
                    <Link
                        smooth
                        className={`${styles.header_pc__nav__link}`}
                        to="services"
                    >
                        Услуги
                    </Link>

                    <Link
                        smooth
                        className={`${styles.header_pc__nav__link}`}
                        to="contacts-pc"
                    >
                        Контакты
                    </Link>
                </nav>
                <ModalButton
                    text="Связаться с нами"
                // onClick={() => openModalWindow()}
                />
            </header>
        </>
    );
}
