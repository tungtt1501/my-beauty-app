import axiosClient from './axiosClient'

const URL = '/users';

const AuthApi = {
  login: (data) => {
    return axiosClient.post(URL, { data });
  },
}

export default AuthApi;