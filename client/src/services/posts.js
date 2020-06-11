import axios from 'axios';

const basePostsServices = axios.create({
  baseURL: 'http://localhost:3010/api/posts'
});

const listPosts = (kind) => {
  return basePostsServices
    .get('', { params: { kind } })
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const createPost = (post) => {
  const data = new FormData();
  if (post.description) {
    data.append('description', post.description);
  }
  if (post.image) {
    data.append('image', post.image);
  }
  if (post.material) {
    data.append('material', post.material);
  }
  data.append('kind', post.kind);
  data.append('userCreator', '5edf6ebef58e6848f4c3a0e8');
  data.append('location', post.location.join(','));


  return basePostsServices
    .post('', data)
    .then((res) => {
      console.log(res);
      return Promise.resolve(res.data);
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });

  /*

  kind:produtos
  material:aluminum
  description:post test 2
  userCreator:5edf6ebef58e6848f4c3a0e8
  location:30, -9
  */
};

export { listPosts, createPost };
