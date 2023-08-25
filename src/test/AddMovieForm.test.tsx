import { render } from '@testing-library/react'

import { AddMovieForm, MovieProvider } from 'movies/components';
import { MoviesPageObject } from './MoviesPageObject';

describe('AddMovieForm Component', () => {
    it('calls onSubmitSpy handler for submit button', async () => {
        // given
        const onSubmitSpy = jest.fn();
        const onCancelSpy = jest.fn();
        render(<AddMovieForm onCancel={onCancelSpy} onSubmit={onSubmitSpy} />);

        // when
        MoviesPageObject.fillNewMovieForm({
            Title: 'The Green Mile',
            Year: '1999',
            Duration: '189',
            Director: 'Frank Darabont',
            Starring: 'Tom Hanks, David Morse, Bonnie Hunt, Michael Clarke Duncan',
            Description: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
            Url: "some url",
        });
        MoviesPageObject.clickSubmitButton();
        
        // then
        expect(onSubmitSpy).toHaveBeenCalled();
        expect(onCancelSpy).not.toHaveBeenCalled();
    });

    it('calls onCancelSpy handler for cancel button', async () => {
        // given
        const onSubmitSpy = jest.fn();
        const onCancelSpy = jest.fn();
        render(<AddMovieForm onCancel={onCancelSpy} onSubmit={onSubmitSpy} />);

        // when
        MoviesPageObject.fillNewMovieForm({
            Title: 'The Green Mile',
            Year: '1999',
            Duration: '189',
            Director: 'Frank Darabont',
            Starring: 'Tom Hanks, David Morse, Bonnie Hunt, Michael Clarke Duncan',
            Description: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
            Url: "some url",
        });
        MoviesPageObject.clickCancelButton();
        
        // then
        expect(onSubmitSpy).not.toHaveBeenCalled();
        expect(onCancelSpy).toHaveBeenCalled();
    });

});

