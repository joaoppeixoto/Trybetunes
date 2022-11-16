import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';
// teste
class MusicCard extends Component {
  state = {
    check: false,
    loading: false,
  };

  componentDidMount() {
    const { favorites, trackId } = this.props;
    const compairMusic = favorites.some((music) => music.trackId === trackId);
    if (compairMusic) {
      this.setState({ check: true });
    } else {
      this.setState({ check: false });
    }
  }

  handleChange = async ({ target }) => {
    const { song } = this.props;
    const { checked } = target;
    this.setState({ loading: true });
    await addSong(song);
    this.setState({ loading: false });
    if (checked) {
      this.setState({ check: true });
    } else {
      this.setState({ check: false });
      await removeSong(song);
    }
  };

  render() {
    const { check, loading } = this.state;
    const { trackId, preview, trackName } = this.props;
    return (
      <div>
        MusicCard
        { loading && <Loading />}
        <div>{trackName}</div>
        <audio
          data-testid="audio-component"
          src={ preview }
          controls
        >
          <track kind="captions" />
          <code>audio</code>
          .
        </audio>
        <label
          htmlFor={ `checkbox-music-${trackId}` }
          data-testid={ `checkbox-music-${trackId}` }
        >
          {' '}
          Favorita
          <input
            id={ `checkbox-music-${trackId}` }
            type="checkbox"
            checked={ check }
            onChange={ this.handleChange }

          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  song: PropTypes.arrayOf.isRequired,
  trackId: PropTypes.number.isRequired,
  trackName: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  favorites: PropTypes.arrayOf.isRequired,
};
export default MusicCard;
