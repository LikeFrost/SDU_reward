import React from 'react';
import styles from './index.module.scss';

function Button({ content, myClassName, myClick }) {
  return (
    <div className={`${styles.button} ${myClassName}`} onClick={myClick}>{content}</div>
  );
}

export default Button;
