import React, { Component } from 'react';

import HeaderContainer from './Header/HeaderContainer';
import AboutComponent from './About/AboutComponent';
import SigninContainer from './Signin/SigninContainer';
import RegisterContainer from './Register/RegisterContainer';
import AddUserContainer from './AddUser/AddUserContainer';
import UsersContainer from './Users/UsersContainer';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderContainer/>
          <Route exact path='/' component={ AboutComponent } />
          <Route path='/users/' component={ UsersContainer } />
          <Route path='/signin/' component={ SigninContainer } />
          <Route path='/register/' component={ RegisterContainer } />
          <Route path='/adduser/' component={ AddUserContainer } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
