import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  constructor(props) {
    super(props);
    const { bookmarked } = props;
    this.state = {
      checked: bookmarked,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const { handleFavorites } = this.props;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    handleFavorites(target.checked, this.props);
  };

  render() {
    const { previewUrl, trackName, trackId } = this.props;
    const { checked } = this.state;

    return (
      <div>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ trackId } data-testid={ `checkbox-music-${trackId}` }>
          <input
            id={ trackId }
            name="checked"
            checked={ checked }
            type="checkbox"
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = PropTypes.shape({
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
}).isRequired;

export default MusicCard;
