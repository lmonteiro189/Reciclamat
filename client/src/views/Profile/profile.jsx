/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';
import { getUser } from '../../services/user';
import { deletePost } from '../../services/posts';
import glass from './../../images/glass.svg';
import metal from './../../images/aluminio.svg';
import wood from './../../images/madeira.svg';
import paper from './../../images/papel.svg';
import plastic from './../../images/plastico.svg';
import fabric from './../../images/pano.svg';
import { FaUserSecret } from 'react-icons/fa';

//CRIAR CONDICIONAL, SE OWNER, VER OPCAO DE EDITAR PERFIL.

const Profile = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [isOwner, setIsOwner] = useState(false);
  const [materials] = useState([
    { material: 'glass', image: glass },
    { material: 'paper', image: paper },
    { material: 'plastic', image: plastic },
    { material: 'metal', image: metal },
    { material: 'wood', image: wood },
    { material: 'fabric', image: fabric }
  ]);

  useEffect(() => {
    getUser(props.match.params.id).then((res) => {
      const posts = [...res.posts];
      res.posts = {
        doando: posts.filter((post) => post.kind === 'doar'),
        recebendo: posts.filter((post) => post.kind === 'receber')
      };
      console.log('OI', res);
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
      const postDonates = user.posts.doando.filter(
        (post) => post._id !== postId
      );
      const postReceive = user.posts.recebendo.filter(
        (post) => post._id !== postId
      );
      setUser({
        ...user,
        posts: { doando: postDonates, recebendo: postReceive }
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
          <div className="column">
          <h3>Doar</h3>
            <div className="all-items">
              {user.posts?.doando.map((post) => {
                return (
                  <div className="material-items">
                    <img
                      src={
                        materials.find(
                          (material) => material.material === post.material
                        ).image
                      }
                      className="material-image"
                    />
                    <p>{post.material}</p>
                    {true === true && (
                      <button
                        className="edit"
                        onClick={() => handleDeletePost(post._id)}
                      >
                        Donated
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="column">
            <h3>Receber</h3>
            <div className="all-items">
              {user.posts?.recebendo.map((post) => {
                return (
                  <div className="material-items">
                    <div className="image-and-material">
                      <img
                        src={
                          materials.find(
                            (material) => material.material === post.material
                          ).image
                        }
                        className="material-image"
                      />
                      <p>{post.material}</p>
                    </div>
                    {true === true && (
                      <button
                        className="edit"
                        onClick={() => handleDeletePost(post._id)}
                      >
                        Donated
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {/* <ul>
            {user.posts?.map((post) => {
              return (
                <>
                  <li key={post._id} />
                  <img
                    src={
                      materials.find(
                        (material) => material.material === post.material
                      ).image
                    } className="material-image"
                  />
                  <p>{post.material}</p>
                  <p>{post.kind}</p>
                  {isOwner && (
                    <button
                      className="edit"
                      onClick={() => handleDeletePost(post._id)}
                    >
                      Donated
                    </button>
                  )}
                </>
              );
            })}
          </ul> */}
        </div>
      </section>
    </div>
  );
};
export default Profile;
