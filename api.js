import * as axios from 'axios';

const request = axios.create({
  baseURL: 'http://172.26.44.25:9090/api'
});

export const getFlags = async () => {
  const { data } = await request.get('/flags');
  console.log(data);
  return data;
};
