//@flow
import React, { Component } from 'react';
import UsersComponent from './UsersComponent';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getUsers} from '../redux/actions/getUsers';
import {deleteUser} from '../redux/actions/deleteUser';

import './Users.css';

type Props = {
  getUsers(): void,
  deleteUser(): void,
  isLoading: boolean,
  users: Object[]
}

class UsersContainer extends Component<Props> {
  onClickDelete = e => {
    e.preventDefault();
    const id = e.currentTarget.attributes[2].value;
    this.props.deleteUser(id);
    this.props.getUsers();
  };
  componentDidMount() {
    this.props.getUsers();
  };
  render() {
    const {users, isLoading} = this.props;
    return(
      <div>
        <UsersComponent
          users={users}
          isLoading={isLoading}
          deleteItem={this.onClickDelete}
        />
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  users: state.getUser.users,
  isLoading: state.getUser.isLoading,
  error: state.getUser.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getUsers,
    deleteUser
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
