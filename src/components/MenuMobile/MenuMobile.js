import styles from './MenuMobile.module.scss';

export default function MenuMobile({ isOpenMenuMobile }) {
  return (
    <div className={styles.menuMobile}>
      <button type="button" className={styles.button} onClick={() => isOpenMenuMobile()}>
        <svg width="18" height="18">
          <path className={styles.closeMenuBurger} d="M9 9.5l8-8-8 8-8-8 8 8zm0 0l8 8-8-8-8 8 8-8z"></path>
        </svg>
      </button>

      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="#Portfolio">
            Portfolio
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#About Me">
            About Me
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#Contacts">
            Contacts
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#Price">
            Price
          </a>
        </li>
      </ul>
    </div>
  );
}
