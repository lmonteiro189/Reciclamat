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

const updateUser = (user) => {
  const form = new FormData();
  form.append('name', user.name);
  form.append('avatar', user.avatar);
  return baseUsersServices
    .patch(`/${user._id}`, form)
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { getUser, updateUser };
