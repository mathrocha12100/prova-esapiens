import axios from 'axios';

export const apiUrl = 'https://api.github.com';

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
