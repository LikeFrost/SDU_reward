import { request } from 'ice';

export default {
  async login(props) {
    return await request.post(`/user/login?id=${props.SDU_number}&&password=${props.password}`);
  },
  async updateUser(props) {
    return await request.post(`/user/updateuser/${props.id}?password=${props.password}&&name=${props.name}&&telephone=${props.telephone}`);
  },
  async getUser(id) {
    return await request.get(`/user/${id}`);
  },
};
