//@flow

import React, { Component } from 'react';
import AppBarComponent from './AppBarComponent';
import SideCardContainer from '../SideCard/SideCardContainer';
import MediaQuery from 'react-responsive';

type State = {
  sticky: boolean
};


class AppBarContainer extends Component<null, State> {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  };
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  };
  handleScroll = () => {
    let height = document.querySelector('.header__img').clientHeight;
    let scrollY = window.scrollY;
    if(scrollY > height + 100) {
      this.setState({
        sticky: true
      });
    }
    else {
      this.setState({
        sticky: false
      })
    }
  };

  render() {
    const {sticky} = this.state;
    return(
      <div>
        <AppBarComponent
          sticky={sticky}
        />
        <MediaQuery maxDeviceWidth={720}>
          <SideCardContainer />
        </MediaQuery>
      </div>
    )
  }
}


export default AppBarContainer;
