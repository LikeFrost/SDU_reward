import React from 'react';
import styles from './index.module.scss';
import { useHistory } from 'ice';
import Input from '@/components/Input';
import Button from '@/components/Button';
import store from '@/store';

function Login() {
  const history = useHistory();
  const [, dispatchers_dialog] = store.useModel('dialog');
  const { setDialog } = dispatchers_dialog;
  const [, dispatchers_user] = store.useModel('user');
  const login = () => {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    const regId = /^\d{9}$|^\d{12}$/;
    let temp;
    if (!regId.test(id)) {
      temp = {
        showDialog: true,
        title: '格式错误！',
        text: '学号格式错误，请核对后提交',
        state: 'failure',
        showButton: true,
      };
      setDialog(temp);
    } else {
      dispatchers_user.login({ id, password }).then((res) => {
        if (res === 100) {
          temp = {
            showDialog: true,
            title: '登录成功！',
            text: '登陆成功，2s后进入主页',
            state: 'success',
            showButton: false,
          };
          setDialog(temp);
          setTimeout(() => {
            temp = {
              showDialog: false,
            };
            setDialog(temp);
            history.push('home');
          }, 2000);
        } else {
          temp = {
            showDialog: true,
            title: '密码错误！',
            text: '密码错误，请核对后重试',
            state: 'failure',
            showButton: true,
          };
          setDialog(temp);
        }
      });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <div className={styles.box}>
          <img className={styles.svg} src="../../../img/icon-login.svg" />
          <div className={styles.detail}>
            <div className={styles.tab}>学号</div>
            <div className={styles.content}><Input type="text" placeholder="请输入学号" id="id" style={styles.input} /></div>
          </div>
          <div className={styles.detail}>
            <div className={styles.tab}>密码</div>
            <div className={styles.content}><Input type="password" placeholder="请输入密码" id="password" style={styles.input} /></div>
          </div>
          <Button myClassName={styles.button} myClick={login} content="登&nbsp;&nbsp;&nbsp;&nbsp;录" />
        </div>
      </div>
    </div>
  );
}

export default Login;
