const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const db = require('./config/dbConfig');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Use task routes
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
