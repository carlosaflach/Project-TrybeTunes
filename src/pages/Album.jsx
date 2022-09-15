import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from './Loading';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialLoading: true,
      albumName: false,
      fetchMusic: false,
      fetchFavorites: false,
      loading: true,
    };
    this.fetchFavorites = this.fetchFavorites.bind(this);
  }

  componentDidMount() {
    this.acessApiMusic();
    this.fetchFavorites();
  }

  handleFavorites = async (checked, obj) => {
    this.setState({ loading: true });
    await (checked ? addSong(obj) : removeSong(obj));
    this.fetchFavorites();
  }

  handleConditions = () => {
    const { albumName, fetchMusic, fetchFavorites, loading, favoriteSongs } = this.state;
    if (loading) return <Loading />;
    if (fetchMusic && fetchFavorites) {
      return (
        <div>
          <h3 data-testid="artist-name">{albumName[0].artistName}</h3>
          <h4 data-testid="album-name">{albumName[0].collectionName}</h4>
          {albumName.map(
            (music, index) => index !== 0 && (
              <MusicCard
                bookmarked={ favoriteSongs.some(
                  (fav) => fav.trackId === music.trackId,
                ) }
                key={ music.trackId }
                handleFavorites={ this.handleFavorites }
                previewUrl={ music.previewUrl }
                trackName={ music.trackName }
                trackId={ music.trackId }
              />
            ),
          )}
        </div>
      );
    }
  }

  async acessApiMusic() {
    const { match: { params: { id } } } = this.props;
    this.setState({
      loading: true,
    });
    const musicList = await getMusics(id);
    this.setState({
      initialLoading: false,
      albumName: musicList,
      fetchMusic: true,
      loading: false,
    });
  }

  async fetchFavorites() {
    this.setState({ loading: true });
    const favoriteSongs = await getFavoriteSongs();
    this.setState({
      favoriteSongs,
      loading: false,
      fetchFavorites: true,
    });
  }

  render() {
    const { initialLoading } = this.state;
    if (initialLoading) return <Loading />;
    return (
      <div data-testid="page-album">
        <Header />
        { this.handleConditions() }
      </div>
    );
  }
}

Album.propTypes = PropTypes.shape({
  match: { params: { id: PropTypes.number } },
}).isRequired;

export default Album;
