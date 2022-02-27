import React from 'react';
import Button from '@/components/Button';
import styles from './index.module.scss';
import store from '@/store';

function Home() {
  const [dataShow, dispatchers_show] = store.useModel('show');
  const { show } = dataShow;
  const { setShow } = dispatchers_show;
  const [, dispatchers_now] = store.useModel('now');
  const { setNow } = dispatchers_now;
  const [dataMenu, dispatchers_menu] = store.useModel('menu');
  const { menuConfig } = dataMenu;
  const { setMenu } = dispatchers_menu;
  const changeCurrent = (index) => {
    // eslint-disable-next-line prefer-const
    let temp = JSON.parse(JSON.stringify(menuConfig));
    // eslint-disable-next-line prefer-const
    for (let i in temp) {
      if (i == index) {
        temp[i].sel = true;
        setNow(temp[i].component);
      } else temp[i].sel = false;
    }
    if (index === 0) {
      setShow(true);
    } else setShow(false);
    setMenu(temp);
  };
  return (
    <div className={styles.box}>
      <div className={styles.circle}>
        <img className={styles.pic} src="../../../img/pic_home.svg" />
      </div>
      <Button myClassName={styles.button_info} myClick={() => changeCurrent(1)} content="个人信息" />
      <Button myClassName={styles.button_reward} myClick={() => changeCurrent(2)} content="奖励管理" />
      <Button myClassName={styles.button_suggestion} myClick={() => changeCurrent(3)} content="意见反馈" />
      <svg t="1645686879323" className={styles.ball} viewBox="0 0 1024 1024" version="1.1" xmlns="https://www.w3.org/2000/svg" p-id="20198" width="32" height="32"><path d="M512 928c229.76 0 416-186.24 416-416S741.76 96 512 96 96 282.24 96 512s186.24 416 416 416z m0-32C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384z" p-id="20199" /></svg>
      <svg t="1645686879323" className={styles.ball2} viewBox="0 0 1024 1024" version="1.1" xmlns="https://www.w3.org/2000/svg" p-id="20198" width="32" height="32"><path d="M512 928c229.76 0 416-186.24 416-416S741.76 96 512 96 96 282.24 96 512s186.24 416 416 416z m0-32C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384z" p-id="20199" /></svg>
    </div>
  );
}

export default Home;
