import axiosInstance from 'axios';

const instance = axiosInstance.create({
    baseURL : 'http://localhost:8081/api'
});

export default instance;