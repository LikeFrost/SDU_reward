/* eslint-disable @iceworks/best-practices/no-http-url */
import { request } from 'ice';

export default {
  async addReward(props) {
    const formData = new FormData();
    formData.append('img', props.img);
    formData.append('tag', props.tag);
    formData.append('type', props.type);
    formData.append('name', props.name);
    formData.append('grade', props.grade);
    formData.append('prize', props.prize);
    formData.append('score', props.score);
    formData.append('time', props.time);
    return await request.post(
      '/reward',
      formData,
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
          'Content-Type': 'multipart/form-data',
        },
        transformRequest: (data, headers) => {
          return formData;
        },
      },
    );
  },
  async getReward(rewardId) {
    return await request.get(
      `/reward/${rewardId}`,
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
    );
  },
  async getRewardByTag(tag) {
    return await request.get(
        `/reward/byTag/${tag}`,
        { headers: {
          Authorization: sessionStorage.getItem('token'),
        } },
    );
  },
  async getAllReward() {
    return await request.get(
      '/reward',
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  },
  async getUserReward(uid) {
    return await request.get(
      `/reward/byUserId/${uid}`,
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  },
  async updateReward(props) {
    return await request.post(
        `/reward/${props.rewardId}`,
        { tag: props.tag, type: props.type, name: props.name, grade: props.grade, prize: props.prize, score: props.score, time: props.time, img: props.img },
        { headers: {
          Authorization: sessionStorage.getItem('token'),
        } },
    );
  },
  async deleteReward(rewardId) {
    return await request.delete(
        `/reward/${rewardId}`,
        { headers: {
          Authorization: sessionStorage.getItem('token'),
        } },
    );
  },
};
