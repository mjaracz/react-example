import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import AppBarContainer from './AppBar/AppBarContainer';
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
