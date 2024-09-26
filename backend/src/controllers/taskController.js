const Task = require('../models/taskModel');

// Get all tasks
exports.getAllTasks = (req, res) => {
  Task.getAll((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Create a new task
exports.createTask = (req, res) => {
  const { description } = req.body;
  Task.create(description, (err, result) => {
    if (err) throw err;
    res.send({ id: result.insertId, description });
  });
};

// Delete a task
exports.deleteTask = (req, res) => {
  const { id } = req.params;
  Task.delete(id, (err, result) => {
    if (err) throw err;
    res.sendStatus(204);
  });
};
