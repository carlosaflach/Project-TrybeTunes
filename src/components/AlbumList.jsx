import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';

export default class Album extends Component {
  render() {
    const { albuns, artists } = this.props;
    return (
      <div>
        <p>
          Resultado de álbuns de:
          {' '}
          { artists }
        </p>
        {albuns.map((album) => (
          <AlbumCard key={ album.collectionId } album={ album } />
        ))}
      </div>
    );
  }
}

Album.propTypes = {
  albuns: PropTypes.arrayOf(PropTypes.object).isRequired,
  artists: PropTypes.string.isRequired,
};
