export default {
  state: {
    now: 'Info',
  },
  reducers: {
    setNow(pre, now) {
      pre.now = now;
    },
  },
};

