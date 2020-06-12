// 'use strict';

import React, { Component } from 'react';
import './editprofile.scss';
import { getUser, updateUser } from '../../services/user';
import Dropzone from '../../components/DropZone';
import { Form, Button } from 'react-bootstrap';
// import axios from 'axios';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        _id: '',
        name: '',
        email: '',
        avatar: ''
      }
    };
  }
  componentWillMount() {
    getUser(this.props.match.params.id).then((res) => {
      this.setState({
        user: {
          _id: res._id,
          name: res.name,
          email: res.email,
          avatar: res.avatar
        }
      });
    });
  }

  handleAvatarChange = (file) => {
    const user = { ...this.state.user };
    console.log(file);
    this.setState({
      user: { ...user, selectedFile: file }
    });
  };

  editUser = (event) => {
    event.preventDefault();
    console.log(this.state.user);
    const user = {
      _id: this.state.user._id,
      name: this.state.user.name,
      avatar: this.state.user.selectedFile
    };
    console.log(user);

    updateUser(user).then((res) =>
      this.props.history.push(`/profile/${this.state.user._id}`)
    );
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const user = { ...this.state.user, [name]: value };

    this.setState({
      user: user
    });
  };

  //   editProfile = (editedProfile) => {
  //     const getUserDetails = (userId) => {
  //       return getUser()
  //         .get(`/${userId}`)
  //         .then((res) => {
  //           this.setState(
  //             {
  //               id: res.data.id,
  //               name: res.data.name,
  //               avatar: res.data.avatar,
  //               email: res.data.email
  //             },
  //             () => console.log(this.state)
  //           );
  //           // return Promise.resolve(res.data);
  //         })
  //         .catch((error) => {
  //           return Promise.reject(error);
  //         });
  //     };
  //   };

  //   editProfile(editedProfile) {
  //     const getUserDetails = (userId) => {
  //       return getUser()
  //         .put(`/${userId}/${this.state.id}`)
  //         .then((res) => {
  //           this.setState(
  //             {
  //               id: res.data.id,
  //               name: res.data.name,
  //               avatar: res.data.avatar
  //             },
  //             () => console.log(this.state)
  //           );
  //           // return Promise.resolve(res.data);
  //         })
  //         .catch((error) => {
  //           return Promise.reject(error);
  //         });
  //     };
  //   }

  //   handleSubmit(e) {
  //     e.preventDefault();
  //     const editedProfile = {
  //       name: this.refs.name.value,
  //       avatar: this.refs.name.avatar,
  //       email: this.refs.name.email
  //     };
  //     this.editProfile(editedProfile);
  //   }

  //   handleChange(event) {
  //     const target = event.target;
  //     const value = target.value;
  //     const name = target.name;
  //     this.set.State({
  //       [name]: value
  //     });
  //   }

  render() {
    return (
      <div className="edit-profile-container">
        <h3>Edit profile</h3>
        <div className="user-data">
          <img className="user-avatar" src={this.state.user.avatar} />
          <small className="contact">{this.state.user.email}</small>
          {/* <button><Link to="/profile/edit/:id>Edit Profile</Link></button> */}
        </div>
        <Form onSubmit={this.editUser}>
          <Form.Group>
            <Dropzone onFileUploaded={this.handleAvatarChange} />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="name"
              name="name"
              id="name"
              value={this.state.user.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button id="button" size="md" block variant="primary" type="submit">
            Submit
          </Button>
        </Form>
       
      </div>
    );
  }
}

export default EditProfile;
