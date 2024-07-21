const express = require("express");

app.use(express.json());

const Register = async (req, res, next) => {
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
            await newUser.save();
            await newUser.reload();
            res.status(200).json({ data: newUser, message: 'Utilisateur ajouté avec succès' });
        }
    } catch (error) {
        
    }
}

module.exports = { Register } 