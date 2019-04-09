import React from 'react';
import TextField from 'material-ui/TextField';

const InputStyle = {
  color: '#a1a1a1',
  borderTop: '#00a8ff',
  borderLeft: '#00a8ff',
  borderRight: '#00a8ff'
};

export const InputText = (props) => {
  return(
    <TextField
      floatingLabelText={props.value}
      className="main__input"
      onChange={props.onChange}
      name={props.value}
      type={props.value}
      inputStyle={InputStyle}
    />
  )
};
