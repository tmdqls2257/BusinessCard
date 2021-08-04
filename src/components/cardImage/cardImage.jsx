import React from 'react';
import styles from './cardImage.module.css';

const CardImage = ({card}) => {
  return(
    <form action="" className={styles.profile}>
        <img src="./images/default_logo.png" alt="" />
        <section>
          <h1>{card.name}</h1>
          <p>workplace</p>
        </section>
      </form>
      
  );
};

export default CardImage;