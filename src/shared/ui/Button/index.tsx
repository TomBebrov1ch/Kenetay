import React from "react";
import { Link as ScrollLink } from "react-router-dom";

import styles from './styles.module.scss'

interface ButtonProps {
    text: string;
    to?: string | any;
    marginTop?: string;
    onClick?: () => void;
}

export const DefaultButton: React.FC<ButtonProps> = ({ text, to }) => {
    return (
        <ScrollLink
            className={styles.def_btn}
            to={to}
            smooth={true}
        >
            {text}
        </ScrollLink>
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