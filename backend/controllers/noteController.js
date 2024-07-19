// controllers/noteController.js
exports.createNote = (req, res) => {
  res.send('This is create notes route')
  console.log('Hello')
};

exports.getNotes = (req, res) => {
  // Logic for getting notes
  res.send('This is Get notes route')
  console.log('Hello')
};

exports.updateNote = (req, res) => {
  // Logic for updating a note
};

exports.deleteNote = (req, res) => {
  // Logic for deleting a note
};
