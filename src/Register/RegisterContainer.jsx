//@flow
import React, { Component } from 'react';
import RegisterComponent from './RegisterComponent';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addUser } from "../redux/actions/dbActions";

type State = {
  username: string,
  name: string,
  email: string,
  website: string,
  password: string,
  rePassword: string,
  correct: boolean
}

class RegisterContainer extends Component<null, State> {
  constructor(props) {
    super(props);

    this.state = {
      isPasswordCorrect: false,
      username: '',
      password: '',
      rePassword: '',
      website: '',
      email: '',
      name: ''
    }
  };

  onChange = e => {
    const name = e.target.attributes.name.value;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  validatePassword = () => {
    const { password, rePassword } = this.state;
    this.setState({ isPasswordCorrect: (password === rePassword)  });
    this.setState({ isPasswordCorrect: !(password !== rePassword) });
  };
  addUser = () => {
    const { name, username, email, website, isPasswordCorrect } = this.state;
    this.validatePassword();
    const data = {
      username: username,
      website: website,
      email: email,
      name: name
    };
    if(isPasswordCorrect) {
      this.props.addUser(data)
    }
  };

  render() {
    const { isPasswordCorrect } = this.state;
    return(
      <RegisterComponent
        onChange={this.onChange}
        addUser={this.addUser}
        correct={isPasswordCorrect}
      />
    );
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addUser
  }, dispatch);


export default connect(null, mapDispatchToProps)(RegisterContainer);
