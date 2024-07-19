// models/user.js
const db = require('../db/db');

const User = {
  create: (username, email, password, callback) => {
    db.run(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
      [username, email, password],
      function(err) {
        if (err) {
          console.error('Error inserting data:', err.message);
          callback(err);
        } else {
          console.log(`A row has been inserted with rowid ${this.lastID}`);
          callback(null, { id: this.lastID, username, email });
        }
      }
    );
  },
  // Add other methods as needed: find, update, delete, etc.
};

module.exports = User;
