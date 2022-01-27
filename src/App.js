import React,{useState} from 'react';

import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import AddMovies from './components/AddMovies';
import {MoviesData} from './components/MoviesData';

const App = () =>{
  const [movies, setMovies] = useState(MoviesData);
 const [searchTitle, setsearchTitle] = useState("")   
  return (
    
      <div className="container">
        <Header setsearchTitle={setsearchTitle} />
        <MovieList searchTitle={searchTitle} movies = {movies} />
        <AddMovies/>
      </div>

  );
}

export default App;