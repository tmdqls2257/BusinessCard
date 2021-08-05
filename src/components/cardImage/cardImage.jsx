import React from 'react';
import styles from './cardImage.module.css';

const CardImage = ({card}) => {
  const{name, id, theme, title, email, message, company, fileName, fileURL } = card
  const url = fileURL || './images/default_logo.png';
  return(
    <li className={`${styles.card} ${getStyles(theme)}`}>
        <img className={styles.avatar} src={url} alt="" />
        <section className={styles.info}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.company}>{company}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.email}>{email}</p>
          <p className={styles.message}>{message}</p>
        </section>
    </li>
  );
};

function getStyles(theme){
  switch(theme){
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`)
  }
}

export default CardImage;