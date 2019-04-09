//@flow
import React, { Component } from 'react';
import './Signin.css';
import {InputText} from './textField';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

type Props = {
  onChange(): void,
  textFields: {value: string}[]
};


class SigninComponent extends Component<Props> {
  render() {
    const { onChange, textFields } = this.props;
    const inputs = textFields.map((field, index) => {
      return <InputText
        key={index}
        value={field.value}
        onChange={onChange}
      />
    });
    return(
      <main className="main__form">
        <div>
          {inputs}
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
