import React, { useState } from 'react';
import styles from './index.module.scss';
import { Loading } from '@alifd/next';

function Reward() {
  const tabConfig = [
    {
      title: '奖励总览',
      type: 'reward_total',
    },
    {
      title: '主题教育',
      type: 'reward_education',
    },
    {
      title: '文化艺术',
      type: 'reward_art',
    },
    {
      title: '身心健康',
      type: 'reward_healthy',
    },
    {
      title: '科技创新',
      type: 'reward_technology',
    },
    {
      title: '社会实践',
      type: 'reward_social',
    },
    {
      title: '志愿服务',
      type: 'reward_volunteer',
    },
    {
      title: '社会工作',
      type: 'reward_work',
    },
    {
      title: '社团经历',
      type: 'reward_association',
    },
    {
      title: '就业创业',
      type: 'reward_job',
    },
    {
      title: '学术活动',
      type: 'reward_academic',
    },
  ];
  const [currentType, setCurrentType] = useState('reward_total');
  const [loading, setLoading] = useState(false);
  const loadData = (type) => {
    setCurrentType(type);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className={styles.box}>

      <div className={styles.tab_array}>
        {
          tabConfig.map((item, index) => {
            return (
              <div className={item.type === currentType ? styles.tab_sel : styles.tab} index={index} onClick={() => { loadData(item.type); }}>{item.title}</div>
            );
          })
        }
      </div>
      <Loading
        tip={<span className={styles.tip}>加载中</span>}
        visible={loading}
      >
        <div className={styles.content}>
          {currentType}
        </div>
      </Loading>

    </div>
  );
}

export default Reward;
