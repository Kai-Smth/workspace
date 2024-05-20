import React from 'react';

const Playlist = () => {
  const tracks = [
    { artist: 'Rod Wave', song: 'Street Runner' },
    { artist: 'Brent', song: 'Dead Man Walking' },
    { artist: 'Drake', song: 'Laugh Now Cry Later' },
    { artist: 'SZA', song: 'Good Days' }
  ];

  return (
    <div>
      <h2>My Chart-Toppers</h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>{`${track.artist}: ${track.song}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
