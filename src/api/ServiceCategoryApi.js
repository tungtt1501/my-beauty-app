import axiosClient from './axiosClient'

const ServiceCategoryApi = {
  getAll: (params) => {
    const url = '/service_category';
    return axiosClient.get(url, { params });
  },
  add: (data) => {
    const url = '/service_category';
    return axiosClient.post(url, data);
  },
  update: (data) => {
    const url = '/service_category';
    return axiosClient.put(url, data);
  },
}

export default ServiceCategoryApi;