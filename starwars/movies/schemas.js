const { checkSchema } = require('express-validator');

const newFilmSchema = checkSchema({
  title: {
    isString: {
      errorMessage: 'O título deve ser uma string',
    },
    notEmpty: {
      errorMessage: 'O título é obrigatório',
    },
  },
  year: {
    isInt: {
      errorMessage: 'O ano deve ser um número inteiro',
    },
    isInt: {
      options: {
        min: 1900,
        max: 2100,
      },
      errorMessage: 'O ano deve estar entre 1900 e 2100',
    },
  },
  director: {
    isString: {
      errorMessage: 'O diretor deve ser uma string',
    },
    notEmpty: {
      errorMessage: 'O diretor é obrigatório',
    },
  },
});

module.exports = newFilmSchema;