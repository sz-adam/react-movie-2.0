import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/Movie.css'
import FavoritesButton from "../components/FavoritesButton";
import EyeButtons from "../components/EyeButtons";


export default function Movie() {


    
    const [list, setList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`)
            .then(res => {
                if (res.data.Search) {
                    setList(res.data.Search)
                } else {
                    setList([])
                }
            })
            .catch(error => {
                setList([])
            })
    }, [searchTerm])



    return (
        <div className="movie-container">
            <div className="input-container">
                <input type="text" placeholder="Keressen egy filmet ..." value={searchTerm} onChange={handleSearch} />
            </div>
            <div className="movie">
                {list.map((movies) => (
                    <div key={movies.imdbID} className="movie-card">
                        <p className="title">{movies.Title}</p>
                        <div className="image-container">
                            <img src={movies.Poster} alt={movies.Poster} className="poster" />
                        </div>
                        <p className="year">{movies.Year}</p>
                        <div className="moviebuttons">
                            <FavoritesButton movies={movies} />
                            <EyeButtons movies={movies} />
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}