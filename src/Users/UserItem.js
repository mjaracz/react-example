// @flow
import React, { Component } from 'react';

type Props = {
  item: Object
}

class UserItem extends Component<Props> {
  render() {
    const {
      website, username,
      name, email, id
    } = this.props.item;
    const { deleteItem } = this.props;
    return(
      <li>
        <i className="fa fa-window-close" aria-hidden="true" data-id={id} onClick={e => deleteItem(e)}/>
        <ul>
          <li className="main__username">{username}</li>
          <li>{website}</li>
          <li>{email}</li>
          <li>{name}</li>
        </ul>
      </li>
    )
  }
}

export default UserItem;
