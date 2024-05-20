import React from 'react';

const SongRequestBell = () => {
  const handleClick = () => {
    alert('Song requested!');
  };

  return (
    <div>
      <button onClick={handleClick}>Request a Song</button>
    </div>
  );
};

export default SongRequestBell;
