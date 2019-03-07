import React, {Component} from 'react';

import HeaderContainer from './Header/HeaderContainer';
import AboutComponent from './About/AboutComponent';
import SigninContainer from './Signin/SigninContainer';
import RegisterContainer from './Register/RegisterContainer';
import AddUserContainer from './AddUser/AddUserContainer';
import UsersContainer from './Users/UsersContainer';
import PageNotFoundComponent from './PageNotFound/PageNotFoundComponent';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <HeaderContainer/>
            <Switch>
              <Route exact path='/react-portfolio/' component={AboutComponent}/>
              <Route path='/react-portfolio/users/' component={UsersContainer}/>
              <Route path='/react-portfolio/signin/' component={SigninContainer}/>
              <Route path='/react-portfolio/register/' component={RegisterContainer}/>
              <Route path='/react-portfolio/adduser/' component={AddUserContainer}/>
              <Route component={PageNotFoundComponent}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
