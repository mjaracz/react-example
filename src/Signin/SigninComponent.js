//@flow
import React, { Component } from 'react';
import './Signin.css';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

type Props = {
  onUpdateInput: () => void
};

const InputStyle = {
  color: '#a1a1a1',
  borderTopColor: '#00a8ff',
  borderLeftColor: '#00a8ff',
  borderRightColor: '#00a8ff'
};


class SigninComponent extends Component<Props> {
  render() {
    const { onUpdateInput } = this.props;
    return(
      <main className="main__form">
        <div>
          <TextField
            floatingLabelText="username or email"
            onChange={onUpdateInput}
            className="main__input"
            floatingLabelFocusStyle={{ color: '#00a8ff' }}
            inputStyle={InputStyle}
            name="email"
          />
          <TextField
            floatingLabelText="password"
            type="password"
            className="main__input"
            floatingLabelFocusStyle={{ color: '#00a8ff' }}
            onChange={onUpdateInput}
            inputStyle={InputStyle}
            name="password"
          />
          <FlatButton
            label="Sign In"
            labelStyle={{ color: '#a1a1a1' }} backgroundColor="#1c3b67"
            style={{ marginTop: '25px' }} className="main__button"
          />
          <Link to="/react-portfolio/register/" className={"form__link"} >Don't have account yet, register here.</Link>
        </div>
      </main>
    )
  }
}

export default SigninComponent;
