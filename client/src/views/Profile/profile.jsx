/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';
import { getUser } from '../../services/user';
import { deletePost } from '../../services/posts';

//CRIAR CONDICIONAL, SE OWNER, VER OPCAO DE EDITAR PERFIL.

const Profile = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    getUser(props.match.params.id).then((res) => {
      console.log(res);
      setUser(res);
    });
  }, []);

  useEffect(() => {
    if (props.loggedUser) {
      setIsOwner(
        props.loggedUser._id.toString() == props.match.params.id.toString()
      );
    }
  }, [props]);

  function handleDeletePost(postId) {
    deletePost(postId).then(() => {
      setUser({
        ...user,
        posts: user.posts.filter((post) => post._id !== postId)
      });
    });
  }

  return (
    <div className="profile-container">
      <section className="box">
        <div className="user-data">
          <h6 className="user-name"> {user.name}</h6>
          <img className="user-avatar" src={user.avatar} />
          <small className="contact">Contact | {user.email}</small>
          {isOwner && <button className="edit">Edit Profile</button>}
        </div>
        <div className="user-posts">
          {user.posts?.map((post) => {
            return (
              <div className="post">
                <img src={post.image} />
                <p>{post.description}</p>
                {isOwner && <button className="edit" onClick={()=> handleDeletePost(post._id)}>Donated</button>}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Profile;
