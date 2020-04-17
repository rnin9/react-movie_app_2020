import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

//state 필요없으면 걍 function으로 만들기.

function Movie({year ,title, summary, poster, genres}){
    return( 
    <div className="movie">
        <img src={poster} alt={title}/>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre,index)=><li key={index} className="movie__genres">{genre}</li>)}
            </ul>
            <p className="movie__summary">{summary.slice(0,180)}...</p>
        </div>

    </div>);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;