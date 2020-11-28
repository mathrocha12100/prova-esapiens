import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.api-football.com/demo/v2',
});

export default api;
