import { Movie } from "types";

export const mockMovies: Movie[] = [
    {
        "id": 'fakeid-fight-club', 
        "title": "Fight Club",
        "duration": 139,
        "year": 1999,
        "director": ["David Fincher"],
        "starring": ["Brad Pitt", "Edward Norton", "Meat Loaf"],
        "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        "imageUrl": "https://picsum.photos/id/444/320/240",
        "ratings": [4, 5, 5]
    },
    {
        "id": 'fakeid-matrix', 
        "title": "Matrix",
        "duration": 136,
        "year": 1999,
        "director": ["Lana Wachowski", "Lilly Wachowski"],
        "starring": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        "imageUrl": "https://picsum.photos/id/555/320/240",
        "ratings": [1, 5]
    },
    {
        "id": 'fakeid-the-godfather', 
        "title": "The Godfather",
        "duration": 175,
        "year": 1972,
        "director": ["Francis Ford Coppola"],
        "starring": ["Marlon Brando", "Al Pacino", "James Caan"],
        "description": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        "imageUrl": "https://picsum.photos/id/666/320/240",
        "ratings": [4, 5, 4, 5, 3]
    },
    {
        "id": 'fakeid-the-silence-of-the-lambs', 
        "title": "The Silence of the Lambs",
        "duration": 118,
        "year": 1991,
        "director": ["Jonathan Demme"],
        "starring": [
          "Jodie Foster",
          "Anthony Hopkins",
          "Scott Glenn",
          "Ted Levine"
        ],
        "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        "imageUrl": "https://picsum.photos/id/777/320/240",
        "ratings": [2, 5, 5, 5, 4, 5]
    },
];

export const fightClubMovie = mockMovies[0];
