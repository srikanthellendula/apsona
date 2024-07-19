const express = require('express');
const { registerUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.get('/profile', getUserProfile);

module.exports = router;
