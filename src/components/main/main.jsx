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
      theme: 'dark',
      title: 'Frontend engineer',
      email: 'tmdqls2257@gamil.com',
      message: 'hi',
      company: 'samsung',
      fileName: 'universe',
      fileURL:'',
    },{
      id: 'tmdqls2',
      name: 'seung bin',
      theme: 'light',
      title: 'Frontend engineer',
      email: 'tmdqls2257@gamil.com',
      message: 'hi',
      company: 'apple',
      fileName: 'universe',
      fileURL:'',
    },{
      id: 'tmdqls3',
      name: 'seung bin',
      theme: 'colorful',
      title: 'Frontend engineer',
      email: 'tmdqls2257@gamil.com',
      message: 'hi',
      company: 'google',
      fileName: 'universe',
      fileURL:'',
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