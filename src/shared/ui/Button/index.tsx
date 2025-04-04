import React from "react";
import { Link } from "react-scroll";

import styles from './styles.module.scss'

interface ButtonProps {
    text: string;
    scrollTo: string;
    marginTop?: string;
    onClick?: () => void;
}

export const DefaultButton: React.FC<ButtonProps> = ({ text, scrollTo }) => {
    return (
        <Link
            className={styles.def_btn}
            to={scrollTo}
            smooth
        >
            {text}
        </Link>
    )
}

export const ModalButton: React.FC<ButtonProps> = ({
    text,
    marginTop,
    onClick,
}) => {
    return (
        <button className={`${styles.button} ${marginTop}`} onClick={onClick}>
            {text}
        </button>
    );
};

export const ModalWhite: React.FC<ButtonProps> = ({
    text,
    marginTop,
    onClick,
}) => {
    return (
        <button className={`${styles.button_white} ${marginTop}`} onClick={onClick}>
            {text}
        </button>
    );
};