//@flow
import React, { Component } from 'react';
import RegisterComponent from './RegisterComponent';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postUser} from '../../redux/actions/postUser';


type State = {
  username: string,
  rePassword: string,
  password: string,
  name: string,
  email: string,
  website: string,
  correct: boolean
}

type Props = {
  postUser(): void
}

class RegisterContainer extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isPasswordCorrect: true,
      rePassword: '',
      password: '',
      username: '',
      website: '',
      email: '',
      name: '',
      texFields: [
        {
          value: 'username'
        },
        {
          value: 'email'
        },
        {
          value: 'website'
        },
        {
          value: 'password'
        },
        {
          value: 'password'
        }
      ]
    }
  };
  onChange = e => {
    const name = e.target.attributes.name.value;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  render() {
    const {texFields} = this.state;
    return(
      <RegisterComponent
        onChange={this.onChange}
        textFields={texFields}
      />
    );
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    postUser
  }, dispatch);


export default connect(null, mapDispatchToProps)(RegisterContainer);
