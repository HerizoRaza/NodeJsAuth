const Joi = require('joi');

const loginParam = {
    body: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}

/**
 * validation des parametre post pour la creation de nouvel utilisateur
 */
const singinParam = {
    body: Joi.object({
      username: Joi.string().required(),
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  };



module.exports = { loginParam, singinParam };