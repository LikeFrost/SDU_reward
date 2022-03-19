import React, { useState } from 'react';
import styles from './index.module.scss';
import { useHistory } from 'ice';
import Input from '@/components/Input';
import Button from '@/components/Button';
import store from '@/store';
import crypto from 'crypto-js';

function Login() {
  const history = useHistory();
  const [, dispatchers_dialog] = store.useModel('dialog');
  const { setDialog } = dispatchers_dialog;
  const [, dispatchers_user] = store.useModel('user');
  const [isLogin, setLogin] = useState(true);
  const login = () => {
    const id = document.getElementById('id').value;
    const input_password = document.getElementById('password').value;
    const regId = /^\d{9}$|^\d{12}$/;
    let temp;
    if (!regId.test(id)) {
      temp = {
        showDialog: true,
        title: '学号格式错误!',
        text: '学号格式错误,请核对后提交',
        state: 'failure',
        showButton: true,
      };
      setDialog(temp);
    } else {
      const password = crypto.MD5(id + crypto.MD5(input_password).toString()).toString(); // md5 加盐
      dispatchers_user.login({ id, password }).then((res) => {
        if (res.code === 100) {
          temp = {
            showDialog: true,
            title: res.msg,
            text: '登陆成功,2s后进入主页',
            state: 'success',
            showButton: false,
          };
          setDialog(temp);
          setTimeout(() => {
            temp = {
              showDialog: false,
            };
            setDialog(temp);
            history.push('/home');
          }, 2000);
        } else {
          temp = {
            showDialog: true,
            title: '登录失败!',
            text: res.msg,
            state: 'failure',
            showButton: true,
          };
          setDialog(temp);
        }
      });
    }
  };
  const logUp = () => {
    const id = document.getElementById('id').value;
    const input_password = document.getElementById('password').value;
    const regId = /^\d{9}$|^\d{12}$/;
    // eslint-disable-next-line @iceworks/best-practices/no-secret-info
    const regPassword = /^[a-zA-z0-9.!@$%^&*?]{6,20}$/;
    let temp;
    if (!regId.test(id)) {
      temp = {
        showDialog: true,
        title: '学号格式错误!',
        text: '学号格式错误,请核对后提交',
        state: 'failure',
        showButton: true,
      };
      setDialog(temp);
    } else if (!regPassword.test(input_password)) {
      temp = {
        showDialog: true,
        title: '密码格式错误!',
        text: '密码须为6-20位,仅可包含数字、大小写字母以及.!@$%^&*?',
        state: 'failure',
        showButton: true,
      };
      setDialog(temp);
    } else {
      const password = crypto.MD5(id + crypto.MD5(input_password).toString()).toString(); // md5 加盐
      dispatchers_user.logUp({ id, password }).then((res) => {
        if (res.code === 100) {
          temp = {
            showDialog: true,
            title: res.msg,
            text: '注册成功,2s后进入主页',
            state: 'success',
            showButton: false,
          };
          setDialog(temp);
          setTimeout(() => {
            temp = {
              showDialog: false,
            };
            setDialog(temp);
            history.push('/home');
          }, 2000);
        } else {
          temp = {
            showDialog: true,
            title: '注册失败!',
            text: res.msg,
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
          {
            isLogin &&
            <>
              <div className={styles.detail}>
                <div className={styles.tab}>学号</div>
                <div className={styles.content}><Input type="text" placeholder="请输入学号" id="id" style={styles.input} /></div>
              </div>
              <div className={styles.detail}>
                <div className={styles.tab}>密码</div>
                <div className={styles.content}><Input type="password" placeholder="请输入密码" id="password" style={styles.input} /></div>
              </div>
              <div className={styles.logUp}>没有账号? <span className={styles.logUp_text} onClick={() => setLogin(false)}>&nbsp;注册</span></div>
              <Button myClassName={styles.button} myClick={login} content="登&nbsp;&nbsp;&nbsp;&nbsp;录" />
            </>
          }
          {
            !isLogin &&
            <>
              <div className={styles.detail}>
                <div className={styles.tab}>学号</div>
                <div className={styles.content}><Input type="text" placeholder="请输入学号" id="id" style={styles.input} /></div>
              </div>
              <div className={styles.detail}>
                <div className={styles.tab}>密码</div>
                <div className={styles.content}><Input type="password" placeholder="请输入密码" id="password" style={styles.input} /></div>
              </div>
              <div className={styles.logUp}>已有账号? <span className={styles.logUp_text} onClick={() => setLogin(true)}>&nbsp;登录</span></div>
              <Button myClassName={styles.button} myClick={logUp} content="注&nbsp;&nbsp;&nbsp;&nbsp;册" />
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default Login;
