const movies = require("./db.json")

function starWarsMovies () {
  return movies
}

function alphabeticalMovies(req, res) {
  const moviesList  = starWarsMovies().sort((a, b) => a.title.localeCompare(b.title));
  res.json(moviesList);
}

function episodeMovies(req, res) {
  const moviesList  = starWarsMovies().sort((a, b) => parseInt(a.episode) - parseInt(b.episode));
  res.json(moviesList);
}

function yearMovies(req, res) {
  const moviesList  = starWarsMovies().sort((a, b) => a.year - b.year);
  res.json(moviesList);
}

function trilogyMovies(req, res) {
  const trilogy = req.params.trilogy;
  const filteredFilms = starWarsMovies().filter(film => film.trilogy === trilogy);

  if (filteredFilms.length === 0) {
    return res.status(404).send('Trilogy not found');
  }

  res.send(filteredFilms);
}

function addfilm(req, res) {
  const newFilm = req.body;
  starWarsMovies().push(newFilm);
  res.status(201).send('Filme adicionado');
}

function deletefilm(req, res) { 
  const title = req.params.title;
  const index = starWarsMovies().findIndex(film => film.title === title);

  if (index === -1) {
    return res.status(404).send('Film not found');
  }

  starWarsMovies().splice(index, 1);
  res.send('Filme removido');
}

module.exports = { alphabeticalMovies, episodeMovies, yearMovies,trilogyMovies,addfilm,deletefilm };