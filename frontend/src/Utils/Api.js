import axios from 'axios';

const Api = axios.create({
    baseURL: process.env.REACT_APP_NOT_SECRET_CODE,
});

export default Api;
