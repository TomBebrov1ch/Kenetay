import React from "react";

import styles from "./styles.module.scss";

interface SeparatorProps {
    text: string;
}

export const Separator: React.FC<SeparatorProps> = ({ text }) => {
    return (
        <div className={styles.separator}>
            <span className={styles.separator__text}>{text}</span>
            <hr className={styles.separator__line} />
        </div>
    );
};
