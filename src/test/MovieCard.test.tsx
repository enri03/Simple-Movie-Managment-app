/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react'

import { mockMovies } from 'data/testdata';
import { getAvgRating } from 'movies/ratings';

import { MovieCard, MovieProvider } from 'movies/components';
import { MoviesPageObject } from './MoviesPageObject';

describe('MovieCard Component', () => {
    test.each([
        [mockMovies[0].title, mockMovies[0]],
        [mockMovies[1].title, mockMovies[1]],
        [mockMovies[2].title, mockMovies[2]],
        [mockMovies[3].title, mockMovies[3]],
    ])(
        'displays correct movie data for "%s" movie',
        async (title, movie) => {
            // given
            render(<MovieProvider>
                <MovieCard movie={movie}/>
            </MovieProvider>);
            await MoviesPageObject.waitUntilAMovieItemIsDisplayed();

            const titleElement = screen.getByText(new RegExp(movie.title));
            const durationElement = screen.getByText(new RegExp(String(movie.duration)));
            const yearElement = screen.getByText(movie.year);
            const directorElement = screen.getByText(new RegExp(movie.director[0]));
            const starringElement = screen.getByText(new RegExp(movie.director[0]));
            const descriptionElement = screen.getByText(movie.description);
            const displayedImage = document.querySelector("img") as HTMLImageElement;
            
            // then
            expect(titleElement).toBeInTheDocument();
            expect(durationElement).toBeInTheDocument();
            expect(yearElement).toBeInTheDocument();
            expect(directorElement).toBeInTheDocument();
            expect(starringElement).toBeInTheDocument();
            expect(descriptionElement).toBeInTheDocument();
            expect(displayedImage.src).toContain(movie.imageUrl);
        }
    )

    test.each([
        [mockMovies[0].title, mockMovies[0]],
        [mockMovies[1].title, mockMovies[1]],
        [mockMovies[2].title, mockMovies[2]],
        [mockMovies[3].title, mockMovies[3]],
    ])(
        'displays correct movie rating for "%s" movie',
        async (title, movie) => {
            render(<MovieProvider>
                <MovieCard movie={movie}/>
            </MovieProvider>);
            await MoviesPageObject.waitUntilAMovieItemIsDisplayed();
            const ratingElement = screen.getByText(getAvgRating(movie));
            
            // then
            expect(ratingElement).toBeInTheDocument();
        }
    )

    test.each([
        [mockMovies[0].title, mockMovies[0]],
        [mockMovies[1].title, mockMovies[1]],
        [mockMovies[2].title, mockMovies[2]],
        [mockMovies[3].title, mockMovies[3]],
    ])(
        'displays correct movie rating stars width for "%s" movie',
        async (title, movie) => {
            // given
            render(<MovieProvider>
                <MovieCard movie={movie}/>
            </MovieProvider>);
            await MoviesPageObject.waitUntilAMovieItemIsDisplayed();
            const container = document.querySelector("#rate-container") as HTMLImageElement;
            
            // then
            expect(container.style.width).toEqual(`${Math.floor((getAvgRating(movie) * 110) / 5)}px`);
        }
    );
});
