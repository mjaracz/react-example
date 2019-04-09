import React, { Component } from 'react';
import SigninComponent from './SigninComponent';

class SigninContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      textFields: [
        {
          value: 'username'
        },
        {
          value: 'password'
        }
      ]
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render(){
    const {textFields} = this.state;
    return <SigninComponent
      onChange={this.onChange}
      textFields={textFields}
    />
  }
}

export default SigninContainer;
