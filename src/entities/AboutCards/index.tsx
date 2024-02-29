import React from 'react'
import { Fade } from 'react-awesome-reveal'

import styles from './styles.module.scss'

interface AboutCardsData {
    img: any;
    heading: string;
    text: string;
}

export const AboutCards: React.FC<AboutCardsData> = ({ heading, img, text }) => {
    return (
        <>
            <Fade>
                <div className={styles.card}>
                    <div className={styles.card__container}>
                        <img src={img} alt="circle" className={styles.card__img} />
                        <span className={styles.card__text}>{heading}</span>
                    </div>
                    <div className={styles.card__line}><br /></div>
                    <p className={styles.card__paragraph}>{text}</p>
                </div>
            </Fade>
        </>
    )
}
