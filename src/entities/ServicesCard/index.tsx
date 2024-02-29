import React from 'react'
import { Slide } from 'react-awesome-reveal'

import styles from './styles.module.scss'

interface ServicesText {
    service: string;
}

interface ServiceCardProps {
    heading: string;
    services: ServicesText[];
}

export const ServicesCard: React.FC<ServiceCardProps> = ({ heading, services }) => {
    return (
        <>
            <Slide>
                <div className={styles.service_card}>
                    <span className={styles.service_card__heading}>{heading}</span>
                    <div className={styles.service_card__line} >
                        <br />
                    </div>
                    <div>{services.map((service, index) => (
                        <p className={styles.service_card__items} key={index}>{service.service}</p>
                    ))}
                    </div>
                </div>
            </Slide>
        </>
    )
}
