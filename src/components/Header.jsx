
import '../styles/Header.css'
import {Link} from 'react-router-dom'

import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
export default function Header({menu}){ 
    const { favorites, setFavorites } = useContext(FavoritesContext);
    return (
        <div className="navbar">
            <div className="navbar-left"><p className='omdb'>Movie</p> <p className='omovie'>Data</p> </div>
            <div className="navbar-right">
               {menu.filter(e=>e.menubar ===true).map(element => <Link key={element.path} to={element.path}>{element.name} 
                {element.path==="/favorites" && favorites.length > 0 && <> ({favorites.length})</>}               
               </Link>)}   
            </div>
        </div>
    )
}