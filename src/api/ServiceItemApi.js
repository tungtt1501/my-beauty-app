import axiosClient from './axiosClient'

const ServiceItemApi = {
    getAll: (params) => {
        const url = '/service_items';
        return axiosClient.get(url, { params });
      },
}

export default ServiceItemApi;