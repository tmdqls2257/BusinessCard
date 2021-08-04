import React from 'react';
import styles from './preview.module.css';

const Preview = (props) => {
  return(
    <section className={styles.cardPreview}>
      <h1 className={styles.header}>Card Preview</h1>
    </section>
  );
};

export default Preview;