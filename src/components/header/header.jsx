import React from 'react';
import styles from './header.module.css';

const Header = ({onlogout}) => {
  return(<header className={styles.header}>
    <img className = {styles.logo}src="/images/logo.png" alt="logo" />
    <h1 className={styles.Business}>Business Card Maker</h1>
  </header>
  )
};

export default Header;