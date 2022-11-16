import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  state = {
    song: {},
    album: [],
  };

  componentDidMount() {
    this.validateMusic();
  }

  validateMusic = async () => {
    const { match: { params: { id } } } = this.props;
    const responseMusics = await getMusics(id);
    const spreadMusic = [...responseMusics];
    const firstMusic = spreadMusic.shift();
    console.log(firstMusic);
    this.setState({
      song: firstMusic,
      album: spreadMusic,
    });
  };

  render() {
    const { song, album } = this.state;
    return (
      <div data-testid="page-album">

        Album
        <Header />

        <h4 data-testid="album-name">{ song.collectionName }</h4>
        <h4 data-testid="artist-name">{ song.artistName }</h4>
        {
          album.map((music) => (
            <MusicCard
              key={ music.trackId }
              song={ music }
              trackName={ music.trackName }
              preview={ music.previewUrl }
              trackId={ music.trackId }

            />
          ))
        }
      </div>
    );
  }
}
Album.propTypes = {
  id: PropTypes.string.isRequired,
  match: PropTypes.arrayOf.isRequired,
  params: PropTypes.objectOf.isRequired,
};
export default Album;
