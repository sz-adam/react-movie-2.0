import React, { useContext, useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import axios from "axios";
import { DetailsContext } from '../context/DetailsContext';
import { DetailsModel } from './DetailsModel'
import '../styles/EyeFavoritesButton.css'

export default function EyeDetails({ movies, favorite }) {



  const { setDetails } = useContext(DetailsContext);
  const [openModel, setOpenModel] = useState(false);
  const [loading, setLoading] = useState(false);


  const toggleDetails = (imdbID) => {
    setLoading(true);
    axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
      .then(res => {
        setDetails(res.data);     
        setLoading(false);       
        setOpenModel(true);     
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <div className='eye-container'>
      <div className='loading-container'>
      {(loading && (movies && movies.imdbID))  ? (
          <div className="Loading">
            <p>Kérem várjon</p>
          </div>
        ) : null}
      </div>
      
      {openModel && !loading && <DetailsModel openModel={openModel} setOpenModel={setOpenModel} />}
      <button onClick={() => toggleDetails((movies && movies.imdbID) || (favorite && favorite.imdbID))}>
        <AiFillEye size={30} color='blue' />
      </button>
    </div>
  )
}
