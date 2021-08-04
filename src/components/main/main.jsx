import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import Preview from '../preview/preview';
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
      <CardMaker />
      <Preview />
      </div>
      <Footer />
    </div>
  );
};

export default Main;