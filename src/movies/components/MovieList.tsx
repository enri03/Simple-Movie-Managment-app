import React, { useState } from "react";

import { MovieCard } from "./MovieCard";
import { AddMovieButton } from "./AddMovieButton";
import { AddMovieForm } from "./AddMovieForm";
import { Card } from "shared/components";

import { useMovies } from "./MovieProvider";
import { Movie } from "types";

type NewMovieMode = "BUTTON" | "FORM";

export const MovieList = () => {
  const { movies, moviesDispatch } = useMovies();
  const [displayOptionType, setDisplayOptionType] =
    useState<NewMovieMode>("BUTTON");
  type MovieFormData = Record<"title" | "description" | "imageUrl", string> &
    Record<"director" | "starring", string[]> &
    Record<"duration" | "year", number>;
  // TODO: Display list of movies
  const submitHandler = (newMovie: MovieFormData) => {
    moviesDispatch({ type: "ADD", payload: { movie: newMovie } });
    console.log("new movie", newMovie);
  };
  const cancelHandler = () => {
    console.log("canceled");
  };

  return (
    <div className="card-deck">
      {movies.map((movie) => (
        <Card key={movie.id}>
          <MovieCard key={movie.id} movie={movie} />
        </Card>
      ))}
      <Card>
        {/* TODO: Implement displaying appropriate card for add movie - button or form */}
        {/* TODO: use AddMovieButton and AddMovieForm */}
        <AddMovieButton onClick={() => setDisplayOptionType("FORM")} />
        
        <AddMovieForm onSubmit={submitHandler} onCancel={cancelHandler} />
       
      </Card>
    </div>
  );
};
