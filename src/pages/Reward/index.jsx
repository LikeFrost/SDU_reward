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
      title: '研究创新',
      type: 'reward_technology',
    },
    {
      title: '创业实践',
      type: 'reward_social',
    },
    {
      title: '社会服务',
      type: 'reward_work',
    },
    {
      title: '美育素养',
      type: 'reward_art',
    },
    {
      title: '体育素养',
      type: 'reward_healthy',
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
              <div className={item.type === currentType ? styles.tab_sel : styles.tab} key={index} onClick={() => { loadData(item.type); }}>{item.title}</div>
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
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th>序号</th>
                <th>奖项类别</th>
                <th>赋分项目</th>
                <th>奖项名称</th>
                <th>奖项级别</th>
                <th>奖项等次</th>
                <th>获奖时间</th>
                <th>赋分值</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>科技创新</td>
                <td>学术竞赛</td>
                <td>数学建模</td>
                <td>国家级</td>
                <td>二等奖</td>
                <td>2020.10.10</td>
                <td>100</td>
                <td>查看</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Loading>
    </div>
  );
}

export default Reward;
