const express = require('express');
const router = express.Router();
const { alphabeticalMovies, episodeMovies, yearMovies } = require('./functions');

router.get('/movies/alphabetical', alphabeticalMovies);

router.get('/movies/episode', episodeMovies);

router.get('/movies/year', yearMovies);

module.exports = router;