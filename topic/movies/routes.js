const controller = require('./controller')
const express = require("express");
const router = express.Router();
const { validationResult } = require('express-validator')
const schemas = require('./schemas')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

const express = require('express');
const router = express.Router();
const { starWarsMovies,getMoviesOrderByName,getMoviesOrderByEpisode, getMoviesOrderByYear, trilogyMovies, addFilm,deleteFilm } = require('./functions');
const newFilmSchema = require('./schemas')

router.get('/movies/alphabetical', alphabeticalMovies);

router.get('/movies/episode', episodeMovies);

router.get('/movies/year', yearMovies);

router.get('/movies/:trilogy', trilogyMovies);

router.post('/movies', newFilmSchema, addfilm);

router.delete('/movies/:title', deletefilm)

module.exports = router;