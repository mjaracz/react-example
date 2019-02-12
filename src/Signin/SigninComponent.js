//@flow
import React, { Component } from 'react';
import './Signin.css';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

type Props = {
  onUpdateInput: () => void
}

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
            name="email"
          />
          <TextField
            floatingLabelText="password"
            onChange={onUpdateInput}
            type="password"
            className="main__input"
            name="password"
          />
          <FlatButton label="Sign In" backgroundColor="#1c3b67" style={{ marginTop: 25 }} className="main__button"/>
          <Link to="/react-portfolio/register/" >Don't have account yet, register here.</Link>
        </div>
      </main>
    )
  }
}

export default SigninComponent;
