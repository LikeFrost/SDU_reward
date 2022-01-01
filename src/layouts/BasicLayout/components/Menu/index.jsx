import React, { useState } from 'react';
import styles from './index.module.scss';
import { Animate, Tab } from '@alifd/next';
import store from '../../../../store';

const initialState = [
  {
    title: '个人信息',
    sel: true,
  },
  {
    title: '奖励管理',
    sel: false,
  },
  {
    title: '意见反馈',
    sel: false,
  },
];

function Menu() {
  const [menuConfig, setMenuConfig] = useState(initialState);
  const [data] = store.useModel('show');
  const { show } = data;
  const changeClick = (index) => {
    // eslint-disable-next-line prefer-const
    let temp = menuConfig.slice();
    // eslint-disable-next-line prefer-const
    for (let i in temp) {
      if (i == index) {
        temp[i].sel = true;
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
