const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
