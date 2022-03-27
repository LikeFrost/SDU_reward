import React, { useState } from 'react';
import { ConfigProvider, ResponsiveGrid } from '@alifd/next';
import styles from './index.module.scss';
import Nav from './components/Nav';
import Menu from './components/Menu';
import store from '@/store';
import Info from '@/pages/Info';
import Reward from '@/pages/Reward';
import Suggestion from '@/pages/Suggestion';
import Home from '@/pages/Home';
import Dialog from '@/components/Dialog';
import Student from '@/pages/Student';
import Warn from '@/components/Warn';

(function () {
  const throttle = function (type, name, obj = window) {
    let running = false;

    const func = () => {
      if (running) {
        return;
      }

      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };

  if (typeof window !== 'undefined') {
    throttle('resize', 'optimizedResize');
  }
})();

const BasicLayout = () => {
  const [dataNow] = store.useModel('now');
  const { now } = dataNow;
  const getDevice = (width) => {
    const isPhone = typeof navigator !== 'undefined' && navigator && navigator.userAgent.match(/phone/gi);

    if (width < 680 || isPhone) {
      return 'phone';
    } else if (width < 1280 && width > 680) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  };

  const [device, setDevice] = useState(getDevice(NaN));

  if (typeof window !== 'undefined') {
    window.addEventListener('optimizedResize', (e) => {
      const deviceWidth = (e && e.target && e.target.innerWidth) || NaN;
      setDevice(getDevice(deviceWidth));
    });
  }
  const auth = sessionStorage.getItem('auth');
  const { Cell } = ResponsiveGrid;
  return (
    <ConfigProvider device={device}>
      <>
        <Cell colSpan={12}>
          <Dialog />
          <Warn />
          <Nav />
          <div className={styles.content}>
            {now === 'Home' && <Home /> }
            {now === 'Info' && <Info />}
            {now === 'Reward' && auth === 'student' && <Reward />}
            {now === 'Reward' && auth === 'admin' && <Student />}
            {now === 'Suggestion' && <Suggestion />}
            <Menu />
          </div>
        </Cell>
      </>
    </ConfigProvider>
  );
};
export default BasicLayout;
