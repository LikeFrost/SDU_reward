import { Form, Input } from '@alifd/next';
import React from 'react';
import styles from './index.module.scss';
import { useHistory } from 'ice';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 14,
  },
};
function Login() {
  const history = useHistory();
  const submitFrom = (e) => {
    if (e.SDUNumber && e.password) {
      history.push('home');
    }
    console.log(e.SDUNumber);
  };
  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <div className={styles.box}>
          <img className={styles.title} src="../../../img/icon-login.svg" />
          <Form {...formItemLayout} size="large" className={styles.form}>
            <FormItem className={styles.form_item} name="SDUNumber" label="学号" required requiredMessage="请输入学号!">
              <Input placeholder="请输入学号" />
            </FormItem>
            <FormItem className={styles.form_item} name="password" label="密码" required requiredMessage="请输入密码!" hasFeedback={false}>
              <Input.Password placeholder="请输入密码" />
            </FormItem>
            <FormItem className={styles.button_box}>
              <Form.Submit className={styles.button} onClick={submitFrom} validate>登录</Form.Submit>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
