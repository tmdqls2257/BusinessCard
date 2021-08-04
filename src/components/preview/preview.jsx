import React from 'react';
import CardImage from '../cardImage/cardImage';
import styles from './preview.module.css';

const Preview = ({cards}) => {
  return(
    <section className={styles.cardPreview}>
      <h1 className={styles.header}>Card Preview</h1>
      {
        cards.map(card => 
          <CardImage card={card} />
        )
      }
    </section>
  );
};

export default Preview;