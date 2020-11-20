import Request from '@/services/Request';

const API_URL = process.env.REACT_APP_API_URL;

export const saveUser = async user => {
  await Request.post('', user);
};

export const signUpUser = async user => {
  console.log('post user', user);

  const res = await Request.post(`${API_URL}/user/signup`, user);

  return res;
};
