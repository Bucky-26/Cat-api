const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
});

app.post('/addcat', (req, res) => {
  const { breed, name } = req.body;
  pool.query('INSERT INTO your_table_name (breed, name) VALUES (?, ?)', [breed, name], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({ message: 'Cat added successfully', id: results.insertId });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
