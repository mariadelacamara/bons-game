import { create } from 'apisauce';

const api = create({
  baseURL: 'http://game.bons.me/api',
  headers: {},
  timeout: 10000,
});

export default api;
