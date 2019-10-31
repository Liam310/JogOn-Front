import * as axios from 'axios';

const request = axios.create({
  baseURL: 'http://172.26.44.58:3000/api'
});

export const getFlags = async () => {
  const { data } = await request.get('/flags');
  return data;
};

export const getRoutes = async () => {
  const {
    data: { routes }
  } = await request.get('/routes');
  return routes;
};
