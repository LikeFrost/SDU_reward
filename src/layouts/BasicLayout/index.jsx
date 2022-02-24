import React, { useState } from 'react';
import { ConfigProvider } from '@alifd/next';
import styles from './index.module.scss';
import Nav from './components/Nav';
import Menu from './components/Menu';
import store from '@/store';
import Info from '@/pages/Info';
import Reward from '@/pages/Reward';
import Suggestion from '@/pages/Suggestion';

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

  return (
    <ConfigProvider device={device}>
      <>
        <Nav />
        <div className={styles.content}>
          {now === 'Info' && <Info />}
          {now === 'Reward' && <Reward />}
          {now === 'Suggestion' && <Suggestion />}
        </div>
        <div className={styles.menu}>
          <Menu />
        </div>
      </>
    </ConfigProvider>
  );
};
export default BasicLayout;
