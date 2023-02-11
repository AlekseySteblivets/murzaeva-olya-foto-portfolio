// import Button from '../../lib/Button/Button';
// import logo from "../../assets/img/logo-png.png";
import ButMenuMobile from '../../lib/ButMenuMobile';
import Mylogo from '../../lib/Mylogo/Mylogo';
import MenuNavigation from '../MenuNavigation/MenuNavigation';

import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <>
      <nav className={styles.navigation}>
        <MenuNavigation nameNav1="Portfolio" nameNav2="About Me"/>
        <Mylogo />
        <ButMenuMobile />
        <MenuNavigation nameNav1="Contacts" nameNav2="Price"/>
      </nav>
    </>
  );
}
