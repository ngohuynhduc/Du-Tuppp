import axios from 'axios';

const createAxios = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {
    key: 'AIzaSyC4yTO0nF1AVXZvkKwhj6x-kq2qEywjI5c',
  },
  responseType: 'json',
});
axios.interceptors.request.use(
  (request) => {
    // Edit request config
    return request;
  },
  (error) => {
    // console.log(error)
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    // console.log(response);
    // Edit response config
    return response;
  },
  (error) => {
    // console.log(error);
    return Promise.reject(error);
  },
);
export default createAxios;
