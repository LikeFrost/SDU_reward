/* eslint-disable @iceworks/best-practices/no-http-url */
import { request } from 'ice';

export default {
  async login(props) {
    return await request.post(
      '/user/login',
      { id: props.id, password: props.password },
    );
  },
  async logUp(props) {
    return await request.post(
      '/user/logup',
      { id: props.id, password: props.password },
    );
  },
  async updateUser(props) {
    return await request.post(
      '/user',
      { name: props.name, password: props.password, telephone: props.telephone },
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
    );
  },
  async getUser() {
    return await request.get(
      '/user',
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
    );
  },
};
