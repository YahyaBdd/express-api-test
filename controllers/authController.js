const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'my_secret_key';


const user = {
  username: 'admin',
  password: bcrypt.hashSync('admin123', 10)
};

// Login controller
exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};