import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './AppBar.css';

class AppBarComponent extends Component {
  render() {
    const { sticky } = this.props;
    return (
      <nav className={sticky ? "header__appbar header__appbar--sticky" : "header__appbar"}>
        <li>
          <Link to="/" className="appbar__item">About</Link>
        </li>
        <li>
          <Link to="/users/" className="appbar__item">List of Users</Link>
        </li>
        <li>
          <Link to="/adduser/" className="appbar__item">Add new User</Link>
        </li>
        <li>
          <Link to="/signin" className="appbar__item">SignIn or Register</Link>
        </li>
      </nav>
    )
  }
}

export default AppBarComponent;
