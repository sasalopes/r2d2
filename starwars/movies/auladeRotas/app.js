const express = require('express');
const app = express();

const starWarsFilms = [
  { title: 'Star Wars: Episode IV - A New Hope', trilogy: 'Original Trilogy', year: 1977 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', trilogy: 'Original Trilogy', year: 1980 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', trilogy: 'Original Trilogy', year: 1983 },
  { title: 'Star Wars: Episode I - The Phantom Menace', trilogy: 'Prequel Trilogy', year: 1999 },
  { title: 'Star Wars: Episode II - Attack of the Clones', trilogy: 'Prequel Trilogy', year: 2002 },
  { title: 'Star Wars: Episode III - Revenge of the Sith', trilogy: 'Prequel Trilogy', year: 2005 },
  { title: 'Star Wars: Episode VII - The Force Awakens', trilogy: 'Sequel Trilogy', year: 2015 },
  { title: 'Star Wars: Episode VIII - The Last Jedi', trilogy: 'Sequel Trilogy', year: 2017 },
  { title: 'Star Wars: Episode IX - The Rise of Skywalker', trilogy: 'Sequel Trilogy', year: 2019 },
];

app.get('/films/:trilogy', (req, res) => {
  const trilogy = req.params.trilogy;
  const filteredFilms = starWarsFilms.filter(film => film.trilogy === trilogy);

  if (filteredFilms.length === 0) {
    return res.status(404).send('Trilogy not found');
 }
  res.send(filteredFilms);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
