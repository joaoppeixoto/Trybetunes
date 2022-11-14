import React, { Component } from 'react';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isDisabled: true,
      loading: true,
    };
  }

  handleChange = (target) => {
    this.setState({ [target.name]: target.value,
    }, () => this.validateButton());
  };

  validateButton = () => {
    const { name } = this.state;
    const number = 3;
    const invalid = name.length < number;
    this.setState({
      isDisabled: invalid,
    });
  };

  handleClick = async () => {
    const { name } = this.state;
    const { history} = this.props;
    this.setState({ loading: false });
    await createUser({ name });
    this.setState({ loading: true });
    history.push('/search');
  };

  render() {
    const { name, isDisabled, loading } = this.state;
    return (

      <div data-testid="page-login">
        Login
        <form>
          <label htmlFor="user">
            <input
              data-testid="login-name-input"
              placeholder="Digite seu login"
              id="user"
              type="text"
              name="name"
              value={ name }
              onChange={ ({ target }) => this.handleChange(target) }
            />
          </label>

          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ isDisabled }
            onClick={ this.handleClick }
          >
            {' '}
            Entrar
          </button>
          { !loading && <Loading />}
        </form>
      </div>
    );
  }
}

export default Login;
