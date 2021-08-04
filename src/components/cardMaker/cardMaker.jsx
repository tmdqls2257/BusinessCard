import React from 'react';
import styles from './cardMaker.module.css';

const CardMaker = (props) => {
  return(
    <section className={styles.cardMaker}>
      <h1 className={styles.header}>Card Maker</h1>
    </section>
  );
};

export default CardMaker;