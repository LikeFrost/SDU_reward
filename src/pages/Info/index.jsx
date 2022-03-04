import React, { useState } from 'react';
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
  const [dataDialog, dispatchers_dialog] = store.useModel('dialog');
  const { dialogConfig } = dataDialog;
  const { setDialog } = dispatchers_dialog;
  const [dataUser, dispatchers_user] = store.useModel('user');
  const [showInput, setShowInput] = useState(false);
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
  const changeInfo = () => {
    const new_password = document.getElementById('new_password').value;
    const repeat_password = document.getElementById('repeat_password').value;
    const name = document.getElementById('name').value;
    const telephone = document.getElementById('telephone').value;
    // eslint-disable-next-line @iceworks/best-practices/no-secret-info
    const regPassword = /^[a-zA-z0-9.!@$%^&*?]{6,20}$/;
    const regTelephone = /^1\d{10}$/;
    const regName = /^[\u4e00-\u9fa5]{2,5}$/;
    let temp;
    if (name && !regName.test(name)) {
      temp = {
        showDialog: true,
        title: '修改失败！',
        text: '请输入正确的姓名',
        state: 'failure',
        showButton: true,
      };
    } else if (telephone && !regTelephone.test(telephone)) {
      temp = {
        showDialog: true,
        title: '修改失败！',
        text: '请输入正确的手机号',
        state: 'failure',
        showButton: true,
      };
    } else if (new_password && !regPassword.test(new_password)) {
      temp = {
        showDialog: true,
        title: '修改失败！',
        text: '密码须为6-20位，仅可包含数字、大小写字母以及.!@$%^&*?',
        state: 'failure',
        showButton: true,
      };
    } else if (new_password != repeat_password) {
      temp = {
        showDialog: true,
        title: '修改失败！',
        text: '两次密码不相同，请核对后提交',
        state: 'failure',
        showButton: true,
      };
    } else {
      temp = {
        showDialog: true,
        title: '修改成功！',
        text: '修改成功，2s后返回主页',
        state: 'success',
        showButton: false,
      };
      setTimeout(() => {
        changeCurrent(0);
        temp = {
          showDialog: false,
        };
        setDialog(temp);
      }, 2000);
    }
    setDialog(temp);
  };
  return (
    <>
      <div className={styles.box}>
        <div className={styles.circle}>
          <img className={styles.pic} src="../../../img/pic_info.svg" />
        </div>
        <div className={styles.msg}>
          <div className={styles.title}>个人信息</div>
          <div className={styles.detail_table}>
            <div className={styles.detail}>
              <div className={styles.tab}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姓名</div>
              <div className={styles.content}>{showInput ? <Input type="text" placeholder={dataUser.name} id="name" /> : dataUser.name}</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.tab}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学号</div>
              <div className={styles.content}>{dataUser.id}</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.tab}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年级</div>
              <div className={styles.content}>{dataUser.id.slice(0, 4)}</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.tab}>&nbsp;&nbsp;&nbsp;&nbsp;手机号</div>
              <div className={styles.content}>{showInput ? <Input type="text" placeholder={dataUser.telephone} id="telephone" /> : dataUser.telephone}</div>
            </div>
            {showInput &&
            <div className={styles.detail}>
              <div className={styles.tab}>&nbsp;&nbsp;&nbsp;&nbsp;新密码</div>
              <div className={styles.content}><Input type="password" placeholder="请输入新密码" id="new_password" /></div>
            </div>}
            {showInput &&
            <div className={styles.detail}>
              <div className={styles.tab}>确认密码</div>
              <div className={styles.content}><Input type="password" placeholder="确认新密码" id="repeat_password" /></div>
            </div>}
          </div>
          <div className={styles.button_array}>
            <Button myClassName={styles.button_half} myClick={() => changeCurrent(0)} content="返回主页" />
            <Button myClassName={styles.button_half} myClick={showInput ? changeInfo : () => setShowInput(true)} content={showInput ? '确认修改' : '修改信息'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
