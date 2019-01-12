//@flow
import React, { Component } from 'react';
import './SideCard.css';
import { Link } from 'react-router-dom';

type Props = {
  sideCard: () => void,
  menuClick: () => void
}

class SideCardComponent extends Component<Props> {
  render() {
    const { sideCard, menuClick } = this.props;
    return (
      <nav>
        <div className={ !sideCard ? "sidebar" : "sidebar sidebar--expanded" }>
          <i className="fa fa-window-close" aria-hidden="true" onClick={ menuClick }/>
          <li>
            <Link onClick={ menuClick } to="/">About</Link>
            <Link onClick={ menuClick } to="/users/" >Users</Link>
            <Link onClick={ menuClick } to="/signin/">SignIn or Register</Link>
          </li>
        </div>
        <div className="sidebar__menuIcon" onClick={ menuClick }>
          <div className="menuIcon__item menuIcon__item1" />
          <div className="menuIcon__item menuIcon__item2" />
          <div className="menuIcon__item menuIcon__item3" />
        </div>
      </nav>
    );
  }
}

export default SideCardComponent;
