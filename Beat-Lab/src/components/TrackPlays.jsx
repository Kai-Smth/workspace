import React, { useState } from 'react';

const TrackPlays = () => {
  const [plays, setPlays] = useState(0);
  const trackTitle = "Street Runner"; // Track title can be dynamic based on user selection

  const handlePlay = () => {
    setPlays(plays + 1);
  };

  return (
    <div>
      <button onClick={handlePlay}>Play {trackTitle}</button>
      <p>Encored {trackTitle} {plays} times!</p>
    </div>
  );
};

export default TrackPlays;
