import React, { Component } from 'react';
import SigninComponent from './SigninComponent';

class SigninContainer extends Component {

  onUpdateInput = (e) => {
    console.log(e.target.value)
  };

  render(){
    return (
      <SigninComponent onUpdateInput={this.onUpdateInput}/>
    )
  }
}

export default SigninContainer;
