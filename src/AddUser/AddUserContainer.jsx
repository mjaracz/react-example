// @flow
import React, { Component } from 'react';
import AddUserComponent from './AddUserComponent';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {postUser} from '../redux/actions/postUser';

import './AddUser.css';
import {Redirect} from "react-router-dom";

interface User {
  username: string,
  website: string,
  email: string,
  name: string
}

type Props = {
  postUser(body: User): User
}

class AddUserContainer extends Component<Props, User> {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      website: '',
      email: '',
      name: '',
      redirect: false
    }
  };
  onChange = (e) => {
    const name = e.target.attributes.name.value;
    const value = e.currentTarget.value;
    this.setState({
      [name]: value
    });
  };
  onClickAddUser = () => {
    const { username, name, email, website } = this.state;
    const data = {
      username: username,
      website: website,
      email: email,
      name: name
    };
    this.props.postUser(data);
    this.setState({
      redirect: true
    });
  };
  render() {
    const {redirect} = this.state;
    return (
      !redirect
        ? <AddUserComponent
            onChange={this.onChange}
            onClickAddUser={this.onClickAddUser}
          />
        : <Redirect to='/react-portfolio/users'/>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    postUser
  }, dispatch);

export default connect(null, mapDispatchToProps)(AddUserContainer);
