//@flow
import React, { Component } from 'react';
import './Register.css';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

type Props = {
  onChange: () => void,
  addUser: () => void,
  correct: boolean
}

class RegisterComponent extends Component<Props> {
  render() {
    const { onChange, correct, addUser } = this.props;
    return(
      <main className="main__form">
        <div>
          <TextField
            floatingLabelText="e-mail"
            onChange={onChange}
            className="main__input"
            name="email"
          />
          <TextField
            floatingLabelText="username"
            onChange={onChange}
            className="main__input"
            name="username"
          />
          <TextField
            floatingLabelText="name"
            onChange={onChange}
            className="main__input"
            name="name"
          />
          <TextField
            floatingLabelText="website"
            onChange={onChange}
            className="main__input"
            name="website"
          />
          <TextField
            floatingLabelText="password"
            onChange={onChange}
            type="password"
            className="main__input"
            name="password"
            errorText={!correct ? "password and re-password, don't have matches" : null}
            errorStyle={{color: "#959595"}}
          />
          <TextField
            floatingLabelText="re-password"
            onChange={onChange}
            type="password"
            className="main__input"
            name="rePassword"
            errorText={!correct ? "password and re-password, don't have matches" : null}
            errorStyle={{color: "#959595"}}
          />
          <FlatButton
            label="join us !"
            backgroundColor="#1c3b67"
            style={{marginTop: 25}}
            className="main__button"
            onClick={addUser}
          />
        </div>
      </main>
    )
  }
}

export default RegisterComponent;
