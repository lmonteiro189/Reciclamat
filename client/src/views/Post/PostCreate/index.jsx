import React, { useState } from 'react';
import SimpleMap from '../../../components/Map/SimpleMap';
import { createPost } from '../../../services/posts';
import PostProducts from './../../../components/CreateProducts';
import PostMaterials from './../../../components/Materials';
import './style.scss';
import { useEffect } from 'react';

const PostCreate = (props) => {
  const [formData, setFormData] = useState({
    image: null,
    location: [0, 0],
    kind: 'produtos'
  });

  useEffect(() => {console.log(props)}, [props])

  const handleFormData = (name, value) => {
    const data = { ...formData };
    console.log(name, value);
    setFormData({
      ...data,
      [name]: value
    });
  };

  const handleLocation = (lat, lng) => {
    const data = { ...formData };
    console.log(lat, lng);
    setFormData({
      ...data,
      location: [lat, lng]
    });
  };

  const handleMaterials = (material) => {
    const data = { ...formData };
    setFormData({
      ...data,
      material
    });
  };

  const handleType = (type) => {
    setFormData({
      ...formData,
      kind: type
    });
  };

  const handleSubmitForm = () => {
    createPost({ ...formData, userCreator: props.loggedUser });
  };

  return (
    <div className="post-create-container">
      <section className="button-section">
        <button
          className="post-add-buttons"
          onClick={() => handleType('produtos')}
        >
          Products
        </button>
        <button className="post-add-buttons" onClick={() => handleType('doar')}>
          Donate
        </button>
        <button
          className="post-add-buttons"
          onClick={() => handleType('receber')}
        >
          Receive
        </button>
      </section>
      <br />
      {formData.kind === 'produtos' ? (
        <PostProducts handleFormData={handleFormData} />
      ) : (
        <PostMaterials handleMaterials={handleMaterials} />
      )}

      <section className="location-container">
        <p>Select your location</p>

        <div className="map-container">
          <SimpleMap handleLocation={handleLocation} />
        </div>
      </section>

      <button className="post-button" onClick={handleSubmitForm}>
        Post
      </button>
    </div>
  );
};
export default PostCreate;
