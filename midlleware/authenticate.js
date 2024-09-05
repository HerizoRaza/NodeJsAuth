const jwt = require('jsonwebtoken');
const config = require('../bin/Config')


const authenticate = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

        if (token = null ) return res.status(401).json({error:"Null token"});
        jwt.verify(token, config.JWT_SECRET, (error, id) => {
            if (error) return res.status(403).json({error : error.message});
            req.id = id;
            next();
        });
        res.status(200).json({message: 'ato eeeeee' })
    } catch (error) {
        res.status(400).json({message: error.message }); // Capture toute autre erreur
    }
};

module.exports = authenticate;