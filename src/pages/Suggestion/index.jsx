import React from 'react';
import styles from './index.module.scss';
import Button from '@/components/Button';
import Input from '@/components/Input';

function Suggestion() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="../../../img/pic_suggestion.svg" className={styles.img} />
        <div className={styles.title}>
          <div>意</div>
          <div className={styles.text2}>见</div>
          <div className={styles.text3}>反</div>
          <div className={styles.text4}>馈</div>
        </div>
        <Input style={styles.input} />
        <Button myClassName={styles.button} />
      </div>
    </div>
  );
}

export default Suggestion;
