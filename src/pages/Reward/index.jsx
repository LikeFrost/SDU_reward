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
      options: [
        ['未选择'],
        ['学术竞赛', '科研及学术立项', '学术论文', '著作', '发明创造'],
        ['创业竞赛', '创业实践', '社会实践'],
        ['社会工作', '志愿服务'],
        ['美育表彰', '美育参与'],
        ['体育表彰', '体育参与'],
      ],
    },
    {
      title: '请输入奖项名称',
      options: '',
    },
    {
      title: '请选择奖项级别',
      options: [
        [['未选择']],
        [
          ['国家级竞赛', '省级竞赛', '校级竞赛', '校区/书院/学院级竞赛'],
          ['国家级立项', '省级立项', '校级立项'],
          ['特类期刊', '核心A', '核心B', 'SCI', 'EI(不含会议录取文章)', 'CSSCI', 'CSSCI扩展版'],
          ['主要作者出版专著'],
          ['国家发明专利(公开)'],
        ],
        [
          ['国家级竞赛', '省级竞赛', '校级竞赛'],
          ['创业实践'],
          ['社会实践优秀个人', '实践活动团队-队长', '实践活动团队-队员', '国家级实践调查报告', '省级实践调查报告', '校级调查报告'],
        ],
        [
          ['优秀团干部', '最美团支书', '优秀共青团员', '军训优秀学员', '五四评比优秀个人', '自强之星', '榜样的力量年度人物', '优秀学生干部', '优秀班长', '优秀学生', '三号学生', '十佳班长', '十佳团员',
            '先进班集体-班长/团支书', '先进班集体-班委支委', '优良学风班-班长/团支书', '优良学风班-班委支委', '先进团支部-团支书', '先进团支部-宣传/组织委员', '十佳团支部-团支书', '十佳团支部-宣传/组织委员', '学生组织', '社团负责人'],
          ['志愿服务先进个人', '十佳志愿者', '志愿服务先进集体第一负责人', '志愿服务先进集体副部长/干事', '坚持志愿服务并有典型事迹'],
        ],
        [
          ['国家级赛事', '省级赛事', '校级赛事', '校区级赛事', '书院级/院级/社团级'],
          ['校级及以上且未获奖', '其他级别且未获奖', '撰写新闻稿件'],
        ],
        [
          ['国家级', '省级', '校级', '校区级', '书院/院级'],
          ['校级及以上未获奖', '其他级别未获奖'],
        ],
      ],
    },
    {
      title: '请选择奖项等次',
      options: [
        [[['未选择']]],
        [
          [
            ['特等奖', '一等奖', '二等奖', '三等奖', '优秀奖'],
            ['特等奖', '一等奖', '二等奖', '三等奖', '优秀奖'],
            ['特等奖', '一等奖', '二等奖', '三等奖', '优秀奖'],
            ['特等奖', '一等奖', '二等奖', '三等奖', '优秀奖'],
          ],
          [
            ['第一作者', '第二作者', '第三作者', '第四作者', '第五作者'],
            ['第一作者', '第二作者', '第三作者', '第四作者', '第五作者'],
            ['第一作者', '第二作者', '第三作者', '第四作者', '第五作者'],
          ],
          [
            ['第一作者', '第二作者', '第三作者及以后'],
            ['第一作者', '第二作者', '第三作者及以后'],
            ['第一作者', '第二作者', '第三作者及以后'],
            ['第一作者', '第二作者', '第三作者及以后'],
            ['第一作者', '第二作者', '第三作者及以后'],
            ['第一作者', '第二作者', '第三作者及以后'],
            ['第一作者', '第二作者', '第三作者及以后'],
          ],
          [
            ['第一作者', '第二作者', '第三作者及以后'],
          ],
          [
            ['第一作者', '第二作者', '第三作者', '第四作者', '第五作者及以后'],
          ],
        ],
        [
          [
            ['特等奖', '一等奖', '二等奖', '三等奖', '优秀奖'],
            ['特等奖', '一等奖', '二等奖', '三等奖', '优秀奖'],
            ['特等奖', '一等奖', '二等奖', '三等奖', '优秀奖'],
          ],
          [
            ['创业团队主要负责人', '其他负责人'],
          ],
          [
            ['国家级表彰', '省级表彰', '校级表彰', '院级表彰', '校级立项', '院级立项'],
            ['国家级表彰', '省级表彰', '校级表彰', '院级表彰', '校级立项', '院级立项'],
            ['国家级表彰', '省级表彰', '校级表彰', '院级表彰', '校级立项', '院级立项'],
            ['一等奖', '二等奖', '三等奖'],
            ['一等奖', '二等奖', '三等奖'],
            ['一等奖', '二等奖', '三等奖'],
          ],
        ],
        [
          [
            ['校级'], ['校级'], ['校级'], ['校级'], ['校级'],
            ['校级', '校级提名', '院级'],
            ['校级', '院级'],
            ['国家级', '省级', '校级', '院级'],
            ['国家级', '省级', '校级', '院级'],
            ['国家级', '省级', '校级', '院级'],
            ['国家级', '省级', '校级', '院级'],
            ['校级'], ['校级'],
            ['国家级', '省级', '校级'],
            ['国家级', '省级', '校级'],
            ['国家级', '省级', '校级'],
            ['国家级', '省级', '校级'],
            ['国家级', '省级', '校级'],
            ['国家级', '省级', '校级'],
            ['校级'], ['校级'],
            ['学生骨干任职', '优秀骨干'],
            ['五星', '四星', '三星', '二星'],
            ['国家级', '省级', '校级'],
            ['国家级', '省级', '校级'],
            ['国家级', '省级', '校级'],
            ['国家级', '省级', '校级'],
            ['优秀', '良好'],
          ],
        ],
        [
          [
            ['一等奖', '二等奖', '三等奖', '优秀奖'],
            ['一等奖', '二等奖', '三等奖', '优秀奖'],
            ['一等奖', '二等奖', '三等奖', '优秀奖'],
            ['一等奖', '二等奖', '三等奖', '优秀奖'],
            ['一等奖', '二等奖', '三等奖', '优秀奖'],
          ],
          [['未获奖']],
          [['未获奖']],
          [['国家级媒体', '省级媒体', '校级/校区媒体', '其他']],
        ],
        [
          [
            ['破纪录', '第一名', '第二名', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '一等奖', '二等奖', '三等奖'],
            ['破纪录', '第一名', '第二名', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '一等奖', '二等奖', '三等奖'],
            ['破纪录', '第一名', '第二名', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '一等奖', '二等奖', '三等奖'],
            ['破纪录', '第一名', '第二名', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '一等奖', '二等奖', '三等奖'],
            ['破纪录', '第一名', '第二名', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '一等奖', '二等奖', '三等奖'],
          ],
          [['未获奖']],
          [['未获奖']],
        ],
      ],
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
                      {
                        item.options &&
                        <select className={styles.detail_option}>
                          {
                          item.options.map((i) => {
                            return (
                              <option value={i}>{i}</option>
                            );
                          })
                        }
                        </select>
                      }
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
