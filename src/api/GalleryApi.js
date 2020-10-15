import axiosClient from './axiosClient'
import * as Config from './../constants/Config'
import axios from 'axios';

const URL = '/gallery';

const axiosUploadClient = axios.create({
  baseURL: Config.UPLOAD_URL,
});

const GalleryApi = {
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
  },
  upload: (file) => {
    var formData = new FormData();
    formData.append('file', file.file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return axios.post(Config.UPLOAD_URL, formData, config);
  }
}

export default GalleryApi;