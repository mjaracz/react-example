import React, { Component } from 'react';
import UserItem from './UserItem';
import CircularProgress from 'material-ui/CircularProgress';


class UsersComponent extends Component {
  render() {
    const { users, isLoading, deleteItem } = this.props;
    const items = users.map((item, index) =>
      <UserItem
        key={index}
        item={item}
        deleteItem={deleteItem}
      />
    );
    return(
      <ul>
        {isLoading ?
          <CircularProgress
            thickness={7}
            size={70}
            color="#F57F17"
            style={{margin: 55}}
          />
          : items}
      </ul>
    )
  }
}

export default UsersComponent;
