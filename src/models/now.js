export default {
  state: {
    now: 'Home',
  },
  reducers: {
    setNow(pre, now) {
      pre.now = now;
    },
  },
};

