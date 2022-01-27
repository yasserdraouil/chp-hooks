import React from 'react';
import MovieCard from './MovieCard';

function MovieList({movies,searchTitle}){
    return(
        <div className="row">
        <>
            {movies.filter(el=>el.name.toLowerCase().includes(searchTitle.toLowerCase())).map((el) =>(
                <MovieCard key={el.id} movie={el}/>
            ))}
            
        </>
            
        </div>
    )
}

export default MovieList;