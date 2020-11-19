import Request from '@/services/Request';

export const saveUser = async user => {
  await Request.post(user);
};
