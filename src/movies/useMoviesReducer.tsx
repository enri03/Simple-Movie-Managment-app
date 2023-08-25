import React, { useReducer, useEffect } from "react";
import { v4 as uuid } from "uuid";

import { Movie, MoviesAction } from "types";
import { getMovies } from "api/movies";

interface MoviesState {
  movies: Movie[];
  initialized: boolean;
}

export function useMoviesReducer(): [
  MoviesState,
  React.Dispatch<MoviesAction>
] {
  // TODO: Implement all action processing

  const movieReducer = (
    state: MoviesState,
    action: MoviesAction
  ): MoviesState => {
    switch (action.type) {
      case "FETCH":
        return { ...state, movies: action.payload.data, initialized: true };

      case "ADD":
        const newMovie: Movie = {
          id: uuid(), // Generate a new unique ID using the uuid library
          ...action.payload.movie, // Use the movie data from the payload
          ratings: [],
        };
        return { ...state, movies: [...state.movies, newMovie] };

      case "DELETE":
        const updatedMovies = state.movies.filter(
          (movie) => movie.id !== action.payload.movieId
        );
        return { ...state, movies: updatedMovies };

      case "RATE":
        const updateMovie = state.movies.find(
          (movie) => movie.id === action.payload.movieId
        );
        updateMovie?.ratings.push(action.payload.rating);
        return { ...state };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(movieReducer, {
    movies: [],
    initialized: false,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await getMovies();
        dispatch({ type: "FETCH", payload: { data: fetchedMovies } });
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return [state, dispatch];
}
