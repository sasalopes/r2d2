const express = require('express')
const bodyParser = require('body-parser');
const movieRoutesTopic = require('./topic/movies/routes')
var cors = require('cors')
const port = process.env.PORT || 3001;

const app = express()
app.options('*', cors())
app.use(bodyParser.json())
app.use(movieRoutesTopic)





app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
  });