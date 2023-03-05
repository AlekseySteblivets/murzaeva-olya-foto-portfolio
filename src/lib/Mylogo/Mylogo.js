import styles from './Mylogo.module.scss';

export default function Mylogo(params) {
  return (
    <div className={styles.logo}>
      <a href="./">
        Mylogo
        {/* <img src={logo1} alt="foto logo" width="140" height="24"></img> */}
      </a>
    </div>
  );
}
