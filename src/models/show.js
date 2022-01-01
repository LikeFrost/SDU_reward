export default {
  state: {
    show: false,
  },
  reducers: {
    setShow(pre, now) {
      pre.show = now;
    },
  },
};
