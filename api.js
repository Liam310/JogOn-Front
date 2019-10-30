import * as axios from 'axios';

const request = axios.create({
  baseURL: 'http:FillThisIn/api'
});

export const getFlags = async () => {
  const { data } = await request.get('/flags');
  console.log(data);
  return data;
};
