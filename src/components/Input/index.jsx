import React from 'react';
import styles from './index.module.scss';

function Input({ type, placeholder, id, style }) {
  return (
    <div>
      <input type={type} className={`${styles.input} ${style}`} placeholder={placeholder} id={id} />
    </div>
  );
}

export default Input;
