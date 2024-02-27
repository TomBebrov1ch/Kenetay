import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { toggleMenu } from "../../redux/menuSlice";
import { openModal } from '../../redux/modalSlice'
import { Slide, Fade } from "react-awesome-reveal";


import styles from "./styles.module.scss";
import { ModalButton } from "../../shared/ui/Button";

export const Menu = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector((state: any) => state.menu.isOpen);

    function closeMenuOpenModal() {
        dispatch(toggleMenu());
        dispatch(openModal());
    }

    function closeMenu() {
        dispatch(toggleMenu());
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    });

    return (
        <Slide direction="right" className={styles.menu}>
            <nav className={styles.menu__nav}>
                <Fade direction="right">
                    <Link
                        to="main"
                        smooth
                        onClick={() => closeMenu()}
                        className={styles.menu__nav__links}
                    >
                        Главная
                    </Link>
                </Fade>
                <Link
                    to="about"
                    smooth
                    onClick={() => closeMenu()}
                    className={styles.menu__nav__links}
                >
                    О Компании
                </Link>
                <Link
                    to="services"
                    smooth
                    onClick={() => closeMenu()}
                    className={styles.menu__nav__links}
                >
                    Услуги
                </Link>
                <Link
                    to="contacts"
                    smooth
                    onClick={() => closeMenu()}
                    className={styles.menu__nav__links}
                >
                    Контакты
                </Link>
                <ModalButton text="Связаться с нами" onClick={closeMenuOpenModal} />
            </nav>
        </Slide>
    );
};
