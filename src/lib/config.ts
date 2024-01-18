import axios from 'axios';
const BASE_URL = 'https://api.peykarjou.com/api/v1';

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default request;
