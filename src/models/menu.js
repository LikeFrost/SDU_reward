export default {
  state: {
    menuConfig: [
      {
        title: '功能主页',
        component: 'Home',
        sel: true,
      },
      {
        title: '个人信息',
        component: 'Info',
        sel: false,
      },
      {
        title: '奖励管理',
        component: 'Reward',
        sel: false,
      },
      {
        title: '意见反馈',
        component: 'Suggestion',
        sel: false,
      },
    ],
  },
  reducers: {
    setMenu(pre, now) {
      pre.menuConfig = now;
    },
  },
};
