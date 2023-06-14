import styles from './Button.module.css';

export default function Button({ text, onReset }) {
    return <button className={styles.SubmitBtn} onClick={onReset}>{text}</button>;
};