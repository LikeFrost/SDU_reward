import React from 'react';
import styles from './index.module.scss';
import store from '@/store';

function Info() {
  const changeContent = () => {
    setShow(!show);
  };
  const [dataShow, dispatchers] = store.useModel('show');
  const { show } = dataShow;
  const { setShow } = dispatchers;
  return (
    <div className={show ? styles.box : styles.box_half} >
      <div className={show ? styles.circle : styles.circle_half}>
        <img className={show ? styles.pic : styles.pic_half} src="../../../img/pic_info.svg" />
      </div>
      {show && <svg t="1645686879323" className={styles.ball} viewBox="0 0 1024 1024" version="1.1" xmlns="https://www.w3.org/2000/svg" p-id="20198" width="32" height="32"><path d="M512 928c229.76 0 416-186.24 416-416S741.76 96 512 96 96 282.24 96 512s186.24 416 416 416z m0-32C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384z" p-id="20199" /></svg>}
      {show && <svg t="1645686879323" className={styles.ball2} viewBox="0 0 1024 1024" version="1.1" xmlns="https://www.w3.org/2000/svg" p-id="20198" width="32" height="32"><path d="M512 928c229.76 0 416-186.24 416-416S741.76 96 512 96 96 282.24 96 512s186.24 416 416 416z m0-32C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384z" p-id="20199" /></svg>}
      <div className={show ? styles.button : styles.button_half} onClick={changeContent}>
        {show && '个人信息'}
        {!show && '确认修改'}
      </div>
      {!show && <div className={styles.msg}>123</div>}
    </div>
  );
}

export default Info;
