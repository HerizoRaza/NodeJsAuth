const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userTest = async (req, res) => {
  res.status(200).json({message : "success code"})
};

const register = async(req,res) => {
  try {
    const  { firstname,lastname,username, email, password, role } = req.body;
    console.log("Données reçues :", req.body);
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "Email déjà utilisé" });

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer utilisateur
    const user = new User({ firstname,lastname,username , email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: "Utilisateur créé avec succès" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async(req, res) => {
  try {
    const { email, password } = req.body;

    // Vérifier si user existe
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Utilisateur non trouvé" });

    // Vérifier mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Mot de passe incorrect" });

    // Générer token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET || "eysdmfklsdfjsdfsmdflkqdjfqdmflkjdkeifdjd",
      { expiresIn: "24h" }
    );
    console.log(token)

    res.json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
module.exports = {userTest, register, login}