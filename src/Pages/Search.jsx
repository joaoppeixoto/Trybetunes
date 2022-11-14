import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      isDisabled: true,
    };
  }

  handleChange = (target) => {
    this.setState({ [target.name]: target.value,
    }, () => this.validateInput());
  };

  validateInput = () => {
    const { search } = this.state;
    const number = 2;
    const invalid = search.length < number;
    this.setState({
      isDisabled: invalid,
    });
  };

  render() {
    const { isDisabled, search } = this.state;
    return (
      <div data-testid="page-search">
        Search
        <Header />
        <form>
          <input
            type="text"
            data-testid="search-artist-input"
            placeholder="Digite o artista, ou música"
            name="search"
            value={ search }
            onChange={ ({ target }) => this.handleChange(target) }
          />

          <button
            data-testid="search-artist-button"
            type="submit"
            name="button"
            disabled={ isDisabled }
          >
            {' '}
            Pesquisar

          </button>
        </form>
      </div>
    );
  }
}
export default Search;
