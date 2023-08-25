import { render, screen } from '@testing-library/react'

import { mockMovies } from 'data/testdata';
import App from '../App';

import { getMovies } from '../api/movies';
import { MoviesPageObject } from './MoviesPageObject';

jest.mock('../api/movies');

describe('App Component', () => {

    it('should display header', async () => {
        // given
        (getMovies as jest.Mock).mockImplementation(async () => mockMovies)
        render(<App />);
        await MoviesPageObject.waitUntilAMovieItemIsDisplayed();

        // then
        MoviesPageObject.expectTextVisible(/React Movie Management Application/i);
    });

    it('should fetch movies using the service', async () => {
        // given
        (getMovies as jest.Mock).mockImplementation(async () => mockMovies)
        render(<App />);
        await MoviesPageObject.waitUntilAMovieItemIsDisplayed();

        // then
        expect(getMovies).toHaveBeenCalled();
    });

    it('should display current movie rating', async () => {
        // given
        (getMovies as jest.Mock).mockImplementation(async () => mockMovies)
        render(<App />);
        await MoviesPageObject.waitUntilAMovieItemIsDisplayed();

        // then
        MoviesPageObject.expectMovieRating('fakeid-fight-club', "4.67");
    });

    it('should update the rating after star icon was clicked', async () => {
        // given
        (getMovies as jest.Mock).mockImplementation(async () => mockMovies)
        render(<App />);
        await MoviesPageObject.waitUntilAMovieItemIsDisplayed();

        // when
        MoviesPageObject.rateMovie('fakeid-fight-club', 1);

        // then
        MoviesPageObject.expectMovieRating('fakeid-fight-club', "3.75");
    });

    it('should add a new movie after form was filled and submitted', async () => {
        // given
        (getMovies as jest.Mock).mockImplementation(async () => mockMovies)
        render(<App />);
        await MoviesPageObject.waitUntilAMovieItemIsDisplayed();

        // then
        MoviesPageObject.expectMoviesVisibleCount(4);

        // when
        MoviesPageObject.clickAddMovieButton();
        MoviesPageObject.fillNewMovieForm({
            Title: 'The Green Mile',
            Year: '1999',
            Duration: '189',
            Director: 'Frank Darabont',
            Starring: 'Tom Hanks, David Morse, Bonnie Hunt, Michael Clarke Duncan',
            Description: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
            Url: "some url",
        })
        MoviesPageObject.clickSubmitButton();

        // then
        MoviesPageObject.expectMoviesVisibleCount(5);
        MoviesPageObject.expectTextVisible(/Add Movie/i)
        MoviesPageObject.expectTextVisible(
            /The Green Mile/i,
            /Frank Darabont/i,
            /Tom Hanks/i,
            /The lives of guards on Death Row are affected by one of their charges/i,
        )
    });
});
