const { body } = require('express-validator');

const registerValidator = [
  body('firstname').notEmpty().withMessage('firstname requis'),
  body('lastname').notEmpty().withMessage('lastname requis'),
  body('username').notEmpty().withMessage('username requis'),
  body('email').isEmail().withMessage('email invalide'),
  body('password').isLength({ min: 6 }).withMessage('mot de passe min 6 caractères'),
  body('role').optional().isIn(['admin','chauffeur','comptable','gestionnaire']).withMessage('role invalide'),
];

const loginValidator = [
  body('email').isEmail().withMessage('email invalide'),
  body('password').notEmpty().withMessage('mot de passe requis'),
];

module.exports = { registerValidator, loginValidator };
