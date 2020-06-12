import axios from 'axios';

const basePostsServices = axios.create({
  baseURL: '/api/posts'
});

const listPosts = (kind, materials) => {
  return basePostsServices
    .get('', { params: { kind, materials } })
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
  data.append('userCreator', post.userCreator);
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
};

const deletePost = (postId) => {
  return basePostsServices
    .delete(`/${postId}`)
    .then((res) => Promise.resolve(res.data))
    .catch((error) => Promise.reject(error));
};

export { listPosts, createPost, deletePost };
