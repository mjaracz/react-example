import React from 'react';
import TextField from 'material-ui/TextField';

const InputStyle = {
  color: '#a1a1a1',
  borderTop: '#00a8ff',
  borderLeft: '#00a8ff',
  borderRight: '#00a8ff'
};
const ErrorStyle = {
  color: "#959595"
};

export const InputText = (props) => {
  return(
    <TextField
      floatingLabelText={props.value}
      className="main__input"
      onChange={props.onChange}
      name={props.value}
      inputStyle={InputStyle}
    />
  )
};

export const InputTextError = (props) => {
  return(
    <TextField
      floatingLabelText={props.value}
      className="main__input"
      type={props.value}
      onChange={props.onChange}
      inputStyle={InputStyle}
      name={props.value}
      errorText={!props.correct ? "passwords fields, don't have matches" : null}
      errorStyle={ErrorStyle}
    />
  )
};

