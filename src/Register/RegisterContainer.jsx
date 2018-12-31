import React, { Component } from 'react';
import RegisterComponent from './RegisterComponent';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addUser } from "../redux/actions/dbActions";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      name: '',
      email: '',
      website: '',
      password: '',
      rePassword: '',
      correct: false
    }
  };

  onChange = e => {
    const name = e.target.attributes.name.value;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  exampleOfValidate = () => {
    const { password, rePassword } = this.state;
    if (password === rePassword) this.setState({correct: true});
    else this.setState({correct: false});
    console.log(this.state.correct);
  };
  addUser = () => {
    const { name, username, email, website, correct } = this.state;
    this.exampleOfValidate();
    const data = {
      name: name,
      username: username,
      email: email,
      website: website
    };
    if(correct) this.props.addUser(data);
  };

  render() {
    const { correct } = this.state;
    const { onChange, addUser } = this;
    return(
      <RegisterComponent
        onChange={onChange}
        correct={correct}
        addUser={addUser}
      />
    );
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addUser
  }, dispatch);

export default connect(null, mapDispatchToProps)(RegisterContainer);
