import React from 'react';
import styles from './index.module.scss';
import store from '@/store';
import Button from '@/components/Button';

function Info() {
  const changeContent = () => {
    setShow(!show);
  };
  const [dataShow, dispatchers] = store.useModel('show');
  const { show } = dataShow;
  const { setShow } = dispatchers;
  return (
    <div className={show ? styles.box : styles.box_half}>
      <div className={show ? styles.circle : styles.circle_half}>
        <img className={show ? styles.pic : styles.pic_half} src="../../../img/pic_info.svg" />
      </div>
      {show &&
      <>
        <svg t="1645686879323" className={styles.ball} viewBox="0 0 1024 1024" version="1.1" xmlns="https://www.w3.org/2000/svg" p-id="20198" width="32" height="32"><path d="M512 928c229.76 0 416-186.24 416-416S741.76 96 512 96 96 282.24 96 512s186.24 416 416 416z m0-32C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384z" p-id="20199" /></svg>
        <svg t="1645686879323" className={styles.ball2} viewBox="0 0 1024 1024" version="1.1" xmlns="https://www.w3.org/2000/svg" p-id="20198" width="32" height="32"><path d="M512 928c229.76 0 416-186.24 416-416S741.76 96 512 96 96 282.24 96 512s186.24 416 416 416z m0-32C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384z" p-id="20199" /></svg>
        <Button myClassName={styles.button} myClick={changeContent} content="个人信息" />
      </>}
      {!show &&
      <>
        <div className={styles.msg}>
          <div className={styles.title}>个人信息</div>
          <div className={styles.detail_table}>
            <div className={styles.detail}>
              <div className={styles.tab}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姓名</div>
              <div className={styles.content}>zlh</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.tab}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学号</div>
              <div className={styles.content}>201800000000</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.tab}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年级</div>
              <div className={styles.content}>2018</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.tab}>&nbsp;&nbsp;&nbsp;&nbsp;手机号</div>
              <div className={styles.content}>10000000000</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.tab}>&nbsp;&nbsp;&nbsp;&nbsp;新密码</div>
              <div className={styles.content}>***</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.tab}>确认密码</div>
              <div className={styles.content}>***</div>
            </div>
          </div>
        </div>
        <Button myClassName={styles.button_half} myClick={changeContent} content="确认修改" />
      </>}
    </div>
  );
}

export default Info;
