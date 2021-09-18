import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Album from './Album';
import Loading from './Loading';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      loading: false,
      albuns: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    this.setState({
      loading: true,
    });
    const { searchInput } = this.state;
    const responseApi = await searchAlbumsAPI(searchInput);
    this.setState({
      loading: false,
      albuns: responseApi,
    });
  }

  render() {
    const { searchInput, loading, albuns } = this.state;
    const MIN_CHARC_LENGHT = 2; // 2 characters is the min length for the value of search input tag.
    if (loading) return <Loading />;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="search">
            <input
              type="text"
              id="search"
              name="searchInput"
              onChange={ this.handleChange }
              data-testid="search-artist-input"
            />
            <button
              type="button"
              disabled={ searchInput.length < MIN_CHARC_LENGHT }
              data-testid="search-artist-button"
            >
              Procurar
            </button>
          </label>
        </form>
        {(albuns.length === 0) ? <h2>Nenhum álbum foi encontrado</h2>
          : <Album albuns={ albuns } artists={ searchInput } /> }
      </div>
    );
  }
}
