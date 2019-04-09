import React, {Component} from 'react';
import SigninComponent from './SigninComponent';
import {connect} from "react-redux";
import {postUser} from "../redux/actions/postUser";
import {bindActionCreators} from "redux";

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
  onClick = () => {
    const { username, password } = this.state;
    const body = {
      username: username,
      password: password
    };
    this.props.postUser(body)
  };

  render(){
    const {textFields} = this.state;
    return <SigninComponent
      onClick={this.onClick}
      onChange={this.onChange}
      textFields={textFields}
    />
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    postUser
  }, dispatch);

export default connect(null, mapDispatchToProps)(SigninContainer);
