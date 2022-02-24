export default {
  state: {
    show: true,
  },
  reducers: {
    setShow(pre, now) {
      pre.show = now;
    },
  },
};
