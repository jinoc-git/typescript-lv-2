import axios, { Axios } from 'axios';

const instance: Axios = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
});

export default instance;
