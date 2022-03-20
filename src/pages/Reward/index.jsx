/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Loading, Upload } from '@alifd/next';
import store from '@/store';
import Input from '@/components/Input';
import Button from '@/components/Button';

function Reward() {
  const [lastTag, setLastTag] = useState('添加奖励');
  const tabConfig = [
    { tag: '奖励总览' },
    { tag: '研究创新' },
    { tag: '创业实践' },
    { tag: '社会服务' },
    { tag: '美育素养' },
    { tag: '体育素养' },
    {
      tag: lastTag,
      id: 'change_tag',
    },
  ];
  const initialOption = [
    ['未选择', '研究创新', '创业实践', '社会服务', '美育素养', '体育素养'],
    [
      ['未选择'],
      ['未选择', '学术竞赛', '科研及学术立项', '学术论文', '著作', '发明创造'],
      ['未选择', '创业竞赛', '创业实践', '社会实践'],
      ['未选择', '社会工作', '志愿服务'],
      ['未选择', '美育表彰', '美育参与'],
      ['未选择', '体育表彰', '体育参与'],
    ],
    [
      [['未选择']],
      [
        ['未选择'],
        ['未选择', '国家级竞赛', '省级竞赛', '校级竞赛', '校区/书院/学院级竞赛'],
        ['未选择', '国家级立项', '省级立项', '校级立项'],
        ['未选择', '特类期刊', '核心A', '核心B', 'SCI', 'EI(不含会议录取文章)', 'CSSCI', 'CSSCI扩展版'],
        ['未选择', '主要作者出版专著'],
        ['未选择', '国家发明专利(公开)'],
      ],
      [
        ['未选择'],
        ['未选择', '国家级竞赛', '省级竞赛', '校级竞赛'],
        ['未选择', '创业实践'],
        ['未选择', '社会实践优秀个人', '实践活动团队-队长', '实践活动团队-队员', '国家级实践调查报告', '省级实践调查报告', '校级调查报告'],
      ],
      [
        ['未选择'],
        ['未选择', '优秀团干部', '最美团支书', '优秀共青团员', '军训优秀学员', '五四评比优秀个人', '自强之星', '榜样的力量年度人物', '优秀学生干部', '优秀班长', '优秀学生', '三号学生', '十佳班长', '十佳团员',
          '先进班集体-班长/团支书', '先进班集体-班委支委', '优良学风班-班长/团支书', '优良学风班-班委支委', '先进团支部-团支书', '先进团支部-宣传/组织委员', '十佳团支部-团支书', '十佳团支部-宣传/组织委员', '学生组织', '社团负责人'],
        ['未选择', '志愿服务先进个人', '十佳志愿者', '志愿服务先进集体第一负责人', '志愿服务先进集体副部长/干事', '坚持志愿服务并有典型事迹'],
      ],
      [
        ['未选择'],
        ['未选择', '国家级赛事', '省级赛事', '校级赛事', '校区级赛事', '书院级/院级/社团级'],
        ['未选择', '校级及以上且未获奖', '其他级别且未获奖', '撰写新闻稿件'],
      ],
      [
        ['未选择'],
        ['未选择', '国家级', '省级', '校级', '校区级', '书院/院级'],
        ['未选择', '校级及以上未获奖', '其他级别未获奖'],
      ],
    ],
    [
      [[['未选择']]],
      [
        [['未选择']],
        [
          ['未选择'],
          ['未选择', '特等奖', '一等奖', '二等奖', '三等奖', '优秀奖'],
          ['未选择', '特等奖', '一等奖', '二等奖', '三等奖', '优秀奖'],
          ['未选择', '特等奖', '一等奖', '二等奖', '三等奖', '优秀奖'],
          ['未选择', '特等奖', '一等奖', '二等奖', '三等奖', '优秀奖'],
        ],
        [
          ['未选择'],
          ['未选择', '第一作者', '第二作者', '第三作者', '第四作者', '第五作者'],
          ['未选择', '第一作者', '第二作者', '第三作者', '第四作者', '第五作者'],
          ['未选择', '第一作者', '第二作者', '第三作者', '第四作者', '第五作者'],
        ],
        [
          ['未选择'],
          ['未选择', '第一作者', '第二作者', '第三作者及以后'],
          ['未选择', '第一作者', '第二作者', '第三作者及以后'],
          ['未选择', '第一作者', '第二作者', '第三作者及以后'],
          ['未选择', '第一作者', '第二作者', '第三作者及以后'],
          ['未选择', '第一作者', '第二作者', '第三作者及以后'],
          ['未选择', '第一作者', '第二作者', '第三作者及以后'],
          ['未选择', '第一作者', '第二作者', '第三作者及以后'],
        ],
        [
          ['未选择'],
          ['未选择', '第一作者', '第二作者', '第三作者及以后'],
        ],
        [
          ['未选择'],
          ['未选择', '第一作者', '第二作者', '第三作者', '第四作者', '第五作者及以后'],
        ],
      ],
      [
        [['未选择']],
        [
          ['未选择'],
          ['未选择', '特等奖', '一等奖', '二等奖', '三等奖', '优秀奖'],
          ['未选择', '特等奖', '一等奖', '二等奖', '三等奖', '优秀奖'],
          ['未选择', '特等奖', '一等奖', '二等奖', '三等奖', '优秀奖'],
        ],
        [
          ['未选择'],
          ['未选择', '创业团队主要负责人', '其他负责人'],
        ],
        [
          ['未选择'],
          ['未选择', '国家级表彰', '省级表彰', '校级表彰', '院级表彰', '校级立项', '院级立项'],
          ['未选择', '国家级表彰', '省级表彰', '校级表彰', '院级表彰', '校级立项', '院级立项'],
          ['未选择', '国家级表彰', '省级表彰', '校级表彰', '院级表彰', '校级立项', '院级立项'],
          ['未选择', '一等奖', '二等奖', '三等奖'],
          ['未选择', '一等奖', '二等奖', '三等奖'],
          ['未选择', '一等奖', '二等奖', '三等奖'],
        ],
      ],
      [
        [['未选择']],
        [
          ['未选择'],
          ['校级'], ['校级'], ['校级'], ['校级'], ['校级'],
          ['未选择', '校级', '校级提名', '院级'],
          ['未选择', '校级', '院级'],
          ['未选择', '国家级', '省级', '校级', '院级'],
          ['未选择', '国家级', '省级', '校级', '院级'],
          ['未选择', '国家级', '省级', '校级', '院级'],
          ['未选择', '国家级', '省级', '校级', '院级'],
          ['校级'], ['校级'],
          ['未选择', '国家级', '省级', '校级'],
          ['未选择', '国家级', '省级', '校级'],
          ['未选择', '国家级', '省级', '校级'],
          ['未选择', '国家级', '省级', '校级'],
          ['未选择', '国家级', '省级', '校级'],
          ['未选择', '国家级', '省级', '校级'],
          ['未选择', '校级'], ['校级'],
          ['未选择', '学生骨干任职', '优秀骨干'],
          ['未选择', '五星', '四星', '三星', '二星'],
        ],
        [
          ['未选择'],
          ['未选择', '国家级', '省级', '校级'],
          ['未选择', '国家级', '省级', '校级'],
          ['未选择', '国家级', '省级', '校级'],
          ['未选择', '国家级', '省级', '校级'],
          ['未选择', '优秀', '良好'],
        ],
      ],
      [
        [['未选择']],
        [
          ['未选择'],
          ['未选择', '一等奖', '二等奖', '三等奖', '优秀奖'],
          ['未选择', '一等奖', '二等奖', '三等奖', '优秀奖'],
          ['未选择', '一等奖', '二等奖', '三等奖', '优秀奖'],
          ['未选择', '一等奖', '二等奖', '三等奖', '优秀奖'],
          ['未选择', '一等奖', '二等奖', '三等奖', '优秀奖'],
        ],
        [
          ['未选择'], ['未获奖'], ['未获奖'],
          ['未选择', '国家级媒体', '省级媒体', '校级/校区媒体', '其他'],
        ],
      ],
      [
        [['未选择']],
        [
          ['未选择'],
          ['未选择', '破纪录', '第一名', '第二名', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '一等奖', '二等奖', '三等奖'],
          ['未选择', '破纪录', '第一名', '第二名', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '一等奖', '二等奖', '三等奖'],
          ['未选择', '破纪录', '第一名', '第二名', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '一等奖', '二等奖', '三等奖'],
          ['未选择', '破纪录', '第一名', '第二名', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '一等奖', '二等奖', '三等奖'],
          ['未选择', '破纪录', '第一名', '第二名', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '一等奖', '二等奖', '三等奖'],
        ],
        [
          ['未选择'], ['未获奖'], ['未获奖'],
        ],
      ],
    ],
  ];
  const [option, setOption] = useState([0, 0, 0, 0]);
  const [currentOption, setCurrentOption] = useState([initialOption[0], initialOption[1][0], initialOption[2][0][0], initialOption[3][0][0][0]]);
  const [currentTag, setCurrentTag] = useState('奖励总览');
  const [loading, setLoading] = useState(false);
  const [dataReward, dispatchers_reward] = store.useModel('reward');
  const { reward } = dataReward;
  const [, dispatchers_dialog] = store.useModel('dialog');
  const { setDialog } = dispatchers_dialog;
  useEffect(() => {
    setLoading(true);
    dispatchers_reward.getAllReward().then(() => {
      setTimeout(() => {
        setLoading(false);
      });
    }, 1000);
  }, []);
  const loadData = (tag) => {
    setCurrentTag(tag);
    setLoading(true);
    setOption([0, 0, 0, 0]);
    setLastTag('添加奖励');
    setCurrentOption([initialOption[0], initialOption[1][option[0]], initialOption[2][option[0]][option[1]], initialOption[3][option[0]][option[1]][option[2]]]);
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
  const deleteReward = (id) => {
    dispatchers_reward.deleteReward(id).then((res) => {
      let temp;
      if (res.code === 100) {
        loadData(currentTag);
        temp = {
          showDialog: true,
          title: '删除成功！',
          state: 'success',
          showButton: false,
        };
        setTimeout(() => {
          temp = { showDialog: false };
          setDialog(temp);
        }, 500);
      } else {
        temp = {
          showDialog: true,
          title: '删除失败！',
          text: '删除失败，请稍后再试',
          state: 'failure',
          showButton: true,
        };
      }
      setDialog(temp);
    });
  };
  const getDetail = (id) => {
    setLastTag('奖励详情');
    setCurrentTag('奖励详情');
  };
  const changeSel = (index) => {
    const select = [
      parseInt(document.getElementById('select0').value, 10),
      parseInt(document.getElementById('select1').value, 10),
      parseInt(document.getElementById('select2').value, 10),
      parseInt(document.getElementById('select3').value, 10),
    ];
    const temp = option;
    temp[index] = select[index];
    for (let i = index + 1; i <= 3; i++) {
      temp[i] = 0;
    }
    setOption(temp);
    setCurrentOption([initialOption[0], initialOption[1][option[0]], initialOption[2][option[0]][option[1]], initialOption[3][option[0]][option[1]][option[2]]]);
  };
  const [img_src, setSrc] = useState();
  const uploadPic = () => {
    const img = document.getElementById('img').files[0];
    const f = new FileReader();
    f.readAsDataURL(img);
    f.onload = () => {
      setSrc(f.result);
    };
    console.log(img_src);
  };
  const addReward = () => {
    const name = document.getElementById('name').value;
    const time = document.getElementById('time').value;
    const tag = option[0];
    const type = option[1];
    const grade = option[2];
    const prize = option[3];
    const score = 0;
    // const img = img_src;
    const img = 'img';
    let temp;
    if (!name || !time || !tag || !type || !grade) {
      temp = {
        showDialog: true,
        title: '信息不完整！',
        text: '请检查各项信息是否完整后重试!',
        state: 'failure',
        showButton: true,
      };
      setDialog(temp);
    } else {
      dispatchers_reward.addReward({ name, time, tag, type, grade, prize, score, img }).then((res) => {
        if (res.code === 100) {
          temp = {
            showDialog: true,
            title: '添加成功！',
            state: 'success',
            showButton: false,
          };
          setTimeout(() => {
            temp = { showDialog: false };
            setDialog(temp);
            loadData('奖励总览');
          }, 1000);
        } else {
          temp = {
            showDialog: true,
            title: '添加失败！',
            text: '添加失败，请稍后再试',
            state: 'failure',
            showButton: true,
          };
        }
        setDialog(temp);
      });
    }
  };
  const getToday = () => {
    const newDay = new Date();
    const year = newDay.getFullYear();
    let month = newDay.getMonth() + 1;
    let day = newDay.getDate();
    month = month < 10 ? `0${ month}` : month;
    day = day < 10 ? `0${ day}` : day;
    return `${year}-${month}-${day}`;
  };
  return (
    <div className={styles.box}>
      <div className={styles.tab_array}>
        {
          tabConfig.map((item, index) => {
            return (
              <div id={item.id} className={item.tag === currentTag ? styles.tab_sel : styles.tab} key={index} onClick={() => { loadData(item.tag); }}>{item.tag}</div>
            );
          })
        }
      </div>
      <Loading
        tip={<span className={styles.tip}>加载中</span>}
        visible={loading}
      >
        <div className={styles.content}>
          {currentTag !== '添加奖励' && currentTag !== '奖励详情' &&
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
                      <td><span style={{ cursor: 'pointer' }} onClick={() => getDetail(item.id)}>查看</span>&nbsp;|&nbsp;<span style={{ cursor: 'pointer' }} onClick={() => deleteReward(item.Id)} >删除</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
          {currentTag === '添加奖励' &&
          <div className={styles.tag_page}>
            <div className={styles.details_box}>
              <div className={styles.details_left}>
                <div className={styles.detail}>
                  <div className={styles.detail_tab}>请选择奖项类别:</div>
                  <select className={styles.detail_option} onChange={() => changeSel(0)} id="select0">
                    {
                    currentOption[0].map((item, index) => {
                      if (index === option[0]) { return <option value={index} key={index} selected>{item}</option>; } else return <option value={index} key={index}>{item}</option>;
                    })
                  }
                  </select>
                </div>
                <div className={styles.detail}>
                  <div className={styles.detail_tab}>请选择赋分项目:</div>
                  <select className={styles.detail_option} onChange={() => changeSel(1)} id="select1">
                    {
                    currentOption[1].map((item, index) => {
                      if (index === option[1]) { return <option value={index} key={index} selected>{item}</option>; } else return <option value={index} key={index}>{item}</option>;
                    })
                  }
                  </select>
                </div>
                <div className={styles.detail}>
                  <div className={styles.detail_tab}>请选择奖项级别:</div>
                  <select className={styles.detail_option} onChange={() => changeSel(2)} id="select2">
                    {
                    currentOption[2].map((item, index) => {
                      if (index === option[2]) { return <option value={index} key={index} selected>{item}</option>; } else return <option value={index} key={index}>{item}</option>;
                    })
                  }
                  </select>
                </div>
                <div className={styles.detail}>
                  <div className={styles.detail_tab}>请选择奖项等次:</div>
                  <select className={styles.detail_option} onChange={() => changeSel(3)} id="select3">
                    {
                    currentOption[3].map((item, index) => {
                      if (index === option[3]) { return <option value={index} key={index} selected>{item}</option>; } else return <option value={index} key={index}>{item}</option>;
                    })
                  }
                  </select>
                </div>
                <div className={styles.detail}>
                  <div className={styles.detail_tab}>请选择获奖时间:</div>
                  <Input type="date" style={styles.input} id="time" min="2018-09-01" max={getToday()} />
                </div>
                <div className={styles.detail}>
                  <div className={styles.detail_tab}>请输入奖项名称:</div>
                  <Input id="name" style={styles.input} />
                </div>
              </div>
              <div className={styles.details_right}>
                <div className={styles.detail}>
                  <div className={styles.detail_tab}>请上传奖项证明(可选):</div>
                  <input type="file" onChange={uploadPic} id="img" />
                </div>
                <div className={styles.detail}>
                  {
                    img_src &&
                    <div className={styles.img_box}>
                      <img src={img_src} className={styles.img} alt="预览图片" />
                    </div>
                  }
                  {
                    !img_src &&
                    <div className={styles.img_box}>
                      <img src="../../../img/preview.svg" className={styles.img_preview} alt="预览图片" />
                    </div>
                  }
                </div>
              </div>
            </div>
            <Button content="确认提交" myClassName={styles.button} myClick={addReward} />
          </div>
          }
          {
            currentTag === '奖励详情' &&
            <div />
          }
        </div>
      </Loading>
    </div>
  );
}

export default Reward;
