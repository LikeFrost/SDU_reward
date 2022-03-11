import React from 'react';
import styles from './index.module.scss';

function MultiInput({ placeholder, id, style }) {
  return (
    <div>
      <textarea className={`${styles.input} ${style}`} placeholder={placeholder} id={id} />
    </div>
  );
}

export default MultiInput;
