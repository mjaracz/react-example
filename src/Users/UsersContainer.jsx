import React, { Component } from 'react';
import UsersComponent from './UsersComponent';

import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { fetchUsers, deleteUser } from "../redux/actions/dbActions";

import './Users.css';

class UsersContainer extends Component {
  deleteItem = e => {
    e.isDefaultPrevented();
    const id = e.currentTarget.attributes[2].value;
    this.props.deleteUser(id);
    this.props.fetchUsers();
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users, isLoading } = this.props;
    const { deleteItem } = this;
    return(
      <div>
        <UsersComponent
          users={users}
          isLoading={isLoading}
          deleteItem={deleteItem}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.db.users,
  isLoading: state.db.isLoading,
  error: state.db.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchUsers,
    deleteUser
  }, dispatch);

export default connect( mapStateToProps, mapDispatchToProps )( UsersContainer );
