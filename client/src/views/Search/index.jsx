import React, { Component } from 'react';
import './style.scss';

//ADD MAP BELOW (line 39 )IT'S COMMENTED OUT FOR NOW
import SimpleMap from './../../../src/components/Map/SimpleMap';
import { listPosts } from './../../services/posts';
import './style.scss';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.fetchPostData();
  }

  fetchPostData() {
    listPosts()
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const postList = this.state.posts;
    return (
      <div>
        <h3>Posts related to search</h3>

        {/* <SimpleMap /> */}
        {postList.map((post) => {
          return (
            <div className="post-box" key={post._id}>
              <img src={post.image} alt="" />
              <p>
                <strong>{post.userCreator.name}</strong>
              </p>
              <p>{post.description}</p>
            </div>
          );
        })}
        {/* <h1>Página Search</h1> */}
      </div>
    );
  }
}
export default Search;
