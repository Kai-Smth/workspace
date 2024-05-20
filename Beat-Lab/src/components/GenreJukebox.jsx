import React, { useState } from 'react';

const GenreJukebox = () => {
  const [currentGenre, setCurrentGenre] = useState(null);

  const handleGenreClick = (genre) => {
    setCurrentGenre(genre);
  };

  const getArtistsForGenre = () => {
    switch (currentGenre) {
      case 'Rap':
        return ['Kendrick Lamar', 'J. Cole', 'Drake'];
      case 'R&B':
        return ['Usher', 'Beyoncé', 'Frank Ocean'];
      case 'Pop':
        return ['Ariana Grande', 'Taylor Swift', 'Ed Sheeran'];
      case 'Country':
        return ['Luke Bryan', 'Carrie Underwood', 'Blake Shelton'];
      default:
        return [];
    }
  };
  return (
    <div>
      <h2>Genre Jukebox</h2>
      <div>
        <button onClick={() => handleGenreClick('Rap')}>Rap</button>
        <button onClick={() => handleGenreClick('R&B')}>R&B</button>
        <button onClick={() => handleGenreClick('Pop')}>Pop</button>
        <button onClick={() => handleGenreClick('Country')}>Country</button>
      </div>
      {currentGenre && (
        <div>
          <h3>{currentGenre}</h3>
          <ul>
            {getArtistsForGenre().map((artist, index) => (
              <li key={index}>{artist}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GenreJukebox;
