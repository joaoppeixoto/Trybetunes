import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      isDisabled: true,
      getValueAPI: [],
      loading: false,
      saveSearch: '',
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

  handleClick = async () => {
    const { search } = this.state;
    this.setState({ loading: true, saveSearch: search });
    const response = await searchAlbumsAPI(search);
    console.log(response);
    this.setState({ getValueAPI: response, search: '', loading: false });
  };

  render() {
    const { isDisabled, search, getValueAPI, loading, saveSearch } = this.state;
    return (
      <div data-testid="page-search">
        Search
        <Header />
        { loading ? <Loading /> : (
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
              onClick={ this.handleClick }
            >
              {' '}
              Pesquisar

            </button>
            <div>
              {`Resultado de álbuns de: ${saveSearch}`}
            </div>
            { getValueAPI.length === 0 ? <h4>Nenhum álbum foi encontrado</h4>
              : (getValueAPI.map((album) => (
                <Link
                  to={ `/album/${album.collectionId}` }
                  data-testid={ `link-to-album-${album.collectionId}` }
                  key={ album.artistId }
                >
                  <img src={ album.artworkUrl100 } alt={ album.collectionId } />
                  <div>{ album.collectionName}</div>
                  <div>{ album.artistName}</div>
                </Link>
              )))}
          </form>

        ) }

      </div>
    );
  }
}
export default Search;
