export interface Movie {
    id: string,
    title: string,
    duration: number,
    year: number,
    director: string[],
    starring: string[],
    description: string,
    imageUrl: string,
    ratings: number[]
}

export interface MovieFetchAction {
    type: 'FETCH',
    payload: {
        data: Movie[]
    }
}

export interface MovieAddAction {
    type: 'ADD',
    payload: {
        movie: Omit<Movie, "id" | "ratings">
    }
}

export interface MovieDeleteAction {
    type: 'DELETE',
    payload: {
        movieId: Movie['id']
    }
}

export interface MovieRateAction {
    type: 'RATE',
    payload: {
        movieId: Movie['id']
        rating: number
    }
}

export type MoviesAction =
    | MovieFetchAction
    | MovieAddAction
    | MovieDeleteAction
    | MovieRateAction
