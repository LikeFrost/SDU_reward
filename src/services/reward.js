/* eslint-disable @iceworks/best-practices/no-http-url */
import { request } from 'ice';

export default {
  async addReward(props) {
    return await request.post(
      'http://182.92.196.63:3000/v1/reward',
      { tag: props.tag, type: props.type, name: props.name, grade: props.grade, prize: props.prize, score: props.score, time: props.time, img: props.img },
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
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
