import React, { Component } from 'react';
import SideCardComponent from './SideCardComponent';

class SideCardContainer extends Component {
  constructor() {
    super();
    this.state = {
      sideCard: false
    }
  }
  menuClick = () => {
    const { sideCard } = this.state;
    this.setState(() => ({
      sideCard: !sideCard
    }))
  };
  render() {
    const { sideCard } = this.state;
    const { menuClick } = this;
    return(
      <SideCardComponent
        sideCard={sideCard}
        menuClick={menuClick}
      />
    )
  }
}

export default SideCardContainer;
