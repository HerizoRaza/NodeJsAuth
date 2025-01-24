const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pool }= require('../bin/database');


const userTest = async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.status(200).json({
          message: 'PostgreSQL connected successfully',
          timestamp: result.rows[0].now,
        });
      } catch (err) {
        console.error('Error connecting to PostgreSQL:', err.message);
        res.status(500).json({
          message: 'Error connecting to PostgreSQL',
          error: err.message,
        });
      }
}
    
const register = async (req, res) => {
    const { email , password , username , role } = req.body;
    //const { createdAt , updatedAt } = convertDate(date)
    try {
        const hashedPassword = await bcryptjs.hash(password, 10);
        const result = await pool.query(
        'INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3 , $4) RETURNING *',
        [username, email, hashedPassword, role])
        res.status(201).json({ message: 'User registered', user: result.rows[0] });
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: error })
    }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

    const user = result.rows[0];
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getUserAll = async (req, res) => {
  try {
      const user = await db.users.findAll()
      if (user.length !== 0) {
          res.status(200).json({ data: user, message: 'success' })
      } else {
          res.status(200).json({ message: 'produit empty' })
      }
  } catch (error) {
      res.status(400).json({ message: error })
  }
}

module.exports = {userTest , register , loginUser, getUserAll }