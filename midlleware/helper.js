var sha256 = require('crypto-js/sha256');

const hashpassword = (password) => {
    return sha256(password).words.toString();
} 

module.exports = { hashpassword }