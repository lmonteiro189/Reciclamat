// 'use strict';

// import React, { Component } from 'react';
// import './style.scss';
// import { getUser } from '../../services/user';
// import axios from 'axios';

// class EditProfile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: '',
//       name: '',
//       avatar: ''
//     };
//   }
//   componentWillMount() {
//     this.getUserDetails();
//   }
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

//   render() {
//     return (
//       <div>
//         <br />
//         <h3>Edit profile</h3>
//         <form onSubmit={this.handleSubmit}>
//           <div className="name-input">
//             <input
//               type="text"
//               name="name "
//               ref="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//             <label htmlFor="name">Name</label>
//           </div>
//           <div className="avatar-input">
//             <input
//               type="file"
//               name="avatar "
//               ref="avatar"
//               value={this.state.avatar}
//               onChange={this.handleChange}
//             />
//             <label htmlFor="avatar">Change profile image</label>
//           </div>
//           <div className="email-input">
//             <input
//               type="text"
//               name="email "
//               ref="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//             <label htmlFor="">email</label>
//           </div>
//           <input type="submit" value="save" className="btn" />
//         </form>
//       </div>
//     );
//   }
// }

// export default EditProfile;
