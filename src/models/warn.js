export default {
  state: {
    warnConfig: {
      showWarn: false,
      title: '确定要删除吗?',
      submit: () => {},
    },
  },
  reducers: {
    setWarn(pre, now) {
      pre.warnConfig = now;
    },
  },
};

