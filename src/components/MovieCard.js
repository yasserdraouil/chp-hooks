import React from 'react';
import ReactStars from 'react-stars'


function MovieCard({movie}){

    return(
        <div className="col-md-4 col-sm-6">
            <div className="card">
                <div className="card-header">
                        <img style={{maxWidth:'100%'}} src={img.images} />
                </div>
                <div className="card-body">
                        <h2>{movie.title}</h2>
                        <h6>{movie.description}</h6>
                        <ReactStars value={movie.rating}/>
                </div>

            </div>
        </div>
    )
} 

export default MovieCard;