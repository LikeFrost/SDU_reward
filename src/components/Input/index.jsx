import React from 'react';
import styles from './index.module.scss';

function Input({ type, placeholder, id }) {
  return (
    <div>
      <input type={type} className={styles.input} placeholder={placeholder} id={id} />
    </div>
  );
}

export default Input;
