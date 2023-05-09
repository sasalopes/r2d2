const {PrismaClient} = require (".prisma/client")

const prisma  = new PrismaClient()

function starWarsMovies () {
  return movies
}

const getMoviesOrderByName = async () => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      name: "asc"
    }
  });
  return movies;
}

const getMoviesOrderByEpisode = async () => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      episode: "asc"
    }
  })
  return movies
}

const getMoviesOrderByYear = async () => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      year: "asc"
    }
  })
  return movies
}

const getMoviesByTrilogy = async (trilogy) => {
  const movies = await prisma.movie.findMany({
    where: {
      trilogy: trilogy
    }
  })
  return movies
}

const trilogyMovies = async (req, res) => {
  const trilogy = req.params.trilogy;
  const filteredFilms = await getMoviesByTrilogy(trilogy);

  if (filteredFilms.length === 0) {
    return res.status(404).send('Trilogy not found');
  }

  res.json(filteredFilms);
}

const addFilm = async (req, res) => {
  const newFilm = req.body;
  await prisma.movie.create({
    data: newFilm
  })
  res.status(201).send('Filme adicionado');
}

const deleteFilm = async (title) => {
  const deletedFilm = await prisma.movie.delete({
    where: {
      title: title
    }
  });
  return deletedFilm;
}

module.exports = {starWarsMovies,getMoviesOrderByName,getMoviesOrderByEpisode, getMoviesOrderByYear, trilogyMovies, addFilm,deleteFilm };