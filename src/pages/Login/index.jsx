import React from 'react';
import styles from './index.module.scss';
import { useHistory } from 'ice';
import Input from '@/components/Input';
import Button from '@/components/Button';
import store from '@/store';

function Login() {
  const history = useHistory();
  const [dataDialog, dispatchers_dialog] = store.useModel('dialog');
  const { dialogConfig } = dataDialog;
  const { setDialog } = dispatchers_dialog;
  const login = () => {
    const SDU_number = document.getElementById('SDU_number').value;
    const password = document.getElementById('password').value;
    const reg = /^[0-9]+.?[0-9]*$/;
    let temp;
    if (SDU_number === '' || !password) {
      temp = {
        showDialog: true,
        title: '登录失败！',
        text: '学号或密码不能为空，请核对后提交',
        state: 'failure',
        showButton: true,
      };
    } else if (!reg.test(SDU_number) || (SDU_number.length !== 12 && SDU_number.length !== 9)) {
      temp = {
        showDialog: true,
        title: '格式错误！',
        text: '学号格式错误，请核对后提交',
        state: 'failure',
        showButton: true,
      };
    } else if (password.length < 6) {
      temp = {
        showDialog: true,
        title: '格式错误！',
        text: '密码不得小于6位，请核对后提交',
        state: 'failure',
        showButton: true,
      };
    } else if (password.length > 20) {
      temp = {
        showDialog: true,
        title: '格式错误！',
        text: '密码不得大于20位，请核对后提交',
        state: 'failure',
        showButton: true,
      };
    } else {
      // denglu
      temp = {
        showDialog: true,
        title: '登录成功！',
        text: '登陆成功，2s后进入主页',
        state: 'success',
        showButton: false,
      };
      setTimeout(() => {
        temp = {
          showDialog: false,
        };
        setDialog(temp);
        history.push('home');
      }, 2000);
    }
    setDialog(temp);
  };
  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <div className={styles.box}>
          <img className={styles.svg} src="../../../img/icon-login.svg" />
          <div className={styles.detail}>
            <div className={styles.tab}>学号</div>
            <div className={styles.content}><Input type="text" placeholder="请输入学号" id="SDU_number" style={styles.input} /></div>
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
