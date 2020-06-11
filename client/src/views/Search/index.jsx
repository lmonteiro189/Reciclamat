import React, { Component } from 'react';
import './style.scss';

//ADD MAP BELOW (line 39 )IT'S COMMENTED OUT FOR NOW
import SimpleMap from './../../../src/components/Map/SimpleMap';
import { listPosts } from './../../services/posts';
import Materials from './../../components/Materials';

const Search = () => {
  const [posts, setPosts] = useState([]);
  const [kind, setKind] = useState('doar');
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    listPosts(kind, selectedMaterials)
      .then((response) => {
        console.log(response);
        setPosts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [kind, selectedMaterials]);

  const handleType = (type) => {
    setKind(type);
  };

  const handleMaterials = (materials) => {
    setSelectedMaterials(materials);
  };

  return (
    <div className="search-container">
      <section className="buttons-container">
        <button
          className={kind === 'doar' && 'selected'}
          onClick={() => handleType('doar')}
        >
          Donate
        </button>
        <div className="divider"></div>
        <button
          className={kind === 'receber' && 'selected'}
          onClick={() => handleType('receber')}
        >
          Receive
        </button>
      </section>
      <Materials multiple={true} handleMaterials={handleMaterials} />
      <div className="map-container">
        <SimpleMap />
      </div>
      {posts.map((post) => {
        console.log(post);
        return (
          <div className="post-box" key={post._id}>
            <img src={post.userCreator.avatar} alt="" />
            <div className="user-data">
              <strong>{post.userCreator.name}</strong>
              <p>{post.material}</p>
            </div>
          </div>
        );
      })}
      {/* <h1>Página Search</h1> */}
    </div>
  );
};
export default Search;
