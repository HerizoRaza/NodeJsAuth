const db = require('../models')
var sha256 = require('crypto-js/sha256');

const register = async (req, res) => {
    try {
        var password = sha256(password).words.toString();
        const user = await db.users.build({
            email: req.body.email,
            password: password,
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            role: req.body.role,
            phone: req.body.phone,
        })
        if (!req.body.email || !req.body.username || !req.body.password) {
            res.status(200).json({ message: 'error body required' })
        } else {
            await user.save();
            await user.reload();
            res.status(200).json({ data: user, message: 'success' })
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
}
const login = async (req, res) => { 
    try {
        const { username, password } = req.body;
        const user = await user.findOne({ username });
            if (!user) {
                return res.status(401).json({ error: 'Authentication failed' });
            }
        const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Authentication failed' });
            }
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h',
        });
        res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ error: 'Login failed' });
        }
}


module.exports = { register , login }