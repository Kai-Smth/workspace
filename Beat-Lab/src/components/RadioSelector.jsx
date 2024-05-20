import React, { useState } from 'react';

const RadioSelector = () => {
  const [selectedArtist, setSelectedArtist] = useState('');

  const handleArtistChange = (event) => {
    setSelectedArtist(event.target.value);
  };

  const handleTuneIn = () => {
    if (selectedArtist) {
      alert(`Now playing: ${selectedArtist} Radio`);
    } else {
      alert('Please select an artist to tune in.');
    }
  };

  return (
    <div>
      <h2>Maestro’s Frequency</h2>
      <div>
        <input
          type="radio"
          id="rod-wave"
          name="artist"
          value="Rod Wave"
          onChange={handleArtistChange}
        />
        <label htmlFor="rod-wave">Rod Wave</label>
      </div>
      <div>
        <input
          type="radio"
          id="brent"
          name="artist"
          value="Brent"
          onChange={handleArtistChange}
        />
        <label htmlFor="brent">Brent</label>
      </div>
      <div>
        <input
          type="radio"
          id="drake"
          name="artist"
          value="Drake"
          onChange={handleArtistChange}
        />
        <label htmlFor="drake">Drake</label>
      </div>
      <div>
        <input
          type="radio"
          id="sza"
          name="artist"
          value="SZA"
          onChange={handleArtistChange}
        />
        <label htmlFor="sza">SZA</label>
      </div>
      <button onClick={handleTuneIn}>Tune In</button>
    </div>
  );
};

export default RadioSelector;
