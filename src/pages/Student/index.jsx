/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Loading } from '@alifd/next';
import store from '@/store';
import Button from '@/components/Button';
import ReadOnlyInput from '@/components/ReadOnlyInput';
import { useHistory } from 'react-router';

function Student() {
  const tabConfig = [
    { tag: '学生列表' },
    { tag: '学生奖励' },
    { tag: '奖励详情' },
  ];
  const [currentTag, setCurrentTag] = useState('学生列表');
  const [loading, setLoading] = useState(false);
  const [dataReward, dispatchers_reward] = store.useModel('reward');
  const { reward, detail } = dataReward;
  const [dataUser, dispatchers_user] = store.useModel('user');
  const { user, users } = dataUser;
  const [, dispatchers_dialog] = store.useModel('dialog');
  const { setDialog } = dispatchers_dialog;
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    dispatchers_user.getAllUsers().then((res) => {
      if (res === 100) {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } else if (res === 102) {
        let temp = {
          showDialog: true,
          title: '登录过期!',
          text: '登录过期,请重新登录!',
          state: 'failure',
          showButton: false,
        };
        setDialog(temp);
        setTimeout(() => {
          history.replace('/');
          temp = {
            showDialog: false,
          };
          setDialog(temp);
        }, 1000);
      }
    });
  }, []);
  const loadData = (tag) => {
    setCurrentTag(tag);
    setLoading(true);
    if (tag === '学生列表') {
      dispatchers_user.getAllUsers().then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
    }
    // else {
    //   dispatchers_reward.getRewardByTag(tag).then(() => {
    //     setTimeout(() => {
    //       setLoading(false);
    //     }, 500);
    //   });
    // }
  };
  const getUserReward = (id) => {
    dispatchers_reward.getUserReward(id).then((res) => {
      if (res !== 100) {
        const temp = {
          showDialog: true,
          title: '查看失败!',
          text: res.msg,
          state: 'failure',
          showButton: true,
        };
        setDialog(temp);
      } else {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setCurrentTag('学生奖励');
        }, 500);
      }
    });
  };
  return (
    <div className={styles.box}>
      <div className={styles.tab_array}>
        {
          tabConfig.map((item, index) => {
            return (
              <div className={item.tag === currentTag ? styles.tab_sel : styles.tab} key={index} onClick={() => { loadData(item.tag); }}>{item.tag}</div>
            );
          })
        }
      </div>
      <Loading
        tip={<span className={styles.tip}>加载中</span>}
        visible={loading}
      >
        <div className={styles.content}>
          {currentTag === '学生列表' &&
            <table className={styles.table}>
              <thead>
                <tr className={styles.tr}>
                  <th>学号</th>
                  <th>年级</th>
                  <th>姓名</th>
                  <th>手机号</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {users && users.map((item) => {
                  return (
                    <tr key={item.Id} className={styles.item}>
                      <td>{item.Id}</td>
                      <td>{item.Id ? item.Id.slice(0, 4) : ''}</td>
                      <td>{item.Username ? item.Username : '待完善'}</td>
                      <td>{item.Telephone ? item.Telephone : '待完善'}</td>
                      <td><span style={{ cursor: 'pointer' }} onClick={() => getUserReward(item.Id)}>查看用户奖励</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
          {currentTag === '学生奖励' &&
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
                      <td><span style={{ cursor: 'pointer' }} onClick={() => getDetail(item.Id)}>查看</span>&nbsp;|&nbsp;<span style={{ cursor: 'pointer' }} onClick={() => deleteReward(item.Id)} >删除</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
          {currentTag === '奖励详情' && detail &&
          <div className={styles.tag_page}>
            <div className={styles.details_box}>
              <div className={styles.details_left}>
                <div className={styles.detail}>
                  <div className={styles.detail_tab}>奖项类别:</div>
                  <ReadOnlyInput style={styles.input} value={detail.Tag} />
                </div>
                <div className={styles.detail}>
                  <div className={styles.detail_tab}>赋分项目:</div>
                  <ReadOnlyInput style={styles.input} value={detail.Type} />
                </div>
                <div className={styles.detail}>
                  <div className={styles.detail_tab}>奖项级别:</div>
                  <ReadOnlyInput style={styles.input} value={detail.Grade} />
                </div>
                <div className={styles.detail}>
                  <div className={styles.detail_tab}>奖项等次:</div>
                  <ReadOnlyInput style={styles.input} value={detail.Prize} />
                </div>
                <div className={styles.detail}>
                  <div className={styles.detail_tab}>获奖时间:</div>
                  <ReadOnlyInput style={styles.input} value={detail.Time} type="date" />
                </div>
                <div className={styles.detail}>
                  <div className={styles.detail_tab}>奖项名称:</div>
                  <ReadOnlyInput style={styles.input} value={detail.Name} />
                </div>
              </div>
              <div className={styles.details_right}>
                <div className={styles.detail}>
                  <div className={styles.detail_tab}>奖项证明:</div>
                </div>
                <div className={styles.detail}>
                  {
                  detail.Img &&
                  <div className={styles.img_box}>
                    <img src={`data:image/jpg;base64,${detail.Img}`} className={styles.img} alt="预览图片" />
                  </div>
                }
                  {
                  !detail.Img &&
                  <div className={styles.img_box}>
                    <img src="../../../img/preview.svg" className={styles.img_preview} alt="预览图片" />
                  </div>
                }
                </div>
              </div>
            </div>
            <Button content="返&nbsp;&nbsp;回" myClassName={styles.button} myClick={() => loadData('学生奖励')} />
          </div>
          }
        </div>
      </Loading>
    </div>
  );
}

export default Student;
