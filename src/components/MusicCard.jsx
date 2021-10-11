import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      checked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const { music } = this.props;
    this.setState({
      loading: true,
    });
    await addSong(music);
    this.setState({
      loading: false,
      checked: true,
    });
  }

  render() {
    const { music: { trackName, trackId, previewUrl } } = this.props;
    const { loading, checked } = this.state;

    return (
      (loading ? <Loading /> : (
        <div>
          <h4>{ trackName }</h4>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>
          <label htmlFor={ trackId }>
            Favorita
            <input
              type="checkbox"
              id={ trackId }
              data-testid={ `checkbox-music-${trackId}` }
              checked={ checked }
              onChange={ this.handleClick }
            />
          </label>
        </div>
      ))
    );
  }
}

MusicCard.propTypes = PropTypes.shape({
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
}).isRequired;

export default MusicCard;
