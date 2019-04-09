//@flow
import React, { Component } from 'react';
import './Register.css';
import FlatButton from 'material-ui/FlatButton';
import {InputText} from '../textField';
import {InputTextError} from "../textField";

type Props = {
  onChange(): void,
  addUser(): void,
  correct: boolean,
  textFields: {value: string}[]
};



class RegisterComponent extends Component<Props> {
  render() {
    const { onChange, correct, addUser, textFields } = this.props;

    const inputs = textFields.map((field, index) => {
      if(field.value === 'password') {
        return <InputTextError key={index} value={field.value} onChange={onChange} correct={correct}/>
      }
      else {
        return <InputText key={index} value={field.value} onChange={onChange}/>
      }
    });
    return(
      <main className="main__form">
        <div>
          {inputs}
          <FlatButton
            label="join us !"
            backgroundColor="#1c3b67"
            className="main__button"
            style={{ marginTop: '15px' }}
            labelStyle={{ color: '#a1a1a1' }}
            onClick={addUser}
          />
        </div>
      </main>
    )
  }
}

export default RegisterComponent;
