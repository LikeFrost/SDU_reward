import userService from '@/services/user';

export default {
  state: {
    id: '',
    password: '',
    name: '请完善姓名信息',
    grade: '',
    telephone: '请完善联系方式',
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
  }),
};
