import React, { Component } from 'react';
import AppBarContainer from './AppBar/AppBarContainer';
import HeaderComponent from './HeaderComponent';
import './Header.css';


class HeaderContainer extends Component {
  render() {
    return (
      <header>
        <HeaderComponent />
        <AppBarContainer />
      </header>
    )
  };
}

export default HeaderContainer;
