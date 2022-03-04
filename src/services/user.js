import { request } from 'ice';

export default {
  async login(props) {
    return await request.post(`/user/login?id=${props.SDU_number}&&password=${props.password}`);
  },
};
