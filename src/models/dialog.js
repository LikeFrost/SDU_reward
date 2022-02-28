export default {
  state: {
    dialogConfig: {
      showDialog: false,
      title: '修改成功',
      text: '两秒后返回主页',
      state: 'success',
      showButton: true,
    },
  },
  reducers: {
    setDialog(pre, now) {
      pre.dialogConfig = now;
    },
  },
};
