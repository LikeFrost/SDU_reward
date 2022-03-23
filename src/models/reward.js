import rewardService from '@/services/reward';

export default {
  state: {
    reward: [],
    detail: {},
  },
  reducers: {
    update(pre, now) {
      pre.reward = now;
    },
    updateDetail(pre, now) {
      pre.detail = now;
    },
  },
  effects: (dispatch) => ({
    async addReward(props) {
      const data = await rewardService.addReward(props);
      return (data);
    },
    async getReward(rewardId) {
      const data = await rewardService.getReward(rewardId);
      dispatch.reward.updateDetail(data.reward);
      return data;
    },
    async getRewardByTag(tag) {
      const data = await rewardService.getRewardByTag(tag);
      dispatch.reward.update(data.reward);
    },
    async getAllReward() {
      const data = await rewardService.getAllReward();
      dispatch.reward.update(data.reward);
      return data.code;
    },
    async getUserReward(uid) {
      const data = await rewardService.getUserReward(uid);
      dispatch.reward.update(data.reward);
      return data.code;
    },
    async deleteReward(rewardId) {
      const data = await rewardService.deleteReward(rewardId);
      return data;
    },
  }),
};
