/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';

//CRIAR CONDICIONAL, SE OWNER, VER OPCAO DE EDITAR PERFIL.

const Profile = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const fetchData = () => {
    setLoading(true);
    axios
      .get('http://localhost:3010/api/users')
      .then((data) => {
        setData(data.data.user[0]);
        setLoading(false);
        console.log(data.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => fetchData(), []);

  return (
    <div className="profile-container">
      <section className="box">
        <div className="user-data">
          <h6 className="user-name"> {data.name}</h6>
          <div className="box-img">
            <img className="user-avatar" src={data.avatar} />
          </div>
          <small className="contact">Contact | {data.email}</small>
          <button className="edit">Edit Profile</button>
        </div>
        <p className="posts">Published </p>
      </section>
      {/* <p></p> */}
      {/* {isLoading ? ( */}
      {/* <small>loading...</small> */}
      {/* ) : ( */}
      {/* {data.user[0]} */}
      {/* map((user) => {
          return (
            <div className="box" key={user._id}>
              <img src={user.avatar} alt="" />
              <div>
                <h5>{user.name}</h5>
                <small>Contact: {user.email}</small>
                <button className="edit">Edit Profile</button>
              </div>
            </div>
          );
        })
      )}
      <div>
        <p>My items:</p> */}
      {/* <button className="delete">Delete</button> */}
      {/* </div> */}
    </div>
  );
};
export default Profile;
