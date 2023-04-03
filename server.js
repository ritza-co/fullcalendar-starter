const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.get('/events', (req, res) => {
  db.query('SELECT * FROM events', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post('/events', (req, res) => {
  console.log('Received POST request on /events');
  console.log('Received data:', req.body);

  const { title, start, end } = req.body;
  db.query(
    'INSERT INTO events (title, start, end) VALUES (?, ?, ?)',
    [title, start, end],
    (err, result) => {
      if (err) throw err;
      console.log('Event added with ID:', result.insertId);
      res.send({ id: result.insertId });
    }
  );
});

app.put('/events/:id', (req, res) => {
  const { id } = req.params;
  const { start, end } = req.body;
  db.query(
    'UPDATE events SET start = ?, end = ? WHERE id = ?',
    [start, end, id],
    (err, result) => {
      if (err) throw err;
      res.sendStatus(200);
    }
  );
});

app.delete('/events/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM events WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
