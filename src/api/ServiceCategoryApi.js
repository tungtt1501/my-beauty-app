import axiosClient from './axiosClient'

const ServiceCategoryApi = {
    getAll: (params) => {
        const url = '/service_category';
        return axiosClient.get(url, { params });
      },
}

export default ServiceCategoryApi;