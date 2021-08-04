import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';

const Main = ({authService}) => {
  const history = useHistory();
  const onlogout = () => {
    authService.logout();
  };
  
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if(!user){
        history.push('/login');
      }
    })
  });
  return (
    <div className={styles.main}>
      <Header onlogout={onlogout}/>
      <div className={styles.box}>
      <section className={styles.cardMaker}>
        <h1 className={styles.header}>Card Maker</h1>
      </section>
      <section className={styles.cardPreview}>
        <h1 className={styles.header}>Card Preview</h1>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Main;