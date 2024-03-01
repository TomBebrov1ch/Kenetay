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
                <Fade className={styles.menu__nav__links} direction="right">
                    <Link
                        to="main"
                        smooth
                        onClick={() => closeMenu()}
                    >
                        Главная
                    </Link>
                </Fade>
                <Fade className={styles.menu__nav__links} direction="right" delay={100}>
                <Link
                    to="about"
                    smooth
                    onClick={() => closeMenu()}
                >
                    О Компании
                </Link>
                </Fade>
                <Fade className={styles.menu__nav__links} direction="right" delay={200}>
                <Link
                    to="services"
                    smooth
                    onClick={() => closeMenu()}
                >
                    Услуги
                </Link>
                </Fade>
                <Fade className={styles.menu__nav__links} direction="right" delay={300}>
                <Link
                    to="contacts"
                    smooth
                    onClick={() => closeMenu()}
                >
                    Контакты
                </Link>
                </Fade>
                <Fade direction="right" delay={400}>
                <ModalButton text="Связаться с нами" onClick={closeMenuOpenModal} />
                </Fade>
            </nav>
        </Slide>
    );
};
