import React, { useEffect, useState } from 'react';
import { useHistory } from 'ice';
import styles from './index.module.scss';
import store from '@/store';
import Button from '@/components/Button';
import Input from '@/components/Input';
import crypto from 'crypto-js';
import { ResponsiveGrid } from '@alifd/next';

function Info() {
  const history = useHistory();
  useEffect(() => {
    dispatchers_user.getUser().then((res) => {
      if (res === 102) {
        let temp = {
          showDialog: true,
          title: '登录过期!',
          text: '登录过期,请重新登录!',
          state: 'failure',
          showButton: false,
        };
        setDialog(temp);
        setTimeout(() => {
          history.push('/');
          temp = {
            showDialog: false,
          };
          setDialog(temp);
        }, 1000);
      }
    });
  }, []);
  const [, dispatchers_show] = store.useModel('show');
  const { setShow } = dispatchers_show;
  const [, dispatchers_now] = store.useModel('now');
  const { setNow } = dispatchers_now;
  const [dataMenu, dispatchers_menu] = store.useModel('menu');
  const { menuConfig } = dataMenu;
  const { setMenu } = dispatchers_menu;
  const [, dispatchers_dialog] = store.useModel('dialog');
  const { setDialog } = dispatchers_dialog;
  const [dataUser, dispatchers_user] = store.useModel('user');
  const { user } = dataUser;
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
    const regName = /^[\u4e00-\u9fa5]{2,10}$/;
    let temp;
    if (name && !regName.test(name)) {
      temp = {
        showDialog: true,
        title: '修改失败!',
        text: '请输入正确的姓名',
        state: 'failure',
        showButton: true,
      };
      setDialog(temp);
    } else if (telephone && !regTelephone.test(telephone)) {
      temp = {
        showDialog: true,
        title: '修改失败!',
        text: '请输入正确的手机号',
        state: 'failure',
        showButton: true,
      };
      setDialog(temp);
    } else if (new_password && !regPassword.test(new_password)) {
      temp = {
        showDialog: true,
        title: '修改失败!',
        text: '密码须为6-20位,仅可包含数字、大小写字母以及.!@$%^&*?',
        state: 'failure',
        showButton: true,
      };
      setDialog(temp);
    } else if (new_password !== repeat_password) {
      temp = {
        showDialog: true,
        title: '修改失败!',
        text: '两次密码不相同,请核对后提交',
        state: 'failure',
        showButton: true,
      };
      setDialog(temp);
    } else {
      const password = new_password ? crypto.MD5(user.Id + crypto.MD5(new_password).toString()).toString() : new_password; // md5 加盐
      dispatchers_user.updateUser({ password, name, telephone }).then((res) => {
        if (res.code === 100) {
          temp = {
            showDialog: true,
            title: '修改成功!',
            text: '修改成功,2s后返回主页',
            state: 'success',
            showButton: false,
          };
          setDialog(temp);
          setTimeout(() => {
            changeCurrent(0);
            temp = {
              showDialog: false,
            };
            setDialog(temp);
          }, 2000);
        } else {
          temp = {
            showDialog: true,
            title: '修改失败!',
            text: res.msg,
            state: 'failure',
            showButton: true,
          };
          setDialog(temp);
        }
      });
    }
  };
  const { Cell } = ResponsiveGrid;
  return (
    <ResponsiveGrid className={styles.box}>
      <Cell colSpan={5} className={styles.circle}>
        <img className={styles.pic} src="../../../img/pic_info.svg" />
      </Cell>
      <Cell colSpan={5} className={styles.msg}>
        <div className={styles.title}>个人信息</div>
        <div className={styles.detail_table}>
          <div className={styles.detail}>
            <div className={styles.tab}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姓名</div>
            <div className={styles.content}>{showInput ? <Input type="text" placeholder="请完善姓名信息" id="name" /> : user.Username || '请完善姓名信息'}</div>
          </div>
          <div className={styles.detail}>
            <div className={styles.tab}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学号</div>
            <div className={styles.content}>{user.Id}</div>
          </div>
          <div className={styles.detail}>
            <div className={styles.tab}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年级</div>
            <div className={styles.content}>{user.Id ? user.Id.slice(0, 4) : ''}</div>
          </div>
          <div className={styles.detail}>
            <div className={styles.tab}>&nbsp;&nbsp;&nbsp;&nbsp;手机号</div>
            <div className={styles.content}>{showInput ? <Input type="text" placeholder="请完善联系方式" id="telephone" /> : user.Telephone || '请完善联系方式'}</div>
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
      </Cell>
    </ResponsiveGrid>
  );
}

export default Info;
