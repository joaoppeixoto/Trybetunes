import React, { Component } from 'react';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      isDisabled: true,
    };
  }

  handleChange = (target) => {
    this.setState({ [target.name]: target.value,
    }, () => this.validateButton());
  };

  validateButton = () => {
    const { login } = this.state;
    const number = 3;
    const invalid = login.length < number;
    this.setState({
      isDisabled: invalid,
    });
  };

  //   redirectSearch = (event) => {
  //     event.preventDefault();
  //     const { history } = this.props;
  //     history.push('/search');
  //   }

  render() {
    const { login, isDisabled } = this.state;
    return (

      <div data-testid="page-login">
        Login
        <form onSubmit={ createUser }>
          <label htmlFor="login">
            <input
              data-testid="login-name-input"
              placeholder="Digite seu login"
              id="login"
              type="text"
              name="login"
              value={ login }
              onChange={ ({ target }) => this.handleChange(target) }
            />
          </label>

          <button
            data-testid="login-submit-button"
            type="submit"
            name="button"
            disabled={ isDisabled }
          >
            {' '}
            Entrar
          </button>

        </form>
      </div>
    );
  }
}

export default Login;
