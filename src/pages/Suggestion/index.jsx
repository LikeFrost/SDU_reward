/* eslint-disable @iceworks/best-practices/no-http-url */
import React, { useState } from 'react';
import styles from './index.module.scss';
import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiInput from '@/components/MultiInput';
import { request, useHistory } from 'ice';
import store from '@/store';

function Suggestion() {
  const [rotate, setRotate] = useState(false);
  const [, dispatchers_dialog] = store.useModel('dialog');
  const { setDialog } = dispatchers_dialog;
  const history = useHistory();
  async function AddSuggestion(props) {
    return await request.post(
      '/suggestion',
      { suggestion: props.suggestion, email: props.email },
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  }
  const submitSuggestion = () => {
    const email = document.getElementById('email').value;
    const suggestion = document.getElementById('suggestion').value;
    AddSuggestion({ email, suggestion }).then((res) => {
      let temp;
      if (res.code === 100) {
        temp = {
          showDialog: true,
          title: '反馈成功！',
          text: '反馈成功，1s后返回',
          state: 'success',
          showButton: false,
        };
        setTimeout(() => {
          temp = {
            showDialog: false,
          };
          setDialog(temp);
          setRotate(false);
          document.getElementById('email').value = '';
          document.getElementById('suggestion').value = '';
        }, 1000);
      } else if (res.code === 102) {
        temp = {
          showDialog: true,
          title: '登录过期！',
          text: '登录过期，请重新登录!',
          state: 'failure',
          showButton: false,
        };
        setTimeout(() => {
          history.push('/');
          temp = {
            showDialog: false,
          };
          setDialog(temp);
        }, 1000);
      } else {
        temp = {
          showDialog: true,
          title: '反馈失败！',
          text: '反馈失败，请稍后再试!',
          state: 'failure',
          showButton: true,
        };
      }
      setDialog(temp);
    });
  };
  const clickCard = () => {
    if (!rotate) {
      setRotate(true);
    }
  };
  return (
    <div className={styles.container}>
      <div className={rotate ? styles.card_rotate : styles.card} onClick={clickCard}>
        <img src="../../../img/pic_suggestion.svg" className={styles.img} />
        <div className={styles.title}>
          <div>意</div>
          <div className={styles.text2}>见</div>
          <div className={styles.text3}>反</div>
          <div className={styles.text4}>馈</div>
        </div>
        <svg t="1646979735422" className={styles.click} viewBox="0 0 1024 1024" version="1.1" xmlns="https://www.w3.org/2000/svg" p-id="5325" width="128" height="128"><path d="M458.286 421.32l86.542 501.754c0 0 63.958-65.842 116.759-111.792l116.1 155.425c4.677 6.317 14.86 6.729 22.641 1.038l49.574-36.225c7.821-5.715 10.369-15.481 5.647-21.796l-112.93-151.18c58.99-23.786 156.15-50.855 156.15-50.855l-440.481-286.368zM318.59 653.020l-128.849 94.176c-19.478 14.262-22.995 41.686-7.578 62.013 15.422 20.269 43.885 25.605 63.299 11.406l128.849-94.176c19.915-14.574 23.243-43.157 7.826-63.421-15.359-20.306-43.655-24.572-63.547-9.998v0zM926.736 264.799c-15.422-20.262-43.264-24.818-63.61-9.961l-127.937 93.581c-20.326 14.86-23.843 42.37-8.447 62.635 15.422 20.262 43.878 25.605 64.207 10.746l127.941-93.581c20.347-14.863 23.243-43.138 7.845-63.42v0zM328.958 167.95c-15.106-19.853-42.905-24.407-63.295-9.523-19.066 13.951-22.995 41.686-7.888 61.537l100.081 131.623c15.111 19.91 43.322 24.091 62.383 10.139 20.326-14.86 23.913-42.308 8.8-62.197l-100.081-131.58zM581.667 324.348c24.818 4.017 47.648-12.691 50.855-37.199l20.080-159.13c3.206-24.464-14.198-47.396-39.392-51.826-24.814-4.017-47.644 12.686-50.855 37.132l-20.138 159.194c-3.105 24.508 14.322 47.402 39.451 51.83v0zM338.854 501.924c2.421-24.573-14.985-47.465-39.387-51.831l-161.245-26.512c-25.664-3.396-48.062 12.978-50.857 37.195-3.7 25.541 13.725 48.435 39.392 51.826l161.241 26.518c24.383 4.24 46.838-12.153 50.855-37.194v0zM338.854 501.924z" p-id="5326" fill="#8a8a8a" /></svg>
        <div className={styles.tab}>请输入您的联系邮箱：</div>
        <Input style={styles.input} id="email" />
        <div className={styles.tab}>请输入您的反馈建议：</div>
        <MultiInput style={styles.multi_input} id="suggestion" />
        <div className={styles.button_box}>
          <Button myClassName={styles.button} content="确认提交" myClick={submitSuggestion} />
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
