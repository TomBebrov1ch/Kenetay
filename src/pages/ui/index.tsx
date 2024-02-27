import React from 'react';
import { Header } from '../../features/Header/index';
import { HomeScreen } from '../../widgets/MainScreen';
import { useSelector } from "react-redux";
import { Menu } from '../../features/Menu';
import { AboutScreen } from '../../widgets/AboutScreen';

export const HomePage = () => {
    const isMenuOpen = useSelector((state: any) => state.menu.isOpen);
    const isModalOpen = useSelector((state: any) => state.modal.isOpen);
    return (
        <>
            <Header />
            {isMenuOpen ? <Menu /> : null}
            <HomeScreen />
            <AboutScreen />
        </>
    );
};
