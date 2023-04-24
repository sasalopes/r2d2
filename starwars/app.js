const express = require('express');
const app = express();

  const starWarsMovies = [
  {
    title: " A New Hope",
    episode: "IV",
    year: 1977,
    
  },
  {
    title: "The Empire Strikes Back",
    episode: "V",
    year: 1980,
    
  },
  {
    title: "Return of the Jedi",
    episode: "VI",
    year: 1983,
    
  }]

 app.get('/movies/alphabetical', (req, res) => {
  const moviesList  = starWarsMovies.sort((a, b) => a.title.localeCompare(b.title));
  res.json(moviesList );
})

app.get('/movies/episode', (req, res) => {
  const moviesList  = starWarsMovies.sort((a, b) => parseInt(a.episode) - parseInt(b.episode));
  res.json(moviesList );
});

app.get('/movies/year', (req, res) => {
  const moviesList  = starWarsMovies.sort((a, b) => a.year - b.year);
  res.json(moviesList );
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/");
});
