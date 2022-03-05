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
      return data.code;
    },
    async updateUser(props) {
      const data = await userService.updateUser(props);
      dispatch.user.update(data);
      return data.code;
    },
    async getUser(id) {
      const data = await userService.getUser(id);
      dispatch.user.update(data.user);
    },
  }),
};
