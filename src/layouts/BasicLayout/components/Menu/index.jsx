import React, { useState } from 'react';
import styles from './index.module.scss';
import store from '@/store';

function Menu() {
  const [dataShow, dispatchers_show] = store.useModel('show');
  const { show } = dataShow;
  const { setShow } = dispatchers_show;
  const [, dispatchers_now] = store.useModel('now');
  const { setNow } = dispatchers_now;
  const [dataMenu, dispatchers_menu] = store.useModel('menu');
  const { menuConfig } = dataMenu;
  const { setMenu } = dispatchers_menu;
  const changeClick = (index) => {
    // eslint-disable-next-line prefer-const
    let temp = JSON.parse(JSON.stringify(menuConfig));
    // eslint-disable-next-line prefer-const
    for (let i in temp) {
      if (i == index) {
        temp[i].sel = true;
        setNow(temp[i].component);
      } else temp[i].sel = false;
    }
    if (index === 0) {
      setShow(true);
    } else setShow(false);
    setMenu(temp);
  };
  return (
    <div className={show ? styles.menu : styles.menu_hidden}>
      {menuConfig.map((item, index) => {
        return (
          <div className={item.sel ? styles.menu_item_sel : styles.menu_item} onClick={() => changeClick(index)} key={index}>
            {item.title}
            <div className={styles.menu_circle}> </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
