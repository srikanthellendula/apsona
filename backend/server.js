const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./db/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: 'http://127.0.0.1:8080',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

const { errorHandler } = require('./middlewares/errorMiddleware');
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
