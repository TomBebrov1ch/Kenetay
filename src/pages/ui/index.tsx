import React from 'react';
import { Header } from '../../features/Header/index';
import { HomeScreen } from '../../widgets/MainScreen';
import { useSelector } from "react-redux";
import { Menu } from '../../features/Menu';
import { AboutScreen } from '../../widgets/AboutScreen';
import { ServicesScreen } from '../../widgets/ServicesScreen';
import { Footer } from '../../features/Footer/index'

export const HomePage = () => {
    const isMenuOpen = useSelector((state: any) => state.menu.isOpen);
    const isModalOpen = useSelector((state: any) => state.modal.isOpen);
    return (
        <>
            <Header />
            {isMenuOpen ? <Menu /> : null}
            <HomeScreen />
            <AboutScreen />
            <ServicesScreen />
            <Footer />
        </>
    );
};
