const express = require('express');
const db = require('../models')
const app = express();
const { hashpassword } = require('../midlleware/helper')
const jwt = require("jsonwebtoken");


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
        var password = hashpassword(req.body.password)
        const newUser = await db.users.build({
            email: req.body.email,
            password: password,
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            role: req.body.role,            
            phone: req.body.phone            
        });
        if (!req.body.email || !req.body.username || !req.body.password) {
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

const getAll = async (req, res) => {
    try {
        const user = await db.users.findAll()
        if (user.length !== 0) {
            res.status(200).json({ data: user, message: 'success' })
        } else {
            res.status(200).json({ message: 'user empty' })
        }
    } catch (error) {
        res.status(400).json({ message: "error "})
    }
}
module.exports = { userTest, addUser , getAll}