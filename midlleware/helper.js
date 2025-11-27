var sha256 = require('crypto-js/sha256');
const jwt = require('jsonwebtoken');
const rolesAutorises = ["admin"]

const verifyAuth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "Aucun token fourni" });
        }
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ token });
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET || "eysdmfklsdfjsdfsmdflkqdjfqdmflkjdkeifdjd");
        const userId = decodedToken.userId;
        const role = decodedToken.role
        req.auth = {
            userId: userId,
            role: role
        };
     next();
    } catch(error) {
        console.error("❌ Erreur de vérification du token :", error.message);
        return res.status(401).json({ message: "Token invalide ou expiré" });
    }
};

const hashpassword = (password) => {
    return sha256(password).words.toString();
}

const verifyRole = (...rolesAutorises) => {
  return (req, res, next) => {
    if (!rolesAutorises.includes(req.auth.role)) {
      return res.status(403).json({ message: "Accès refusé : rôle non autorisé" });
    }
    next();
  };
};

module.exports = { hashpassword, verifyAuth, verifyRole}