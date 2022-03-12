import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Loading } from '@alifd/next';
import store from '@/store';

function Reward() {
  const [switchTag, setTag] = useState('添加奖励');
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
      type: 'change_tag',
      id: 'change_tag',
    },
  ];
  const optionConfig = [
    {
      title: '请选择奖励所属类别',
      options: ['未选择', '研究创新', '创业实践', '社会服务', '美育素养', '体育素养'],
    },
    {
      title: '请选择赋分项目',
      options: ['竞赛', '论文'],
    },
    {
      title: '请输入奖项名称',
      options: [],
    },
    {
      title: '请选择奖项级别',
      options: ['国家级', '省级', '市级', '校级', '书院级', '院级', '班级'],
    },
    {
      title: '请选择奖项等次',
      options: ['特等奖', '一等奖', '二等奖', '三等奖', '优胜奖', '参与奖'],
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
    setTag('添加奖励');
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
  const getDetail = (id) => {
    const changeTag = document.getElementById('change_tag');
    changeTag.click();
    setTag('奖励详情');
  };
  return (
    <div className={styles.box}>

      <div className={styles.tab_array}>
        {
          tabConfig.map((item, index) => {
            return (
              <div id={item.id} className={item.type === currentType ? styles.tab_sel : styles.tab} key={index} onClick={() => { loadData(item.type, item.tag); }}>{item.tag}</div>
            );
          })
        }
      </div>
      <Loading
        tip={<span className={styles.tip}>加载中</span>}
        visible={loading}
      >
        <div className={styles.content}>
          {currentType !== 'change_tag' &&
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
                    <tr key={item.Id} className={styles.item}>
                      <td>{item.Tag}</td>
                      <td>{item.Type}</td>
                      <td>{item.Name}</td>
                      <td>{item.Grade}</td>
                      <td>{item.Prize}</td>
                      <td>{item.Time}</td>
                      <td>{item.Score}</td>
                      <td onClick={() => getDetail(item.Id)} style={{ cursor: 'pointer' }}>查看</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
          {currentType === 'change_tag' &&
            <div className={styles.details}>
              {
                optionConfig.map((item) => {
                  return (
                    <div className={styles.detail}>
                      <div className={styles.detail_tab}>{item.title}</div>
                      <select className={styles.detail_option}>
                        {
                          item.options.map((i) => {
                            return (
                              <option value={i}>{i}</option>
                            );
                          })
                        }
                      </select>
                    </div>
                  );
                })
              }
            </div>
          }
        </div>
      </Loading>
    </div>
  );
}

export default Reward;
