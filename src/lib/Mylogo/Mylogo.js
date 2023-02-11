import styles from './Mylogo.module.scss';

export default function Mylogo(params) {
  return (
    <div className={styles.logo}>
      <a href="/" >
        MyLogo
      </a>
    </div>
  );
}
