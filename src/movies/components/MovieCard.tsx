import { StarRating, Button } from 'shared/components';
import { useState } from 'react';
import { getAvgRating } from 'movies/ratings';
import { Movie } from 'types';
import { useMovies } from './MovieProvider';

interface MovieCardProps {
    movie: Movie,
}

export const MovieCard = ({ movie }: MovieCardProps) => {
    const { moviesDispatch } = useMovies();
    const [rating,setRating]=useState(getAvgRating(movie))

    // TODO: implement required functionality

    return (
        <div data-testid={`movie-item-${movie.id}`}>
            {<img src={movie.imageUrl}/>}
            <img className="card-img-top" alt="" />
            <div className="card-body">
                <h4 className="card-title">
                    {movie.title}
                </h4>
                <h6 className="card-year mb-2 text-muted">
                    {movie.year}
                </h6>
                <p className="text-justify" style={{ fontSize: '14px' }}>
                    {movie.description}
                </p>
                <h6 className="card-duration mb-2">
                    {movie.duration}
                </h6>
                <h6 className={`card-director mb-2 ${movie.id}`}>
                {`Director/s: ${movie.director}`}
                </h6>
                <h6 className="card-starring mb-2">
                {`Starring Actors:${movie.starring}`}
                </h6>
                {/* TODO: Implement delete functionality */}
                <Button onClick={()=>{moviesDispatch({type:'DELETE',payload:{movieId:movie.id}})}}>Delete</Button>
            </div>
            <div className="card-footer">
                <div className="clearfix">
                <div className="float-left mt-1">
                <StarRating rating={rating} onRate={(rat)=>{moviesDispatch({type:'RATE',payload:{movieId:movie.id,rating:rat}});setRating(getAvgRating(movie))}}/>
                </div>
                <div data-testid="movie-rating" className="card-footer-badge float-right badge badge-primary badge-pill">
                    {getAvgRating(movie)}
                </div>
                </div>
            </div>
        </div>    
    )
};
