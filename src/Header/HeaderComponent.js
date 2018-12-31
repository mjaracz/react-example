import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="header__container">
        <div className="header__flex header__flex1">
          <div className="header__img header__img1" />
          <div className="header__img header__img2" />
          <div className="header__img header__img3" />
        </div>
        <div className="header__flex header__flex2">
          <div className="header__img header__img4" />
          <div className="header__img header__img5" />
          <div className="header__img header__img6" />
        </div>
      </div>
    )
  }
}

export default HeaderComponent;
