import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="v">
    <div>
      <img src={activeSong?.images?.coverart} />
    </div>
    <div>
      <p>
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
