const db = require('../config/dbConfig');

const Task = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM tasks';
    db.query(sql, callback);
  },

  create: (description, callback) => {
    const sql = 'INSERT INTO tasks (description) VALUES (?)';
    db.query(sql, [description], callback);
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = Task;
