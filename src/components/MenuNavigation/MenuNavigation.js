import styles from './MenuNavigation.module.scss';

export default function MenuNavigation({ nameNav1, nameNav2 }) {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a className={styles.link} href={`/#${nameNav1}`}>
          {nameNav1}
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href={`/#${nameNav2}`}>
          {nameNav2}
        </a>
      </li>
      {/* <li className="nav-item">
        <a className={styles.link} href="/">
          Contacts
        </a>
      </li>
      <li className="nav-item">
        <a className={styles.link} href="/">
          Price
        </a>
      </li> */}
    </ul>
  );
}
