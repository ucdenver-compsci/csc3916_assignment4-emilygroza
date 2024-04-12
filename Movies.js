var mongoose = require('mongoose');

mongoose.connect(process.env.DB);

// Movie schema
const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    releaseDate: Date,
    genre: {
        type: String,
        enum: [
            'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Western', 'Science Fiction'
        ],
    },
    actors: [{
        actorName: String,
        characterName: String,
    }],
});

// Create the Movie model
const Movie = mongoose.model('Movie', MovieSchema);

// Example movie documents
const movies = [
    {
        title: 'The Lord of the Rings: The Return of the King',
        releaseDate: new Date('2003-12-17'),
        genre: 'Fantasy',
        actors: [
            { actorName: 'Elijah Wood', characterName: 'Frodo Baggins' },
            { actorName: 'Sean Astin', characterName: 'Samwise Gamgee' },
            { actorName: 'Ian McKellen', characterName: 'Gandalf' }
        ]
    },
    {
        title: 'Up',
        releaseDate: new Date('2009-05-29'),
        genre: 'Adventure',
        actors: [
            { actorName: 'Edward Asner', characterName: 'Carl Fredricksen' },
            { actorName: 'Bob Peterson', characterName: 'Dug' },
            { actorName: 'Jordan Nagai', characterName: 'Russell' }
        ]
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        releaseDate: new Date('2001-11-16'),
        genre: 'Fantasy',
        actors: [
            { actorName: 'Daniel Radcliffe', characterName: 'Harry Potter' },
            { actorName: 'Emma Watson', characterName: 'Hermione Granger' },
            { actorName: 'Rupert Grint', characterName: 'Ron Weasley' }
        ]
    },
    {
        title: 'Rogue One: A Star Wars Story',
        releaseDate: new Date('2016-12-16'),
        genre: 'Science Fiction',
        actors: [
            { actorName: 'Felicity Jones', characterName: 'Jyn Erso' },
            { actorName: 'Diego Luna', characterName: 'Cassian Andor' },
            { actorName: 'Donnie Yen', characterName: 'Chirrut Imwe' }
        ]
    },
    {
        title: 'Fast & Furious Presents: Hobbs & Shaw',
        releaseDate: new Date('2019-08-02'),
        genre: 'Action',
        actors: [
            { actorName: 'Dwayne Johnson', characterName: 'Luke Hobbs' },
            { actorName: 'Jason Statham', characterName: 'Deckard Shaw' },
            { actorName: 'Idris Elba', characterName: 'Brixton Lore' }
        ]
    }
];

// Insert movies into the database
Movie.insertMany(movies)
    .then(() => console.log('Movies inserted successfully'))
    .catch(err => console.error(err));

// Export the Movie model
module.exports = Movie;
