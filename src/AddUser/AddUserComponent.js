//@flow
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

type Props = {
  onChange: () => void
  addUser: () => void
}

class AddUserComponent extends Component<Props> {
  render() {
    const { onChange, addUser } = this.props;
    return(
      <main className="main__form">
        <div>
          <TextField
            floatingLabelText="new username"
            name="username"
            onChange={onChange}
            className="main__input"
          />
          <TextField
            floatingLabelText="new name"
            name="name"
            onChange={onChange}
            className="main__input"
          />
          <TextField
            floatingLabelText="new email"
            name="email"
            onChange={onChange}
            className="main__input"
          />
          <TextField
            floatingLabelText="new website"
            name="website"
            onChange={onChange}
            className="main__input"
          />
          <FlatButton
            label="Add User"
            backgroundColor="#1c3b67"
            style={{marginTop: 25}}
            className="main__button"
            onClick={ addUser }
          />
        </div>
      </main>
    )
  }
}

export default AddUserComponent;
