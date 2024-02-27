import React from 'react'
import Hamburger from "hamburger-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/menuSlice";

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
        </>
    );
}
