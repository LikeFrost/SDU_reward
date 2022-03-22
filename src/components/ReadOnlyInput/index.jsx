import React from 'react';
import styles from './index.module.scss';

function ReadOnlyInput({ type, placeholder, id, style, min, max, value }) {
  return (
    <div>
      <input type={type} className={`${styles.input} ${style}`} placeholder={placeholder} id={id} min={min} max={max} value={value} readOnly />
    </div>
  );
}

export default ReadOnlyInput;
