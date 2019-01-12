// @flow
import React, { Component } from 'react';
import AddUserComponent from './AddUserComponent';

import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { addUser }from '../redux/actions/dbActions';

import './AddUser.css';

interface User {
  username: string,
  name: string,
  email: string,
  website: string
}

type Props = {
  user: User,
  addUser(body: User): User
}

class AddUserContainer extends Component<Props, User> {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      name: '',
      email: '',
      website: ''
    }
  };
  onChange = (e) => {
    const name = e.target.attributes.name.value;
    const value = e.currentTarget.value;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };
  addUser = () => {
    const { username, name, email, website } = this.state;
    const data = {
      username: username,
      name: name,
      email: email,
      website: website
    };

    this.props.addUser(data);
  };

  render() {
    const { onChange, addUser } = this;
    return(
      <AddUserComponent onChange={ onChange } addUser={ addUser }/>
    )
  }
}

const mapStateToProps = state => ({
  user: state.db.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addUser
  }, dispatch);

export default connect( mapStateToProps , mapDispatchToProps )( AddUserContainer );
