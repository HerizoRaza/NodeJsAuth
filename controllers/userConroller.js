const admin = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
const chauffeur = (req, res) => {
    res.status(200).send("Chauffeur Content.");
  };
  
const comptable = (req, res) => {
    res.status(200).send("comptable Content.");
  };
  
const gestionnaire = (req, res) => {
    res.status(200).send("gestionnaire Content.");
  };

  module.exports = { gestionnaire, comptable, chauffeur, admin };