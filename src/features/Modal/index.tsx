import React from "react";
import { ModalButton } from "../../shared/ui/Button";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modalSlice";

import styles from './styles.module.scss'

export const Modal = () => {
    const dispatch = useDispatch();

    function closeModal() {
        dispatch(openModal());
    }

    return (
        <>
            <div
                className={styles.modal_container}
                onClick={() => closeModal()}
            ></div>
            <div className={styles.modal_window}>
                <div className={styles.modal_window__items}>
                    <span className={styles.modal_window__heading}>Спасибо за то что выбираете<span className={styles.modal_window__heading__span}> Kenetay-Agro!</span></span>
                    <span className={styles.modal_window__subhead}>Наши контактные данные:</span>
                    <div className={styles.modal_window__mt}>
                        <a href="tel:+77717902929" className={styles.modal_window__text}><span className={styles.modal_window__text__span}>Номер: </span>+7 (771) 790 29 29</a>
                        <p className={styles.modal_window__text}><span className={styles.modal_window__text__span}>Почта: </span>info@kenetai-agro.kz</p>
                        <p className={styles.modal_window__text}><span className={styles.modal_window__text__span}>Адрес: </span>Алматы, Г. Медеуский Район, Микрорайон Думан-2, Дом 9, КВ. 26</p>
                    </div>
                    <ModalButton
                        text="Закрыть"
                        onClick={() => closeModal()}
                    />
                </div>
            </div>
        </>
    );
};