import axios from 'axios';
// import Comment from './../../src/components/Comment';

const baseCommentServices = axios.create({
  baseURL: '/api/comment'
});

const addComment = (comment) => {
  return new Promise((resolve, reject) => {
    baseCommentServices
      .post('/', comment)
      .then((response) => {
        resolve(response);
      })
      .catch(reject);
  });
};

export { addComment };
