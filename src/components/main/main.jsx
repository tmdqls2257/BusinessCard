import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import Preview from '../preview/preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';

const Main = ({authService}) => {
  const [cards, cardsState] = useState([
    {
      id: 'tmdqls1',
      name: 'seung bin',
      theme: 'light',
      title: 'Frontend engineer',
      email: 'tmdqls2257@gamil.com',
      message: 'hi',
      fileName: 'universe',
      fileURL:'1',
    },{
      id: 'tmdqls2',
      name: 'seung bin',
      theme: 'light',
      title: 'Frontend engineer',
      email: 'tmdqls2257@gamil.com',
      message: 'hi',
      fileName: 'universe',
      fileURL:'1',
    },{
      id: 'tmdqls3',
      name: 'seung bin',
      theme: 'light',
      title: 'Frontend engineer',
      email: 'tmdqls2257@gamil.com',
      message: 'hi',
      fileName: 'universe',
      fileURL:'1',
    },
  ]);
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
      <CardMaker cards={cards}/>
      <Preview cards={cards}/>
      </div>
      <Footer />
    </div>
  );
};

export default Main;