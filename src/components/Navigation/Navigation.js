// import Button from '../../lib/Button/Button';
// import logo from "../../assets/img/logo-png.png";
import React, { useState } from 'react';
import ButMenuMobile from '../../lib/ButMenuMobile';
import Mylogo from '../../lib/Mylogo/Mylogo';
import MenuMobile from '../MenuMobile/MenuMobile';
import MenuNavigation from '../MenuNavigation/MenuNavigation';

import styles from './Navigation.module.scss';

export default function Navigation() {
  const [isMenuMobile, setIsMenuMobile] = useState(false);

  const isOpenMenuMobile = () => {
    setIsMenuMobile(!isMenuMobile);
  };
  return (
    <>
      <nav className={styles.navigation}>
        <MenuNavigation nameNav1="Portfolio" nameNav2="About Me" />
        <Mylogo />
        <ButMenuMobile isOpenMenuMobile={isOpenMenuMobile} />
        <MenuNavigation nameNav1="Contacts" nameNav2="Price" />
        {isMenuMobile && <MenuMobile isOpenMenuMobile={isOpenMenuMobile} />}
      </nav>
    </>
  );
}
