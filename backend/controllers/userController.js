// controllers/userController.js
exports.registerUser = (req, res) => {
    // Logic for registering a user
    res.status(201).json({ message: 'User registered successfully' });
  };
  
  exports.getUserProfile = (req, res) => {
    // Logic for getting user profile
    console.log('User Profile fetching')
    res.send('Profile fetched')
    // res.status(200).json({ message: 'User profile data' });
  };
  