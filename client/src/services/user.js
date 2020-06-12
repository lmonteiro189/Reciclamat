
import axios from 'axios';

const baseUsersServices = axios.create({
  baseURL: '/api/users'
});


const getUser = (userId) => {
  return baseUsersServices
    .get(`/${userId}`)
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export {getUser};
