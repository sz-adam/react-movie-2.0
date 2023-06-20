import React, { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext';
import { BsHeartFill } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import '../styles/EyeFavoritesButton.css'
export default function FavoritesButton({ movies, favorite }) {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  function handleAddToFavorites(favoritesMovie) {
    const favoriteList = [...favorites, favoritesMovie]
    setFavorites(favoriteList);
  }

  function handleRemoveFromFavorites(favoritesMovie) {
    const deleteFavorite = favorites.filter(
      (favMovie) => favMovie.imdbID !== favoritesMovie.imdbID);
    setFavorites(deleteFavorite)
  }

  return (
    <div>
      <>
        {favorites.some((favMovie) => favMovie.imdbID === (movies?.imdbID || favorite?.imdbID)) ? (
          <button onClick={() => handleRemoveFromFavorites(movies || favorite)} className="favorite-button">
            <BsHeartFill size={30} color="red" />
          </button>
        ) : (
          <button onClick={() => handleAddToFavorites(movies || favorite)} className="favorite-button">
            <BsHeart size={30} color="red" />
          </button>
        )}

      </>
    </div>
  )
}
