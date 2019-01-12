//@flow
import React, { Component } from 'react';
import AppBarComponent from './AppBarComponent';
import SideCardContainer from '../SideCard/SideCardContainer';
import MediaQuery from 'react-responsive';

type State = {
  sideCard: boolean,
  sticky: boolean
}

class AppBarContainer extends Component<null, State> {
  constructor(props) {
    super(props);

    this.state = {
      sideCard: false,
      sticky: false
    }
  }

  menuClick = () => {
    this.setState({
      sideCard: !this.state.sideCard
    })
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  };
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  };

  handleScroll = () => {
    let height = window.innerHeight;
    let scrollY = window.scrollY;
    if(scrollY >= height) {
      this.setState({
        sticky: true
      })
    }
    else {
      this.setState({
        sticky: false
      })
    }
  };

  render() {
    const { 
      sticky,
    } = this.state;

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


export default AppBarContainer
