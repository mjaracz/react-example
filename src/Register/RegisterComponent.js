//@flow
import React, { Component } from 'react';
import './Register.css';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

type Props = {
  onChange: () => void,
  addUser: () => void,
  correct: boolean
};

const InputStyle = {
  color: '#a1a1a1',
  borderTop: 'none #00a8ff',
  borderLeft: 'none #00a8ff',
  borderRight: 'none #00a8ff'
};


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
            inputStyle={InputStyle}
            name="email"
          />
          <TextField
            floatingLabelText="username"
            onChange={onChange}
            className="main__input"
            name="username"
            inputStyle={InputStyle}
          />
          <TextField
            floatingLabelText="name"
            onChange={onChange}
            className="main__input"
            inputStyle={InputStyle}
            name="name"
          />
          <TextField
            floatingLabelText="website"
            onChange={onChange}
            className="main__input"
            name="website"
            inputStyle={InputStyle}
          />
          <TextField
            floatingLabelText="password"
            type="password"
            className="main__input"
            name="password"
            inputStyle={InputStyle}
            onChange={onChange}
            errorText={!correct ? "password and re-password, don't have matches" : null}
            errorStyle={{color: "#959595"}}
          />
          <TextField
            floatingLabelText="re-password"
            className="main__input"
            type="password"
            onChange={onChange}
            inputStyle={InputStyle}
            name="rePassword"
            errorText={!correct ? "password and re-password, don't have matches" : null}
            errorStyle={{color: "#959595"}}
          />
          <FlatButton
            label="join us !"
            backgroundColor="#1c3b67"
            className="main__button"
            style={{ marginTop: '15px' }}
            labelStyle={{ color: '#a1a1a1' }}
            onClick={ addUser }
          />
        </div>
      </main>
    )
  }
}

export default RegisterComponent;
