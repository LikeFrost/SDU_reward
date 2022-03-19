import userService from '@/services/user';

export default {
  state: {
    Id: '',
    Password: '',
    Username: '',
    Grade: '',
    Telephone: '',
    code: 101,
  },
  reducers: {
    update(prevState, payload) {
      return { ...prevState, ...payload };
    },
  },
  effects: (dispatch) => ({
    async login(props) {
      const data = await userService.login(props);
      dispatch.user.update(data);
      sessionStorage.setItem('token', data.token);
      return { code: data.code, msg: data.msg };
    },
    async logUp(props) {
      const data = await userService.logUp(props);
      dispatch.user.update(data);
      sessionStorage.setItem('token', data.token);
      return { code: data.code, msg: data.msg };
    },
    async updateUser(props) {
      const data = await userService.updateUser(props);
      dispatch.user.update(data);
      return data.code;
    },
    async getUser() {
      const data = await userService.getUser();
      dispatch.user.update(data.user);
      return data.code;
    },
  }),
};
