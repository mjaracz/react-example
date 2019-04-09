//@flow
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

type Props = {
  onChange(): void,
  onClickAddUser(): void
};

const InputStyle = {
  color: '#a1a1a1',
  borderTop: '#00a8ff',
  borderLeft: '#00a8ff',
  borderRight: '#00a8ff',
};


class AddUserComponent extends Component<Props> {
  render() {
    const {onChange, onClickAddUser} = this.props;
    return(
      <main className="main__form">
        <div>
          <TextField
            floatingLabelText="new username"
            inputStyle={InputStyle}
            name="username"
            onChange={onChange}
            className="main__input"
          />
          <TextField
            floatingLabelText="new name"
            inputStyle={InputStyle}
            name="name"
            onChange={onChange}
            className="main__input"
          />
          <TextField
            floatingLabelText="new email"
            inputStyle={InputStyle}
            name="email"
            onChange={onChange}
            className="main__input"
          />
          <TextField
            floatingLabelText="new website"
            inputStyle={InputStyle}
            name="website"
            onChange={onChange}
            className="main__input"
          />
          <FlatButton
            label="Add User"
            backgroundColor="#1c3b67"
            labelStyle={{ color: "#bbbbbb" }}
            style={{ marginTop: 25 }}
            className="main__button"
            onClick={onClickAddUser}
          />
        </div>
      </main>
    )
  }
}

export default AddUserComponent;
