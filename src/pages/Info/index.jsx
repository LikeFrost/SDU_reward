import React from 'react';
import styles from './index.module.scss';
import store from '@/store';
import Button from '@/components/Button';
import Input from '@/components/Input';

function Info() {
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
  const changePassword = () => {
    const new_password = document.getElementById('new_password');
    console.log(new_password);
    changeCurrent(0);
  };
  return (
    <div className={styles.box}>
      <div className={styles.circle}>
        <img className={styles.pic} src="../../../img/pic_info.svg" />
      </div>
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
            <div className={styles.content}><Input type="password" placeholder="请输入新密码" id="new_password" /></div>
          </div>
          <div className={styles.detail}>
            <div className={styles.tab}>确认密码</div>
            <div className={styles.content}><Input type="password" placeholder="确认新密码" id="repeat_password" /></div>
          </div>
        </div>
        <div className={styles.button_array}>
          <Button myClassName={styles.button_half} myClick={() => changeCurrent(0)} content="返回主页" />
          <Button myClassName={styles.button_half} myClick={changePassword} content="确认修改" />
        </div>
      </div>
    </div>
  );
}

export default Info;
