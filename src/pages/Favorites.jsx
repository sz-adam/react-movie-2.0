import React, { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext';
import FavoritesButton from '../components/FavoritesButton';
import EyeButtons from '../components/EyeButtons';

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);


  return (
    <div className="movie-container">
      <div className="movie">
        {favorites.map((favorite) => (
          <div key={favorite.imdbID} className="movie-card">
            <p className="title">{favorite.Title}</p>
            <div className="image-container">
              <img src={favorite.Poster} alt={favorite.Poster} className="poster" />
            </div>
            <p className="year">{favorite.Year}</p>
            <div className="moviebuttons">
              <FavoritesButton favorite={favorite} />             
              <EyeButtons favorite={favorite} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
