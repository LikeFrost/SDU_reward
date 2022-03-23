import userService from '@/services/user';

export default {
  state: {
    user: {},
    users: [],
  },
  reducers: {
    update(pre, now) {
      pre.user = now;
    },
    updateUsers(pre, now) {
      pre.users = now;
    },
  },
  effects: (dispatch) => ({
    async login(props) {
      const data = await userService.login(props);
      dispatch.user.update(data);
      sessionStorage.setItem('token', data.token);
      if (data.id === '999999999') {
        sessionStorage.setItem('auth', 'admin');
      } else sessionStorage.setItem('auth', 'student');
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
      return { code: data.code, msg: data.msg };
    },
    async getUser() {
      const data = await userService.getUser();
      dispatch.user.update(data.user);
      return data.code;
    },
    async getAllUsers() {
      const data = await userService.getAllUsers();
      dispatch.user.updateUsers(data.user);
      return data.code;
    },
  }),
};
