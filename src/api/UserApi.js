import axiosClient from './axiosClient'

const URL = '/user';

const UserApi = {
  getAll: (params) => {
    return axiosClient.get(URL, { params });
  },
  add: (data) => {
    return axiosClient.post(URL, data);
  },
  update: (data) => {
    return axiosClient.put(URL, data);
  },
  delete: (id) => {
    return axiosClient.delete(URL + `?id=${id}`);
  }
}

export default UserApi;