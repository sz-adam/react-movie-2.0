import { useContext } from 'react';
import React from 'react';
import { DetailsContext } from '../context/DetailsContext';
import '../styles/DetailsModel.css'

export const DetailsModel = ({ openModel, setOpenModel }) => {
  const { details } = useContext(DetailsContext);
  return (
    <div className='modalContainer'>
      <div className='ModalWrapper'>
        <div className='ModalImageContainer'>
          <img className='ModalImg' src={details.Poster} alt={details.Poster} />
        </div>
        <div className='ModalContent'>
          <h1 className='ModalTitle'>{details.Title}</h1>
          <p className='ModalSubtitle'>{details.Year} | {details.Runtime} | {details.Genre}</p>
          <p>Type:{details.Type}</p>
          <p className='ModalDescription'>{details.Plot}</p>
          <p className='ModalInfo'>Directed by {details.Director}</p>
          <p className='ModalInfo'>Starring {details.Actors}</p>
          {details.Ratings && details.Ratings[0] && <p className='ModalInfo'><box-icon type='solid' name='star' color='yellow'></box-icon> {details.Ratings[0].Value}</p>}


          <button className='ModalButton' onClick={() => setOpenModel(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};