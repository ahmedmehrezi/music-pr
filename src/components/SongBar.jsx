import React from 'react';
import { Link } from 'react-router-dom';
import '../components/style.css'
import PlayPause from './PlayPause';

const SongBar = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className={`flex it ${activeSong?.title === song?.title ?'' : ''} `}>
    <h3 className="id">{i + 1}.</h3>
    <div className="ff">
      <img
        src={artistId ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : song?.images?.coverart}
        alt={song?.title}
      />
      <div className="flex mx">
        {!artistId ? (
          <Link to={`/songs/${song.key}`}>
            <p className="tx ">
              {song?.title}
            </p>
          </Link>
        ) : (
          <p className="tx">
            {song?.attributes?.name}
          </p>
        )}
        <p >
          {artistId ? song?.attributes?.albumName : song?.subtitle}
        </p>
      </div>
    </div>
    {!artistId
      ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, i)}
        />
      )
      : null}
  </div>
);

export default SongBar;