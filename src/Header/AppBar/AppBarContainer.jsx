//@flow

import React, { Component } from 'react';
import AppBarComponent from './AppBarComponent';
import SideCardContainer from '../SideCard/SideCardContainer';
import MediaQuery from 'react-responsive';
import { imgHeight } from '../../redux/actions/userAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

type State = {
  sticky: boolean,
  height: number
};

type Props = {
  imgHeightValue: number,
  imgHeight(h: number): Object
};

class AppBarContainer extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false
    }
  }

  componentDidUpdate() {
    let height = document.querySelector('.header__img').clientHeight;
    this.props.imgHeight(height);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  };

  handleScroll = () => {
    const { imgHeightValue } = this.props;
    let scrollY = window.scrollY;
    if(scrollY > imgHeightValue + 100) {
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

const mapStateToProps = state => ({
  imgHeightValue: state.user.imgHeight
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        imgHeight
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppBarContainer);
