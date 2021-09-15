import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchInput } = this.state;
    const MIN_CHARC_LENGHT = 2; // 2 characters is the min length for the value of search input tag.
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
      </div>
    );
  }
}
