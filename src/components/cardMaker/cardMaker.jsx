import React from 'react';
import Card from '../card/card';
import styles from './cardMaker.module.css';

const CardMaker = ({cards}) => {

  return(
    <section className={styles.cardMaker}>
      <h1 className={styles.title}>Card Maker</h1>
      {
        cards.map(card => 
      <Card  card={card}/>
      )
      }
      </section>
  )}
export default CardMaker;