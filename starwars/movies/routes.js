const express = require('express');
const router = express.Router();
const { alphabeticalMovies, episodeMovies, yearMovies,trilogyMovies, addfilm,deletefilm } = require('./functions');
const newFilmSchema = require('./schemas')

router.get('/movies/alphabetical', alphabeticalMovies);

router.get('/movies/episode', episodeMovies);

router.get('/movies/year', yearMovies);

router.get('/movies/:trilogy', trilogyMovies);

router.post('/movies', newFilmSchema, addfilm);

router.delete('/movies/:title', deletefilm)

module.exports = router;