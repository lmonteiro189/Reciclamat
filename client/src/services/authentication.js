import axios from 'axios';

const authenticationServer = axios.create({
  baseURL: '/api/authentication'
});

const signUp = (body) => {
  const form = new FormData();
  form.append('name', body.name);
  form.append('email', body.email);
  form.append('password', body.password);
  form.append('avatar', body.avatar);

  return authenticationServer
    .post('/sign-up', form)
    .then((response) => {
      console.log(response);
      const user = response.data.user;
      return Promise.resolve(user);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const signIn = (body) => {
  return authenticationServer
    .post('/sign-in', body)
    .then((response) => {
      console.log(response);
      const user = response.data.user;
      return Promise.resolve(user);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const signOut = () => {
  return authenticationServer
    .post('/sign-out')
    .then((response) => {
      return Promise.resolve();
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const loadAuthenticatedUser = () => {
  return authenticationServer
    .get('/me')
    .then((response) => {
      const user = response.data.user;
      return Promise.resolve(user);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { signUp, signIn, signOut, loadAuthenticatedUser };
