import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar';
import LandingPage from './views/LandingPage';
import PostList from './views/Post/PostList';
import PostCreate from './views/Post/PostCreate';
import Profile from './views/Profile/profile';
import Search from './views/Search/index';
import EditProfile from './views/Profile/EditProfile';
import './App.scss';
import AuthenticationSignUp from './views/Authentication/SignUp/sign-up';
import AuthenticationSignIn from './views/Authentication/SignIn/sign-in';
import ProtectedRoute from './components/Route-guard/protect-route';
import { loadAuthenticatedUser } from './services/authentication';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedUser: null,
      loaded: false
    };
  }

  updateUser = (user) => {
    this.setState({ loggedUser: user });
  };

  componentDidMount() {
    //checked with server if there was a logged in user
    loadAuthenticatedUser()
      .then((user) => {
        this.setState({ loggedUser: user, loaded: true });
      })
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state.loggedUser);
    return (
      <div className="App">
        {this.state.loaded && (
          <BrowserRouter>
            <Navbar loggedUser={this.state.loggedUser} {...this.props} />
            <Switch>
              <Route
                path="/signin"
                render={(props) => (
                  <AuthenticationSignIn
                    {...props}
                    updateUser={this.updateUser}
                  />
                )}
              />
              <Route
                path="/signup"
                render={(props) => (
                  <AuthenticationSignUp
                    {...props}
                    updateUser={this.updateUser}
                  />
                )}
              />
              <Route
                path="/signout"
                render={(props) => (
                  <LandingPage {...props} updateUser={this.updateUser} />
                )}
              />
              <Route
                path="/posts"
                render={(props) => <PostList {...props} loggedUser={this.state.loggedUser} />}
              />
              <ProtectedRoute
                path="/post/add"
                authorized={this.state.loggedUser}
                loggedUser={this.state}
                redirect={'/signup'}
                render={(props) => <PostCreate {...props} loggedUser={this.state.loggedUser} />}
              />
              <ProtectedRoute
                exact
                path="/profile/:id"
                authorized={this.state.loggedUser}
                redirect={'/signup'}
                render={(props) => (
                  <Profile {...props} loggedUser={this.state.loggedUser} />
                )}
              />
              <Route
                path="/search"
                redirect={'/signup'}
                render={(props) => <Search {...props} />}
              />
              <Route exact path="/" component={LandingPage} />

              <ProtectedRoute
                exact
                path="/profile/:id/edit"
                authorized={this.state.loggedUser}
                redirect={'/signup'}
                render={(props) => <EditProfile {...props} />}
              />
            </Switch>
          </BrowserRouter>
        )}
      </div>
    );
  }
}
export default App;
