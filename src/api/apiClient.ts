import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://172.20.10.5:3001/api/',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});