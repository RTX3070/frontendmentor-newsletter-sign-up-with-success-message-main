import styles from './ListItem.module.css';
import iconList from '../../assets/images/icon-list.svg';

export default function ListItem({ text }) {
    return (
        <li className={styles.ListItem}>
            <img src={iconList} alt='' /><p>{text}</p>
        </li>
    );
};