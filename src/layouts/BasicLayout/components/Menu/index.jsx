import React, { useState } from 'react';
import styles from './index.module.scss';
import store from '@/store';

const initialState = [
  {
    title: '个人信息',
    component: 'Info',
    sel: true,
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
];

function Menu() {
  const [menuConfig, setMenuConfig] = useState(initialState);
  const [dataShow] = store.useModel('show');
  const { show } = dataShow;
  const [, dispatchers] = store.useModel('now');
  const { setNow } = dispatchers;
  const changeClick = (index) => {
    // eslint-disable-next-line prefer-const
    let temp = menuConfig.slice();
    // eslint-disable-next-line prefer-const
    for (let i in temp) {
      if (i == index) {
        temp[i].sel = true;
        setNow(temp[i].component);
      } else temp[i].sel = false;
    }
    setMenuConfig(temp);
  };
  return (
    <div className={show ? styles.menu : styles.menu_hidden}>
      {menuConfig.map((item, index) => {
        return (
          <div className={item.sel ? styles.menu_item_sel : styles.menu_item} onClick={() => changeClick(index)}>
            {item.title}
            <div className={styles.menu_circle}> </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
