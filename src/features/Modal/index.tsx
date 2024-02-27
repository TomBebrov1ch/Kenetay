import React from "react";
import { ModalButton } from "../../shared/ui/Button";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modalSlice";

import styles from './styles.module.scss'

export const ModalWindow = () => {
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
                <span className={styles.modal_window__heading}>Свяжитесь с нами</span>
                <span className={styles.modal_window__paragraph}>
                    Отправьте заявку и в скором времени мы свяжемся с вами
                </span>
                <input
                    type="phone"
                    className={styles.modal_window__input}
                    placeholder="Ваш номер телефона"
                />
                <ModalButton
                    text="Отправить"
                    marginTop="mt-6"
                    onClick={() => console.log("Отправлено")}
                />
            </div>
        </>
    );
};