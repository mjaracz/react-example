//@flow
import React, { Component } from 'react';
import './Register.css';
import FlatButton from 'material-ui/FlatButton';
import {InputText} from '../textField';

type Props = {
  onChange(): void,
  textFields: {value: string}[]
};

class RegisterComponent extends Component<Props> {
  render() {
    const { onChange, textFields } = this.props;

    const inputs = textFields.map((field, index) => {
      return <InputText key={index} value={field.value} onChange={onChange}/>
    });
    return(
      <main className="main__form">
        <div>
          {inputs}
          <FlatButton
            label="join us !"
            backgroundColor="#1c3b67"
            className="main__button"
            style={{marginTop: '15px'}}
            labelStyle={{color: '#a1a1a1'}}
          />
        </div>
      </main>
    )
  }
}

export default RegisterComponent;
