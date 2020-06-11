import React, { useEffect, useState } from 'react';
import { listPosts } from './../../../services/posts';
import { addComment } from './../../../services/comment';
import Comment from './../../../components/Comment';
import './style.scss';

const PostList = () => {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [selectedKind, setSelectedKind] = useState('produtos');

  const handleKindSubmit = (event) => {
    event.preventDefault();
    setSelectedKind(event.target.name);
    listPosts(event.target.name).then((res) => setPosts(res));
  };

  const receiveComment = (message, postid) => {
    addComment({ message, userCreator: '5ee0eb371457bc1e5cf71e48', post: postid }).then(() => {
      posts.forEach((post) => {
        if (post._id === postid) {
          post.comment.push({ message });
        }
      });
      setPosts([...posts]);
    });
  };

  useEffect(() => {
    console.log('ola')
    setLoading(true);
    listPosts('produtos').then((res) => {
      setLoading(false);
      setPosts(res);
    });
  }, []);

  return (
    <div className="social-container">
      <div className="buttons-container">
        <button
          onClick={handleKindSubmit}
          name="produtos"
          className={selectedKind === 'produtos' && 'selected'}
        >
          Produtos
        </button>
        <div class="divider"></div>
        <button
          onClick={handleKindSubmit}
          name="doar"
          className={selectedKind === 'doar' && 'selected'}
        >
          Doando
        </button>
        <div class="divider"></div>
        <button
          onClick={handleKindSubmit}
          name="receber"
          className={selectedKind === 'receber' && 'selected'}
        >
          Recebendo
        </button>
      </div>
      <div class="posts">
        {isLoading ? (
          <small>loading...</small>
        ) : (
          posts.map((post) => {
            return (
              <div key={post._id} className="social-post">
                <div className="photo-name-post">
                  <img src={post.userCreator.avatar} alt="" className="user-image" />
                  <p className="post-creator">{post.userCreator.name}</p>
                </div>
                <img src={post.image} alt="" className="post-image" />
                <small>{post.kind}</small>
                <p className="post-description">{post.description}</p>
                {post.comment.map((comment) => {
                  return (
                  <div className="comment" key={comment._id}>
                    <p>{comment.message}</p>
                  </div>);
                })}
                <Comment receiveComment={receiveComment} postId={post._id} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default PostList;
