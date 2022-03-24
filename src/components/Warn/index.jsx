import React from 'react';
import styles from './index.module.scss';
import store from '@/store';
import Button from '../Button';

function Warn() {
  const [dataWarn, dispatchers_warn] = store.useModel('warn');
  const { warnConfig } = dataWarn;
  const { setWarn } = dispatchers_warn;
  const changeShow = () => {
    // eslint-disable-next-line prefer-const
    let temp = JSON.parse(JSON.stringify(warnConfig));
    temp.showWarn = false;
    setWarn(temp);
  };
  return (
    <>
      {
      warnConfig.showWarn &&
      <div className={styles.background}>
        <div className={styles.card}>
          <div className={styles.title}>{warnConfig.title}</div>
          <div className={styles.button} onClick={changeShow}>
            <svg t="1645961135072" className={styles.close} viewBox="0 0 1024 1024" version="1.1" xmlns="https://www.w3.org/2000/svg" p-id="16201" width="32" height="32"><path d="M677.2 702c-6.4 0-12.5-2.5-17-7L329.1 363.8c-4.6-4.5-7.2-10.5-7.2-17s2.6-12.5 7.2-17l0.8-0.8c4.5-4.5 10.5-7 17-7 6.4 0 12.5 2.5 17 7L695 660.2c9.4 9.4 9.4 24.6 0 34l-0.8 0.8c-4.5 4.5-10.6 7-17 7z" fill="#FF6A27" p-id="16202" /><path d="M363.9 695c-4.5 4.5-10.6 7-17 7s-12.5-2.5-17-7l-0.8-0.8c-9.4-9.4-9.4-24.6 0-34l331.1-331.1c4.5-4.5 10.6-7 17-7s12.5 2.5 17 7l0.8 0.8c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17L363.9 695z" fill="#FF6A27" p-id="16203" /></svg>
          </div>
          <Button myClassName={styles.yes} content="确认删除" myClick={warnConfig.submit} />
        </div>
      </div>
    }
    </>
  );
}

export default Warn;
