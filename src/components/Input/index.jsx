import React from 'react';
import styles from './index.module.scss';

function Input({ type, placeholder, id, style, min, max }) {
  return (
    <div>
      <input type={type} className={`${styles.input} ${style}`} placeholder={placeholder} id={id} min={min} max={max} />
    </div>
  );
}

export default Input;
