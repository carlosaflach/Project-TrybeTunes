import React, { Component } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumList from '../components/AlbumList';
import Loading from './Loading';
import Header from '../components/Header';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      artist: '',
      artistName: '',
      loading: false,
      albuns: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { artist } = this.state;
    this.setState({
      artistName: artist,
      loading: true,
    });
    const responseApi = await searchAlbumsAPI(artist);
    // this.search();
    this.setState({
      artist: '',
      loading: false,
      albuns: responseApi,
    });
  }

  search() {
    const { artistName, albuns } = this.state;
    return (
      <div>
        { albuns.length === 0 ? 'Nenhum álbum foi encontrado'
          : <AlbumList albuns={ albuns } artist={ artistName } /> }
      </div>
    );
  }

  render() {
    const { artist, loading } = this.state;
    const MIN_CHARC_LENGHT = 2; // 2 characters is the min length for the value of search input tag.
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="artist">
            <input
              type="text"
              id="search"
              value={ artist }
              name="artist"
              onChange={ this.handleChange }
              data-testid="search-artist-input"
            />
            <button
              type="button"
              disabled={ artist.length < MIN_CHARC_LENGHT }
              data-testid="search-artist-button"
              onClick={ this.handleClick }
            >
              Pesquisar
            </button>
          </label>
        </form>
        <div>
          { loading ? <Loading /> : this.search() }
        </div>
      </div>
    );
  }
}
