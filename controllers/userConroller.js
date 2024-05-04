const express = require('express');
const db = require('../models')
const app = express();

app.use(express.json());

const userTest = (req,res) => {
    try {
        res.status(200).json({ data: 'test OK', message: 'success' })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}
const addUser = async (req, res) => {
    try {
        const newUser = await db.user.build({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        });
        if (!req.body.email) {
            res.status(200).json({ message: 'Les champs sont requis dans le corps de la requête.' });
        } else {
            // Enregistrez l'utilisateur dans la base de données en appelant la méthode save
            await newUser.save();
            await newUser.reload();
            res.status(200).json({ data: newUser, message: 'Utilisateur ajouté avec succès' });
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Erreur lors de l\'ajout de l\'utilisateur' });
    }
};
module.exports = { userTest, addUser }