const jwt = require('jsonwebtoken');
const Users = require('../models/user');

const authenticate = (req, res, next) => {
    const authorization = req.headers['authorization'];
    if(authorization){        
        const token = authorization.replace('Bearer ','').replace('bearer ','');
        try {
            const decoded = jwt.verify(token, config.jwtSecret);
           
            if(decoded){
                return Users.findById(decoded.sub, (err, response) => {
                    if(!err && response){
                        console.log(response);
                        req.users = response;
                        return next();
                    }
                    return res.status(401).send({error: 'Unauthorized', message : 'Authentication failed (token) decoded sub.'});
                });
            }
        } catch (e){        
        }
    }
    return res.status(401).send({error: 'Unauthorized', message : 'Authentication failed (token). authorization'});
}

const IsUser = (req, res, next) => {
    if (req.user.user_type_id === 0) {
        next();
    }
    return res.status(401).send("Unauthorized!");   
}
exports.IsAdmin = async (req, res, next) => {
    if (req.user.user_type_id === 1) {
        next();
    }
    return res.status(401).send("Unauthorized!");
}

module.exports = authenticate, IsUser;