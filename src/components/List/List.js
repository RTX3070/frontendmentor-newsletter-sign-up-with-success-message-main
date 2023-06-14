import { v4 as uuid } from 'uuid';

import styles from './List.module.css';
import ListItem from '../ListItem/ListItem';

export default function List() {
    return (
        <ul className={styles.List}>
            <ListItem key={uuid()} text='Product discovery and building what matters' />
            <ListItem key={uuid()} text='Measuring to ensure updates are a success' />
            <ListItem key={uuid()} text='And much more!' />
        </ul>
    );
};