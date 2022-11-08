import React, { Component } from 'react'

class Login extends Component {
  render() {
    const { handleInputCHange,
         state: {name, button, }, isFormValid } = this.props;
    return (
      <div data-testid="page-login" >Login
      <label htmlFor='login'>
        <input data-testid="login-name-input"
        type='text'
        name={name} 
        value={name}
        onChange={handleInputCHange}/>
      </label>

      <button data-testid="login-submit-button"
      type='button' button={button} disabled={!isFormValid} onChange={handleInputCHange}>Entrar</button>
      
      
      </div>
    )
  }
}

export default Login;