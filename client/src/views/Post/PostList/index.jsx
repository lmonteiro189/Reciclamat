import React, { useEffect, useState } from 'react';
import { listPosts } from './../../../services/posts';
import { addComment } from './../../../services/comment';
import Comment from './../../../components/Comment';
import './style.scss';
import { Link } from 'react-router-dom';

const PostList = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [selectedKind, setSelectedKind] = useState('produtos');

  const handleKindSubmit = (event) => {
    event.preventDefault();
    setSelectedKind(event.target.name);
    listPosts(event.target.name).then((res) => setPosts(res));
  };

  const receiveComment = (message, postid) => {
    addComment({
      message,
      userCreator: props.loggedUser?._id,
      post: postid
    }).then(() => {
      posts.forEach((post) => {
        if (post._id === postid) {
          post.comment.push({ message, userCreator: props.loggedUser });
        }
      });
      setPosts([...posts]);
    });
  };

  useEffect(() => {
    setLoading(true);
    listPosts('produtos').then((res) => {
      setLoading(false);
      setPosts(res);
    });
  }, []);

  return (
    <div className="social-container">
      <div className="posts">
        {isLoading ? (
          <small>loading...</small>
        ) : (
          posts.map((post) => {
            return (
              <div key={post._id} className="social-post">
                <div className="photo-name-post">
                  <img
                    src={post.userCreator.avatar}
                    alt=""
                    className="user-image"
                  />
                  <p className="post-creator">
                    <Link to={`/profile/${post.userCreator._id}`}>
                      {post.userCreator.name}
                    </Link>
                  </p>
                </div>
                <img src={post.image} alt="" className="post-image" />
                <small>{post.kind}</small>
                <p className="post-description">{post.description}</p>
                {post.comment.map((comment) => {
                  return (
                    <div className="comment" key={comment._id}>
                      <img
                        src={comment.userCreator?.avatar}
                        alt=""
                        className="user-image"
                      />
                      <p>{comment.message}</p>
                    </div>
                  );
                })}
                {props.loggedUser && (
                  <Comment receiveComment={receiveComment} postId={post._id} />
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default PostList;
