import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar';
import LandingPage from './views/LandingPage';
import PostList from './views/Post/PostList';
import PostCreate from './views/Post/PostCreate';
import Profile from './views/Profile/profile';
import Search from './views/Search/index';
// import SimpleMap from './components/SimpleMap';
import './App.scss';
import AuthenticationSignUp from './views/Authentication/SignUp/sign-up';
import AuthenticationSignIn from './views/Authentication/SignIn/sign-in';

import { loadAuthenticatedUser } from './services/authentication';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedUser: null
    };
  }

  updateUser = (user) => {
    this.setState({ loggedUser: user });
  };

  componentDidMount() {
    //checked with server if there was a logged in user
    loadAuthenticatedUser()
      .then((user) => {
        this.setState({ loggedUser: user });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route
              path="/signin"
              render={(props) => <AuthenticationSignIn {...props} updateUser={this.updateUser} />}
            />
            <Route
              path="/signup"
              render={(props) => <AuthenticationSignUp {...props} updateUser={this.updateUser} />}
            />
            <Route exact path="/posts" component={PostList} />
            <Route exact path="/post/add" component={PostCreate} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
