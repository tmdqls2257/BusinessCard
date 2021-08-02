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
      <section className={styles.section}>Hello World</section>
      <Footer />
    </div>
  );
};

export default Main;