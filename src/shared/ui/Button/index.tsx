import React from "react";
import { Link } from "react-scroll";

import styles from './styles.module.scss'

interface ButtonProps {
    text: string;
    to?: string | any;
    marginTop?: string;
    onClick?: () => void;
}

export const DefaultButton: React.FC<ButtonProps> = ({ text, to }) => {
    return (
        <Link
            className={styles.def_btn}
            to="services"
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