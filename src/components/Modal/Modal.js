import { createPortal } from "react-dom";

import styles from './Modal.module.css';
import successIcon from '../../assets/images/icon-success.svg';
import Button from "../Button/Button";

export default function Modal({ email, onReset }) {
    return createPortal(
        <>
            <div className={styles.Modal}>
                <div className={styles.ModalContent}>
                    <img src={successIcon} alt="" />
                    <h1>Thanks for subscribing!</h1>
                    <p>A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription</p>
                    <Button text='Dismiss message' onReset={onReset} />
                </div>
            </div>
        </>,
        document.getElementById('modal')
    );
};