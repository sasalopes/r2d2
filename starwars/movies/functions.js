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

module.exports = { alphabeticalMovies, episodeMovies, yearMovies };