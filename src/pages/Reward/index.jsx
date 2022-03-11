import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Loading } from '@alifd/next';
import store from '@/store';

function Reward() {
  const [switchTag, setTag] = useState('添加记录');
  const tabConfig = [
    {
      tag: '奖励总览',
      type: 'reward_total',
    },
    {
      tag: '研究创新',
      type: 'reward_technology',
    },
    {
      tag: '创业实践',
      type: 'reward_social',
    },
    {
      tag: '社会服务',
      type: 'reward_work',
    },
    {
      tag: '美育素养',
      type: 'reward_art',
    },
    {
      tag: '体育素养',
      type: 'reward_healthy',
    },
    {
      tag: switchTag,
      type: switchTag,
    },
  ];
  const [currentType, setCurrentType] = useState('reward_total');
  const [loading, setLoading] = useState(false);
  const [dataReward, dispatchers_reward] = store.useModel('reward');
  const { reward } = dataReward;
  useEffect(() => {
    setLoading(true);
    dispatchers_reward.getAllReward().then(() => {
      setTimeout(() => {
        setLoading(false);
      });
    }, 1000);
  }, []);
  const loadData = (type, tag) => {
    setCurrentType(type);
    setLoading(true);
    if (tag === '奖励总览') {
      dispatchers_reward.getAllReward().then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
    } else {
      dispatchers_reward.getRewardByTag(tag).then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
    }
  };
  return (
    <div className={styles.box}>

      <div className={styles.tab_array}>
        {
          tabConfig.map((item, index) => {
            return (
              <div className={item.type === currentType ? styles.tab_sel : styles.tab} key={index} onClick={() => { loadData(item.type, item.tag); }}>{item.tag}</div>
            );
          })
        }
      </div>
      <Loading
        tip={<span className={styles.tip}>加载中</span>}
        visible={loading}
      >
        <div className={styles.content}>
          {switchTag !== currentType &&
            <table className={styles.table}>
              <thead>
                <tr className={styles.tr}>
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
                {reward.map((item) => {
                  return (
                    <tr key={item.Id}>
                      <td>{item.Tag}</td>
                      <td>{item.Type}</td>
                      <td>{item.Name}</td>
                      <td>{item.Grade}</td>
                      <td>{item.Prize}</td>
                      <td>{item.Time}</td>
                      <td>{item.Score}</td>
                      <td>查看</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
        </div>
      </Loading>
    </div>
  );
}

export default Reward;
